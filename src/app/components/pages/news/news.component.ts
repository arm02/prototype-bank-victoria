import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { NewsResponseCollection } from './news.collection';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { WriterResponseCollection } from '../writer/write.collection';
import { WriterService } from '../writer/writer.service';
import { ChannelsService } from '../channels/channels.service';
import { ChannelResponseCollection } from '../channels/channels.collection';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { AuthService } from 'src/app/auth/auth.service';
import { SitesService } from '../sites/sites.service';
import { SitesResponseCollection } from '../sites/sites.collection';
import { environment } from 'src/environments/environments';
import { DeletedNewsComponent } from './deleted-news/deleted-news.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  environment = environment;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  query = '';
  hashtag = '';
  querySearchWriter = '';
  querySearchChannel = '';
  querySearchSite = '';
  writerId = '';
  reporterId = '';
  channelId = '';
  siteId = '';
  status = '';
  sortBy = {
    value: '',
    type: 'DESC',
  };
  page = 1;
  limit = 10;
  rowCount = 0;
  news: NewsResponseCollection[] = [];
  writers: WriterResponseCollection[] = [];
  channels: ChannelResponseCollection[] = [];
  sites: SitesResponseCollection[] = [];
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  isLoading = false;
  displayedColumns: any[] = [
    {
      value: 'titlePost',
      type: 'string',
      title: 'Judul',
      width: '10%',
    },
    {
      value: 'page_name',
      type: 'string',
      title: 'Kanal',
      width: '10%',
    },
    {
      value: 'site_name',
      type: 'string',
      title: 'Situs',
      width: '10%',
    },
    {
      value: 'date',
      type: 'date',
      title: 'Tanggal Publish',
      width: '12%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Tanggal Dibuat',
      width: '12%',
    },
    {
      value: 'writers',
      key: 'name',
      type: 'array',
      title: 'Editor',
      width: '15%',
    },
    {
      value: 'reporters',
      key: 'name',
      type: 'array',
      title: 'Reporter',
      width: '15%',
    },
    {
      value: 'status',
      type: 'string-capitalize',
      title: 'Status',
      width: '5%',
    },
    {
      value: 'last_update_by',
      type: 'string',
      title: 'Terakhir Diperbaharui',
      width: '15%',
    },
    {
      value: 'page_views',
      type: 'pageview',
      title: 'Dilihat',
      width: '5%',
    },
    {
      value: 'action',
      actions: ['open-link', 'edit', 'delete'],
      type: 'action',
      title: 'Tindakan',
      width: '11%',
    },
  ];
  constructor(
    private newsService: NewsService,
    private writerService: WriterService,
    private layoutService: LayoutsService,
    private channelService: ChannelsService,
    private route: Router,
    private authService: AuthService,
    private siteService: SitesService,
    private dialog: MatDialog
  ) {
    this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        this.userData = data;
      });
  }

  ngOnInit() {
    this.getAllNews();
    this.getAllSites();
    this.getAllWriter();
    this.getAllChannel();
  }

  getAllSites(querySearchSite: string = ' ') {
    if (querySearchSite !== '') {
      this.siteService.getAllSites('', 1, 9999).subscribe({
        next: (res) => {
          this.sites = res.data;
        },
      });
    }
  }

  getAllWriter(querySearchWriter: string = ' ') {
    if (querySearchWriter !== '') {
      this.writerService
        .getAllWriter(this.querySearchWriter, 1, 10)
        .subscribe((data) => {
          this.writers = data.object;
        });
    }
  }

  getAllChannel(querySearchChannel: string = ' ') {
    if (querySearchChannel !== '') {
      this.channelService.getAllChannel('', 1, 9999).subscribe((res) => {
        this.channels = res.object;
      });
    }
  }

  createNews() {
    this.route.navigate(['/pages/news/create']);
  }

  editNews(data: any) {
    this.route.navigate(['/pages/news/', data.post_id]);
  }

  deleteNews(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.newsService.deleteNews(event.post_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllNews();
        });
      }
    });
  }

  getAllNews(type?: string) {
    if (type === 'search') {
      this.page = 1;
    }
    this.newsService
      .getAllNews(
        this.query,
        this.page,
        this.limit,
        this.channelId,
        this.writerId,
        this.range?.value,
        this.sortBy,
        this.reporterId,
        this.status,
        this.siteId
      )
      .subscribe((data) => {
        this.news = data.object;
        this.rowCount = data.rowCount;
        this.mappingImageData();
      });
  }

  downloadNews() {
    this.newsService
      .downloadNews(
        this.channelId,
        this.writerId,
        this.range?.value,
        this.reporterId,
        this.status
      )
      .subscribe({
        next: (response: Blob) => {
          this.layoutService.downloadFromBlob(
            response,
            `Export News ${this.layoutService.formatDate(new Date())}.xlsx`
          );
        },
      });
  }

  mappingImageData() {
    this.isLoading = true;
    this.news.map((data: NewsResponseCollection) => {
      data.page_name = data.page.pageName;
      data.site_name = data?.site?.name ? data.site.name : 'Main';
      // this.newsService.getAnalyticPageView(data.linkPost).subscribe((res) => {
      //   data.page_view = res.view;
      // });
      data.page_view = 0;
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllNews();
  }

  openLinkNews(event: any) {
    let url = environment.production
      ? 'https://www.investortrust.id/'
      : 'https://www.investortrust-uat.site/';
    window.open(
      url +
        event?.page?.pageName.toLowerCase() +
        '/' +
        event?.code +
        event.linkPost,
      '_blank'
    );
  }

  clearFilter() {
    this.range.reset();
    this.query = '';
    this.page = 1;
    this.limit = 10;
    this.writerId = '';
    this.reporterId = '';
    this.channelId = '';
    this.siteId = '';
    this.status = '';
    this.sortBy = {
      value: '',
      type: 'DESC',
    };
    this.getAllNews();
  }

  deletedNewsDialog(): void {
    const dialogRef = this.dialog.open(DeletedNewsComponent, {
      height: '750px',
      width: '1200px',
      data: 'news',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
