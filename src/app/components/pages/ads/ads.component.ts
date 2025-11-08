import { Component, OnInit } from '@angular/core';
import { AdsService } from './ads.service';
import {
  AdsDisplayedColumn,
  AdsResponseCollection,
  FormAdsRequest,
} from './ads.collection';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MatDialog } from '@angular/material/dialog';
import { MasterDataFormAdsComponent } from './form-ads/form-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  ads: AdsResponseCollection[] = [];
  displayedColumns: any[] = AdsDisplayedColumn;
  constructor(
    private adsService: AdsService,
    private layoutService: LayoutsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getAllAds();
  }

  getAllAds() {
    this.adsService
      .getAllAds(this.query, this.page, this.limit)
      .subscribe((response) => {
        this.ads = response.data;
        this.rowCount = response.count;
      });
  }

  createAds() {
    const dialogRef = this.dialog.open(MasterDataFormAdsComponent, {
      disableClose: true,
      height: 'auto',
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllAds();
      }
    });
  }

  editAds(data: FormAdsRequest) {
    console.log(data);
    const dialogRef = this.dialog.open(MasterDataFormAdsComponent, {
      disableClose: true,
      height: 'auto',
      width: '800px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllAds();
      }
    });
  }

  deleteAds(data: FormAdsRequest) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.adsService.deleteAds(data.uuid).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllAds();
        });
      }
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllAds();
  }
}
