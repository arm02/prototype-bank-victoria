import { Component, Inject, OnInit } from '@angular/core';
import { DataWrapperResponseCollection } from './data-wrapper.collection';
import { DataWrapperService } from './data-wrapper.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { FormDataWrapperComponent } from './form-data-wrapper/form-data-wrapper.component';

@Component({
  selector: 'app-data-wrapper',
  templateUrl: './data-wrapper.component.html',
  styleUrls: ['./data-wrapper.component.scss'],
})
export class DataWrapperComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  dataWrappers: DataWrapperResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'name',
      type: 'string',
      title: 'Name',
      width: '15%',
    },
    {
      value: 'link',
      type: 'string',
      title: 'Link',
      width: '15%',
    },
    {
      value: 'context',
      type: 'string-capitalize',
      title: 'Context',
      width: '10%',
    },
    {
      value: 'createdBy',
      type: 'string',
      title: 'Created By',
      width: '10%',
    },
    {
      value: 'uploadedRole',
      type: 'string-capitalize',
      title: 'Role',
      width: '10%',
    },
    {
      value: 'notes',
      type: 'string',
      title: 'Notes',
      width: '10%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created At',
      width: '15%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];
  constructor(
    public dialogRef: MatDialogRef<DataWrapperComponent>,
    private dataWrapperService: DataWrapperService,
    private dialog: MatDialog,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) public embedNews: string
  ) {
    if (embedNews === 'from-news')
      this.displayedColumns[7].actions = ['select-wrapper'];
  }

  ngOnInit(): void {
    this.getAllDataWrapper();
  }

  getAllDataWrapper() {
    this.dataWrapperService
      .getAllDataWrapper(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.dataWrappers = data.data;
        this.rowCount = data.count;
      });
  }

  createDataWrapper() {
    const dialogRef = this.dialog.open(FormDataWrapperComponent, {
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getAllDataWrapper();
        }
      },
    });
  }

  editDataWrapper(row: any) {
    const dialogRef = this.dialog.open(FormDataWrapperComponent, {
      disableClose: true,
      width: '400px',
      data: row,
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getAllDataWrapper();
        }
      },
    });
  }

  deleteDataWrapper(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.dataWrapperService.deleteDataWrapper(event.uuid).subscribe({
          next: () => {
            this.layoutService.deletedConfirmed();
            this.getAllDataWrapper();
          },
        });
      }
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllDataWrapper();
  }
}
