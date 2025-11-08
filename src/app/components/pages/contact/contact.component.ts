import { Component, OnInit } from '@angular/core';
import { ContactResponseCollection } from './contact.collection';
import { ContactService } from './contact.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  contacts: ContactResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'name',
      type: 'string',
      title: 'Name',
      width: '20%',
    },
    {
      value: 'date',
      type: 'date',
      title: 'Date',
      width: '20%',
    },
    {
      value: 'subject',
      type: 'string',
      title: 'Subject',
      width: '40%',
    },
    {
      value: 'action',
      actions: ['detail'],
      type: 'action',
      title: 'Action',
      width: '15%',
    },
  ];
  constructor(
    private contactService: ContactService,
    private layoutService: LayoutsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllContact();
  }

  getAllContact() {
    this.contactService
      .getAllContact(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.contacts = data.rows;
        this.rowCount = data.count;
      });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllContact();
  }

  detailContact(data: ContactResponseCollection) {
    const dialogRef = this.dialog.open(DetailContactComponent, {
      disableClose: true,
      width: '600px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
