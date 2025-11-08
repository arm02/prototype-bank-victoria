import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CreateNewsRequestCollection } from '../../news/news.collection';
import { ChannelResponseCollection } from '../../channels/channels.collection';
import { WriterResponseCollection } from '../../writer/write.collection';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { ChannelsService } from '../../channels/channels.service';
import { WriterService } from '../../writer/writer.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { NewsService } from '../../news/news.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { ImageBucketComponent } from 'src/app/components/dialog/image-bucket/image-bucket.component';
import { ListNewsComponent } from 'src/app/components/dialog/list-news/list-news.component';
import { MediaTypeCollectionData } from '../media.collection';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AddWidgetComponent } from '../../news/form-news/add-widget.component';
import { environment } from 'src/environments/environments';
import { AddEmbedLinkComponent } from '../../news/form-news/add-embed-link.component';
import { AddPointPentingComponent } from '../../news/form-news/add-point-penting.component';
import { SitesService } from '../../sites/sites.service';
import { SitesResponseCollection } from '../../sites/sites.collection';
import { AddEmbedTradingViewComponent } from '../../news/form-news/add-trading-view.component';
import { DataWrapperComponent } from '../../data-wrapper/data-wrapper.component';
import { AdsArticleComponent } from '../../article-ads/article-ads.component';
import { AutosaveService } from 'src/app/components/services/autosave.service';

@Component({
  selector: 'app-form-media',
  templateUrl: './form-media.component.html',
  styleUrls: ['./form-media.component.scss'],
})
export class FormMediaComponent implements OnInit, OnDestroy {
  news: CreateNewsRequestCollection = new CreateNewsRequestCollection();
  private readonly STORAGE_KEY = 'autosave_create_news_media';
  sites: SitesResponseCollection[] = [];
  files: File[] = [];
  currentDatetime = this.datePipe.transform(new Date(), 'HH:mm') as string;
  date = new Date();
  tinyMceConfig: any = '';
  content: any;
  editor: any;
  newsTypeData = MediaTypeCollectionData;
  environment = environment.production;
  channels: ChannelResponseCollection[] = [];
  writers: WriterResponseCollection[] = [];
  querySearchWriter = '';
  changeDate = false;
  labelForm = '';
  listedOnChannel = true;
  mediaList: any = [];
  @ViewChild('openToImagesBucket') openToImagesBucket:
    | ElementRef<HTMLElement>
    | any;
  @ViewChild('openToReadTo') openToReadTo: ElementRef<HTMLElement> | any;
  @ViewChild('openToWidget') openToWidget: ElementRef<HTMLElement> | any;
  @ViewChild('openToPoinPenting') openToPoinPenting:
    | ElementRef<HTMLElement>
    | any;
  @ViewChild('openToEmbedLink') openToEmbedLink: ElementRef<HTMLElement> | any;
  @ViewChild('openToTradingView') openToTradingView:
    | ElementRef<HTMLElement>
    | any;
  @ViewChild('openDataWrapper') openDataWrapper: ElementRef<HTMLElement> | any;

  constructor(
    private cloudinaryService: CloudinaryService,
    private channelService: ChannelsService,
    private writerService: WriterService,
    private layoutService: LayoutsService,
    private newsService: NewsService,
    private datePipe: DatePipe,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private siteService: SitesService,
    private autosaveService: AutosaveService
  ) {}

  ngOnInit() {
    this.configureTinyMce();
    this.getAllSites();
    this.getAllChannel();
    this.getAllWriter();
    this.meta.addTags([
      {
        name: 'description',
        content: 'This is an article about Angular Meta service',
      },
      {
        name: 'keywords',
        content: 'angular, javascript, typescript, meta, seo',
      },
    ]);
    if (this.route.snapshot.paramMap.get('id')) {
      this.labelForm = 'Edit Media';
      this.getAndMappingNews();
    } else {
      this.labelForm = 'Create Media';
      this.news = this.autosaveService.load(
        this.STORAGE_KEY,
        new CreateNewsRequestCollection()
      );
      if (this.news.date) {
        this.date = new Date(this.news.date);
        this.currentDatetime = this.datePipe.transform(
          this.news.date,
          'HH:mm'
        ) as string;
      }
      this.listedOnChannel = this.news.listed === 'listed' ? true : false;
      this.listedChange(this.listedOnChannel);
      if (this.news.media_list?.length > 0)
        this.mediaList = this.news.media_list;
      this.autosaveService.startAutoSave(this.STORAGE_KEY, this.news, 5000);
    }
  }

