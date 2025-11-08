import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewsService } from '../../pages/news/news.service';
import { NewsResponseCollection } from '../../pages/news/news.collection';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss'],
})
export class ListNewsComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  news: NewsResponseCollection[] = [];
  quicklinkKeyword = '';
  displayedColumns: any[] = [
    {
      value: 'titlePost',
      type: 'string',
      title: 'Title',
      width: '40%',
    },
    {
      value: 'page_name',
      type: 'string',
      title: 'Channel',
      width: '10%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created At',
      width: '10%',
    },
    {
      value: 'writers',
      key: 'name',
      type: 'array',
      title: 'Editor',
      width: '20%',
    },
    {
      value: 'action',
      actions: ['select-news'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<ListNewsComponent>,
    private newsService: NewsService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.quicklinkKeyword = data.keyword;
    }
  }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    if (this.data?.site_id) {
      this.newsService
        .getAllNewsBySite(this.query, this.page, this.limit, this.data?.site_id)
        .subscribe((data) => {
          this.news = data.object;
          this.rowCount = data.rowCount;
          this.mappingImageData();
        });
    } else {
      this.newsService
        .getAllNews(this.query, this.page, this.limit, this.data?.page_id)
        .subscribe((data) => {
          this.news = data.object;
          this.rowCount = data.rowCount;
          this.mappingImageData();
        });
    }
  }

  onSelect(event: any) {
    if (event) {
      if (this.data?.type === 'quicklink') {
        if (!this.quicklinkKeyword) {
          this.layoutService.errorMessageDialog(
            'Please Fill Keyword for Quick Link'
          );
        } else {
          this.dialogRef.close({
            keyword: this.quicklinkKeyword,
            data: event,
          });
        }
      } else {
        this.dialogRef.close(event);
      }
    }
  }

  mappingImageData() {
    this.news.map((data: NewsResponseCollection) => {
      data.page_name = data.page?.pageName;
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllNews();
  }
}
