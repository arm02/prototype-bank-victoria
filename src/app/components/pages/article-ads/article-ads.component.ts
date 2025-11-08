import { Component, Inject, OnInit } from '@angular/core';
import { AdsArticleService } from './article-ads.service';
import {
  AdsArticleDisplayedColumn,
  AdsArtcileResponseCollection,
  FormAdsArticleRequest,
} from './article-ads.collection';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MasterDataFormAdsArctileComponent } from './form-article-ads/form-article-ads.component';

@Component({
  selector: 'app-ads',
  templateUrl: './article-ads.component.html',
  styleUrls: ['./article-ads.component.scss'],
})
export class AdsArticleComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  ads: AdsArtcileResponseCollection[] = [];
  displayedColumns: any[] = AdsArticleDisplayedColumn;
  constructor(
    public dialogRef: MatDialogRef<AdsArticleComponent>,
    private adsService: AdsArticleService,
    private layoutService: LayoutsService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public params: string
  ) {
    if (params === 'from-news')
      this.displayedColumns[5].actions = ['select-wrapper'];
  }

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
    const dialogRef = this.dialog.open(MasterDataFormAdsArctileComponent, {
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

  editAds(data: FormAdsArticleRequest) {
    const dialogRef = this.dialog.open(MasterDataFormAdsArctileComponent, {
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

  deleteAds(data: FormAdsArticleRequest) {
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