  ngOnDestroy(): void {
    this.autosaveService.stopAutoSave(this.STORAGE_KEY);
  }

  isOptionDisabled(opt: any, value: string[]): boolean {
    return value.length >= 3 && !value.find((el) => el == opt);
  }

  getAndMappingNews() {
    this.newsService
      .getNews(this.route.snapshot.paramMap.get('id') as string)
      .subscribe((res) => {
        this.news.post_id = res.post.post_id;
        this.news.titlePost = res.post.titlePost;
        this.news.linkPost = res.post.linkPost;
        this.news.date = res.post.date;
        this.date = new Date(res.post.date);
        this.currentDatetime = this.datePipe.transform(
          res.post.date,
          'HH:mm'
        ) as string;
        if (res.post.status === 'draft' && this.date <= new Date()) {
          this.date = new Date();
          this.currentDatetime = this.datePipe.transform(
            new Date(),
            'HH:mm'
          ) as string;
        }
        this.news.thumbnail = res.post.thumbnail;
        this.news.textThumbnail = res.post.textThumbnail;
        this.news.type = res.post.type;
        this.news.pageId = res.post.page_id;
        this.news.writerId = res.post.writer_id
          ? res.post.writer_id.split(',')
          : [];
        this.news.reporters = res.post.reporters
          ? res.post.reporters.split(',')
          : [];
        this.news.content = res.post.content;
        this.news.metaDesc = res.post.meta_desc;
        this.news.metaKeyword = res.post.meta_keyword;
        if (!this.environment) {
          this.news.metaTopic = res.post.meta_topic;
        }
        this.mediaList = res.post.post_media;
        this.news.hashtag = res.post.hashtag
          ? res.post.hashtag.replace(' ', '').split(',')
          : [];
        this.listedOnChannel = res.post.listed === 'listed' ? true : false;
        this.listedChange(this.listedOnChannel);
        this.news.site_id = res.post.site_id;
        this.news.ads_article = res.post?.master_data_article_ad?.uuid || '';
        this.news.generative_ads = res.post?.generative_ads || 0;
        this.news.selected_ads_article =
          res.post?.master_data_article_ad?.title;
      });
  }

  getAllSites() {
    this.siteService.getAllSites('', 1, 9999).subscribe({
      next: (res) => {
        this.sites = [{ name: 'Main', uuid: 'main' }, ...res.data];
      },
    });
  }

  getAllChannel() {
    this.channelService.getAllChannel('', 1, 9999).subscribe((res) => {
      this.channels = res.object;
    });
  }

  getAllWriter() {
    this.writerService
      .getAllWriter(this.querySearchWriter, 1, 255)
      .subscribe((data) => {
        this.writers = data.object;
      });
  }

