import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { Router } from '@angular/router';
import { MediaResponseCollection } from './media.collection';
import { NewsService } from '../news/news.service';
import { FormControl, FormGroup } from '@angular/forms';
import { WriterResponseCollection } from '../writer/write.collection';
import { ChannelResponseCollection } from '../channels/channels.collection';
import { WriterService } from '../writer/writer.service';
import { ChannelsService } from '../channels/channels.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { AuthService } from 'src/app/auth/auth.service';
import { SitesService } from '../sites/sites.service';
import { SitesResponseCollection } from '../sites/sites.collection';
import { environment } from 'src/environments/environments';
import { DeletedNewsComponent } from '../news/deleted-news/deleted-news.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  environment = environment;
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  news: MediaResponseCollection[] = [];
  writers: WriterResponseCollection[] = [];
  channels: ChannelResponseCollection[] = [];
  sites: SitesResponseCollection[] = [];

  displayedColumns: any[] = [
    {
      value: 'titlePost',
      type: 'string',
      title: 'Title',
      width: '10%',
    },
    {
      value: 'page_name',
      type: 'string',
      title: 'Channel',
      width: '10%',
    },
    {
      value: 'site_name',
      type: 'string',
      title: 'Site',
      width: '10%',
    },
    {
      value: 'date',
      type: 'date',
      title: 'Published At',
      width: '12%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created At',
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
      title: 'Last Update By',
      width: '10%',
    },
    {
      value: 'page_view',
      type: 'pageview',
      title: 'View',
      width: '5%',
    },
    {
      value: 'action',
      actions: ['open-link', 'edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '11%',
    },
  ];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
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
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();

  constructor(
    private mediaService: MediaService,
    private layoutService: LayoutsService,
    private newsService: NewsService,
    private writerService: WriterService,
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
    this.getAllMedia();
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

  createMedia() {
    this.route.navigate(['/pages/media/create']);
  }

  editMedia(data: any) {
    this.route.navigate(['/pages/media/', data.post_id]);
  }

  deleteMedia(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.newsService.deleteNews(event.post_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllMedia();
        });
      }
    });
  }

  getAllMedia(type?: string) {
    if (type === 'search') {
      this.page = 1;
    }
    this.mediaService
      .getAllMedia(
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

  mappingImageData() {
    this.news.map((data: MediaResponseCollection) => {
      data.page_name = data.page.pageName;
      data.site_name = data?.site?.name ? data.site.name : 'Main';
      // data.writer_name = data.writer.name;
      data.type = data.type === 'image' ? 'Image' : 'Video';
      // this.newsService.getAnalyticPageView(data.linkPost).subscribe((res) => {
      //   data.page_view = res.view;
      // });
      data.page_view = 0;
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllMedia();
  }

  openLinkMedia(event: any) {
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

  downloadMedia() {
    this.mediaService
      .downloadMedia(
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
            `Export Media ${this.layoutService.formatDate(new Date())}.xlsx`
          );
        },
      });
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
    this.getAllMedia();
  }

  deletedNewsDialog(): void {
    const dialogRef = this.dialog.open(DeletedNewsComponent, {
      height: '750px',
      width: '1200px',
      data: 'media',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
