import { Component, OnInit } from '@angular/core';
import { NewslatterService } from './newslatter.service';
import { NewsLatterResponseCollection } from './newslatter.collection';

@Component({
  selector: 'app-newslatter',
  templateUrl: './newslatter.component.html',
  styleUrls: ['./newslatter.component.scss'],
})
export class NewslatterComponent implements OnInit {
  page = 1;
  limit = 10;
  rowCount = 0;
  newsLatter: NewsLatterResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'email',
      type: 'string',
      title: 'Name',
      width: '50%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created at',
      width: '50%',
    },
  ];
  constructor(private newsLatterService: NewslatterService) {}

  ngOnInit() {
    this.getAllContact();
  }

  getAllContact() {
    this.newsLatterService
      .getAllNewsLatter(this.page, this.limit)
      .subscribe((data) => {
        this.newsLatter = data.object;
        this.rowCount = data.rowCount;
      });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllContact();
  }
}