  querySearch = (query: string = '') => {
    if (query.trim() === '') {
      return;
    }

    const searchTermLowerCase = query.toLowerCase();
    this.writers.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (
        nameA.includes(searchTermLowerCase) &&
        !nameB.includes(searchTermLowerCase)
      ) {
        return -1;
      }
      if (
        !nameA.includes(searchTermLowerCase) &&
        nameB.includes(searchTermLowerCase)
      ) {
        return 1;
      }
      return 0;
    });
  };

  createNews(type: string) {
    this.checkValidationBeforeSaved(type);
  }

  checkValidationBeforeSaved(type: string) {
    if (!this.news.titlePost) {
      this.layoutService.errorMessageDialog('Please Fill Title');
    } else if (
      !this.news.metaDesc ||
      this.news.metaDesc.length < 80 ||
      this.news.metaDesc.length > 160
    ) {
      this.layoutService.errorMessageDialog(
        'Meta descriptions must have a value minimum of 80 characters and no more than 160 characters'
      );
    } else if (!this.news.metaKeyword) {
      this.layoutService.errorMessageDialog('Please Fill Meta Keyword');
    } else if (!this.date) {
      this.layoutService.errorMessageDialog('Please Fill Date');
    } else if (!this.news.type) {
      this.layoutService.errorMessageDialog('Please Select Type News');
    } else if (!this.news.pageId) {
      this.layoutService.errorMessageDialog('Please Select Channel');
    } else if (!this.news.writerId) {
      this.layoutService.errorMessageDialog('Please Select Writer');
    } else if (!this.news.content) {
      this.layoutService.errorMessageDialog('Please Fill Content');
    } else if (!this.news.thumbnail) {
      this.layoutService.errorMessageDialog('Please Select Thumbnail');
    } else {
      this.getDateTimeAppoch();
      if (type === 'draft') {
        this.news.status = 'draft';
      } else {
        if (this.news.date >= new Date().getTime()) {
          this.news.status = 'scheduled';
        } else {
          this.news.status = 'published';
        }
      }
      if (this.news.post_id) {
        this.updateNews();
      } else {
        this.postNews();
      }
    }
  }

  postNews() {
    this.newsService.createNews(this.news).subscribe((res) => {
      this.newsService
        .createMediaNews(res.post.post_id, this.mediaList)
        .subscribe((response) => {
          this.autosaveService.clear(this.STORAGE_KEY);
          this.layoutService.postCreated();
          this.router.navigate(['/pages/media']);
        });
    });
  }

  updateNews() {
    this.newsService.updateNews(this.news).subscribe((res) => {
      this.newsService
        .createMediaNews(this.news.post_id, this.mediaList)
        .subscribe((response) => {
          this.layoutService.postUpdated();
        });
    });
  }

  cancel() {
    this.router.navigate(['/pages/media']);
  }

  configureTinyMce() {
    this.tinyMceConfig = {
      selector: '#editorMedia',
      height: 500,
      toolbar_sticky: true,
      toolbar_sticky_offset: 0,
      mobile: {
        height: 300,
        toolbar_sticky: true,
        toolbar_sticky_offset: 0,
      },
      branding: false,
      image_advtab: true,
      image_caption: true,
      imagetools_toolbar: `
        rotateleft rotateright |
        flipv fliph |
        imageoptions`,
      inline: false,
      menubar: true,
      paste_data_images: !0,
      autoresize_bottom_margin: 400,
      contextmenu: 'paste link image table',
      autosave_restore_when_empty: !environment.production,
      autosave_ask_before_unload: true,
      autosave_interval: '5s',
      autosave_retention: '1440m',
      images_upload_handler: (blobInfo: any) =>
        new Promise((resolve) => {
          const file = blobInfo.blob();
          let uploadedFile = '';
          this.cloudinaryService.uploadWithSignature(file).subscribe((data) => {
            uploadedFile = data.secure_url;
            resolve(uploadedFile);
          });
          return uploadedFile;
        }),
      plugins:
        'paste anchor tinydrive editimage autolink autoresize autosave restoredraft charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount',
      toolbar: `
        copy paste restoredraft removeformat undo redo formatselect
        bold italic strikethrough forecolor backcolor
        link alignleft aligncenter alignright alignjustify
        numlist bullist outdent indent
        readTo addPhoto addWidget addPoinPenting addEmbedLink addTradingView addDataWrapper`,
      setup: (editor: any) => {
        this.editor = editor;
        editor.ui.registry.addButton('readTo', {
          text: 'Baca Juga (Internal Link)',
          onAction: () => {
            let el: HTMLElement = this.openToReadTo.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addPhoto', {
          text: 'Embed Photo',
          onAction: () => {
            let el: HTMLElement = this.openToImagesBucket.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addWidget', {
          text: 'Embed Widget',
          onAction: () => {
            let el: HTMLElement = this.openToWidget.nativeElement;
            el.click();
          },
        });

        editor.ui.registry.addButton('addPoinPenting', {
          text: 'Poin Penting',
          onAction: () => {
            let el: HTMLElement = this.openToPoinPenting.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addEmbedLink', {
          text: 'Embed Social Media',
          onAction: () => {
            let el: HTMLElement = this.openToEmbedLink.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addTradingView', {
          text: 'Embed Trading View',
          onAction: () => {
            let el: HTMLElement = this.openToTradingView.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addDataWrapper', {
          text: 'Embed Data Wrapper',
          onAction: () => {
            let el: HTMLElement = this.openDataWrapper.nativeElement;
            el.click();
          },
        });
      },
    };
  }

  addPhoto(editor: any): void {
    const dialogRef = this.dialog.open(ImageBucketComponent, {
      height: '750px',
      width: '1200px',
      data: 'image',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(`
        <figure class="image"><img src="${result.image}" alt="${result.image}" width="429" height="280">
        <figcaption style="color: #718096; line-height: 1.5; font-size: 12px; padding-left: 0; padding-right: 16px; display: block;">${result.imageDesc} (${result.photographer})</figcaption>
        <figcaption style="color: #718096; line-height: 1.5; font-size: 12px; padding-left: 0; padding-right: 16px; display: block;">Source: ${result.source}</figcaption>
        </figure>`);
      }
    });
  }

  addReadTo(editor: any) {
    const dialogRef = this.dialog.open(ListNewsComponent, {
      height: '750px',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(
          '<blockquote><h3><span style="color: rgb(52, 73, 94);"><strong>Baca Juga</strong></span></h3><p><span style="color: rgb(35, 111, 161);"><a style="color: rgb(35, 111, 161);" href="https://www.investortrust.id/news/' +
            result.linkPost +
            '" target="_blank" rel="noopener">' +
            result.titlePost +
            '</a></span></p></blockquote>'
        );
      }
    });
  }

  addToEmbedLink(editor: any) {
    const dialogRef = this.dialog.open(AddEmbedLinkComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addToTradingView(editor: any) {
    const dialogRef = this.dialog.open(AddEmbedTradingViewComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addToPoinPenting(editor: any) {
    const dialogRef = this.dialog.open(AddPointPentingComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addToWidget(editor: any) {
    const dialogRef = this.dialog.open(AddWidgetComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addThumbnail(): void {
    const dialogRef = this.dialog.open(ImageBucketComponent, {
      height: '750px',
      width: '1200px',
      data: 'image',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.news.thumbnail = result.image;
        this.news.textThumbnail = result.imageDesc;
      }
    });
  }

  addMedia(): void {
    const dialogRef = this.dialog.open(ImageBucketComponent, {
      height: '750px',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.mediaList.push({
          url: result?.image ? result?.image : '',
          caption: result?.imageDesc ? result?.imageDesc : '',
          title: result?.title ? result?.title : '',
          source: result?.source ? result?.source : '',
          photographer: result?.photographer ? result?.photographer : '',
          type: result?.type ? result?.type : '',
        });
        this.news.media_list = this.mediaList;
      }
    });
  }

  addToDataWrapper(editor: any): void {
    const dialogRef = this.dialog.open(DataWrapperComponent, {
      height: '750px',
      width: '1200px',
      data: 'from-news',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(`
          <iframe id="${result.link}"
          style="width: 0; min-width: 100% !important; border: none;"
          title="${result.name}"
          src="${result.link}"
          height="725" frameborder="0" scrolling="no"
          aria-label="Table" data-external="1"></iframe>`);
      }
    });
  }

  removeMediaList(index: number) {
    this.mediaList.splice(index, 1);
  }

  generateURL(text: string) {
    this.news.linkPost = '/' + this.stringToSlug(text);
  }

  stringToSlug(str: string) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();

    const from = 'àáäâèéëêìíïîòóöôùúüûñç·_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    return str;
  }

  getDateTimeAppoch() {
    this.changeDate = !this.changeDate;
    const datePipe: DatePipe = new DatePipe('en-US');
    const setDateHours = this.date;
    const getHours = datePipe.transform(setDateHours, 'HH:mm:ss') as string;
    const convertDate = new Date(setDateHours)
      .toString()
      .replace(getHours, this.currentDatetime);
    this.news.date = new Date(convertDate).getTime();
  }

  keyPress(event: KeyboardEvent) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  announcer = inject(LiveAnnouncer);

  removeKeyword(keyword: string) {
    const index = this.news.hashtag.indexOf(keyword);
    if (index >= 0) {
      this.news.hashtag.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.news.hashtag.push(value);
    }
    event.chipInput!.clear();
  }

  addHashtagFromInputField(): void {
    const inputField = document.getElementById(
      'hashtagInput'
    ) as HTMLInputElement;
    const inputValue = inputField.value.trim();
    if (inputValue) {
      this.news.hashtag.push(inputValue);
      inputField.value = '';
    }
  }

  listedChange(value: boolean) {
    this.news.listed = value ? 'listed' : 'unlisted';
  }

  addAdsArticle(): void {
    const dialogRef = this.dialog.open(AdsArticleComponent, {
      height: '750px',
      width: '1200px',
      data: 'from-news',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.news.ads_article = result?.uuid;
        this.news.selected_ads_article = result?.title;
      }
    });
  }

  removeAdsArticle(event: MouseEvent): void {
    event.stopPropagation();
    this.news.selected_ads_article = '';
    this.news.ads_article = '';
  }
}
