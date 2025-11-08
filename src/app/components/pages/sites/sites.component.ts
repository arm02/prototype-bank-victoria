import { Component, OnInit } from '@angular/core';
import { SitesResponseCollection } from './sites.collection';
import { SitesService } from './sites.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormSitesComponent } from './form-sites/form-sites.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss'],
})
export class SitesComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  sites: SitesResponseCollection[] = [];
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  displayedColumns: any[] = [
    {
      value: 'name',
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
    private siteService: SitesService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private layoutService: LayoutsService
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
    this.getAllSites();
  }

  getAllSites() {
    this.siteService.getAllSites(this.query, this.page, this.limit).subscribe({
      next: (res) => {
        this.sites = res.data;
        this.rowCount = res.count;
      },
    });
  }

  createSites() {
    const dialogRef = this.dialog.open(FormSitesComponent, {
      disableClose: true,
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllSites();
      }
    });
  }

  editSites(row: any) {
    const dialogRef = this.dialog.open(FormSitesComponent, {
      disableClose: true,
      width: '400px',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllSites();
      }
    });
  }

  deleteSites(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.siteService.deleteSite(event.uuid).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllSites();
        });
      }
    });
  }

  configSites(event: any) {
    this.router.navigate(['pages/sites', event.uuid]);
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllSites();
  }
}
