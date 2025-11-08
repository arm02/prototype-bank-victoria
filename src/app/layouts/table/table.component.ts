import { EventEmitter, Input, Output } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input({ required: true }) displayedColumns: any[] = [];
  @Input({ required: true }) sourceData: any;
  @Input({ required: true }) rowCount = 0;
  @Input({ required: true }) pageSize = 0;
  @Output() paginateEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<any>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() copyEvent = new EventEmitter<any>();
  @Output() openLinkEvent = new EventEmitter<any>();
  @Output() selectImageEvent = new EventEmitter<any>();
  @Output() recoverEvent = new EventEmitter<any>();
  @Output() permanentDeleteEvent = new EventEmitter<any>();
  @Output() configChannelEvent = new EventEmitter<any>();
  @Output() detailEvent = new EventEmitter<any>();
  headerDisplatedColumn: any[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  constructor() {}

  ngOnInit() {
    this.headerDisplatedColumn = this.displayedColumns.map((col) => col.value);
  }

  handlePage(event: any) {
    this.paginateEvent.next(event);
  }

  handleEditEvent(event: any) {
    this.editEvent.next(event);
  }

  handleDeleteEvent(event: any) {
    this.deleteEvent.next(event);
  }

  handleCopyEvent(event: any) {
    this.copyEvent.next(event);
  }

  handleSelectImageEvent(event: any) {
    this.selectImageEvent.next(event);
  }

  handleConfigChannel(event: any) {
    this.configChannelEvent.next(event);
  }

  handleOpenLinkEvent(event: any) {
    this.openLinkEvent.next(event);
  }

  handleDetailEvent(event: any) {
    this.detailEvent.next(event);
  }

  handleRecoverEvent(event: any) {
    this.recoverEvent.next(event);
  }

  handlePermanentDeleteEvent(event: any) {
    this.permanentDeleteEvent.next(event);
  }
}
