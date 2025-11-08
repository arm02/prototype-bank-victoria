import { Component, OnInit } from '@angular/core';
import { ChannelsService } from './channels.service';
import { ChannelResponseCollection } from './channels.collection';
import { MatDialog } from '@angular/material/dialog';
import { FormChannelsComponent } from './form-channels/form-channels.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  channels: ChannelResponseCollection[] = [];
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  displayedColumns: any[] = [
    {
      value: 'pageName',
      type: 'string',
      title: 'Name',
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
    private channelsService: ChannelsService,
    private dialog: MatDialog,
    private layoutService: LayoutsService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        this.userData = data;
        if (this.userData.role === 'admin') {
          this.displayedColumns[1].actions = [
            'config-channel',
            'edit',
            'delete',
          ];
        } else {
          this.displayedColumns[1].actions = ['config-channel'];
        }
      });
  }

  ngOnInit() {
    this.getAllChannel();
  }

  createChannel() {
    const dialogRef = this.dialog.open(FormChannelsComponent, {
      disableClose: true,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllChannel();
      }
    });
  }

  editChannel(row: any) {
    const dialogRef = this.dialog.open(FormChannelsComponent, {
      disableClose: true,
      width: '400px',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllChannel();
      }
    });
  }

  deleteChannel(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.channelsService.deleteChannel(event.page_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllChannel();
        });
      }
    });
  }

  getAllChannel() {
    this.channelsService
      .getAllChannel(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.channels = data.object;
        this.rowCount = data.rowCount;
      });
  }

  configChannel(event: any) {
    this.router.navigate(['pages/channels', event.page_id]);
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllChannel();
  }
}
