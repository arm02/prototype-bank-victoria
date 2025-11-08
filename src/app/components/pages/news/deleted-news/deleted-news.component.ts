import { Component, Inject, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsResponseCollection } from '../news.collection';
import { environment } from 'src/environments/environments';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MediaService } from '../../media/media.service';

@Component({
  selector: 'app-deleted-news',
  templateUrl: './deleted-news.component.html',
  styleUrls: ['./deleted-news.component.scss'],
})
export class DeletedNewsComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  news: NewsResponseCollection[] = [];
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
      value: 'action',
      actions: ['recover', 'permanent-delete'],
      type: 'action',
      title: 'Tindakan',
      width: '20%',
    },
  ];
  constructor(
    private newsService: NewsService,
    private mediaService: MediaService,
    public dialogRef: MatDialogRef<DeletedNewsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    if (this.data === 'media') {
      this.getAllMedia();
    } else {
      this.getAllNews();
    }
  }

  getAllMedia() {
    this.mediaService
      .getDeletedMedia(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.news = data.object;
        this.rowCount = data.rowCount;
        this.mappingImageData();
      });
  }

  getAllNews(type?: string) {
    if (type === 'search') {
      this.page = 1;
    }
    this.newsService
      .getDeletedNews(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.news = data.object;
        this.rowCount = data.rowCount;
        this.mappingImageData();
      });
  }

  mappingImageData() {
    this.news.map((data: NewsResponseCollection) => {
      data.page_name = data.page.pageName;
      data.site_name = data?.site?.name ? data.site.name : 'Main';
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getData();
  }

  recoverNews(event: any) {
    this.newsService.recoverNews(event?.post_id).subscribe({
      next: (res) => {
        this.getData();
      },
    });
  }

  deletePermanent(event: any) {
    this.newsService.deletePermanent(event?.post_id).subscribe({
      next: (res) => {
        this.getData();
      },
    });
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
