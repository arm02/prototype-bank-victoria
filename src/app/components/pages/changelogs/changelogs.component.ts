import { Component, Input, OnInit } from '@angular/core';
import { ChangelogsService } from './changelogs.service';
import {
  ChangeLogsResponse,
  ChangeLogsResponseCollection,
} from './changelogs.collection';
import { FormChangelogsComponent } from './form-changelogs/form-changelogs.component';
import { MatDialog } from '@angular/material/dialog';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-changelogs',
  templateUrl: './changelogs.component.html',
  styleUrls: ['./changelogs.component.scss'],
})
export class ChangelogsComponent implements OnInit {
  private _role: string = '';

  @Input()
  set role(value: string) {
    this._role = value;
    this.updateActions();
  }

  get role(): string {
    return this._role;
  }

  private updateActions(): void {
    if (this.role === 'admin') {
      this.displayedColumns[1].actions = ['edit', 'delete', 'detail-eye'];
    } else {
      this.displayedColumns[1].actions = ['detail-eye'];
    }
  }

  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  changeLogs: ChangeLogsResponse[] = [];
  displayedColumns: any[] = [
    {
      value: 'title',
      type: 'string',
      title: 'Title',
      width: '80%',
    },
    {
      value: 'action',
      actions: [],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];
  constructor(
    private changeLogService: ChangelogsService,
    private dialog: MatDialog,
    private layoutService: LayoutsService
  ) {}

  ngOnInit() {
    this.getChangeLogsData();
  }

  getChangeLogsData() {
    this.changeLogService
      .getAllChangeLogs(this.query, this.page, this.limit)
      .subscribe({
        next: (res: ChangeLogsResponseCollection) => {
          this.changeLogs = res.data;
          this.rowCount = res.count;
        },
      });
  }

  createChangeLogs() {
    const dialogRef = this.dialog.open(FormChangelogsComponent, {
      disableClose: true,
      height: 'auto',
      width: '1200px',
      data: {
        type: 'form',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getChangeLogsData();
      }
    });
  }

  editChangeLogs(data: any) {
    const dialogRef = this.dialog.open(FormChangelogsComponent, {
      disableClose: true,
      height: 'auto',
      width: '1200px',
      data: {
        type: 'form',
        ...data,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getChangeLogsData();
      }
    });
  }

  detailChangeLogs(data: any) {
    const dialogRef = this.dialog.open(FormChangelogsComponent, {
      disableClose: true,
      height: 'auto',
      width: '1200px',
      data: {
        type: 'detail',
        ...data,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getChangeLogsData();
      }
    });
  }

  deleteChangeLogs(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.changeLogService.deleteChangeLogs(event.uuid).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getChangeLogsData();
        });
      }
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getChangeLogsData();
  }
}
