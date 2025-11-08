import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomepageService } from './homepage.service';
import { ListNewsComponent } from '../../dialog/list-news/list-news.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { AdsFormComponent } from './ads-form/ads-form.component';
import { FormAdsComponent } from './form-ads/form-ads.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  headline: any;
  trend: any;
  quickLink: any;
  ads: any;
  constructor(
    private homepageService: HomepageService,
    private layoutService: LayoutsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getHeadline();
    // this.getTrend();
    // this.getQuickLink();
    // this.getAds();
  }

  getHeadline() {
    this.homepageService.getHeadline().subscribe((res) => {
      this.headline = res.headline;
    });
  }

  // getTrend() {
  //   this.homepageService.getTrend().subscribe((res) => {
  //     this.trend = res.trend;
  //   });
  // }

  // getQuickLink() {
  //   this.homepageService.getQuickLink().subscribe((res) => {
  //     this.quickLink = res.quickLink;
  //   });
  // }

  mainAds: any;
  mainAdsDisplayedColumns: any[] = [
    {
      value: 'img',
      type: 'image-small',
      title: 'Image',
      width: '20%',
    },
    {
      value: 'link',
      type: 'string',
      title: 'Link',
      width: '35%',
    },
    {
      value: 'altText',
      type: 'string',
      title: 'Alt Text',
      width: '35%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '10%',
    },
  ];
  secondAds: any;
  thirdAds: any;
  fourthAds: any;
  // getAds() {
  //   this.homepageService.getAds().subscribe((res) => {
  //     this.ads = res.ad;
  //     this.mainAds = this.ads.filter((res: any) => res.typeAd === 'main-ad');
  //     this.secondAds = this.ads.filter(
  //       (res: any) => res.typeAd === 'second-ad'
  //     );
  //     this.thirdAds = this.ads.filter((res: any) => res.typeAd === 'third-ad');
  //     this.fourthAds = this.ads.filter(
  //       (res: any) => res.typeAd === 'ufourth-ad'
  //     );
  //   });
  // }

  editHeadline(id: string, type: string): void {
    const dialogRef = this.dialog.open(ListNewsComponent, {
      height: '750px',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.updateHeadline(id, result, type);
      }
    });
  }

  // createQuickLink(): void {
  //   const dialogRef = this.dialog.open(ListNewsComponent, {
  //     height: '750px',
  //     width: '1200px',
  //     data: {
  //       type: 'quicklink',
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.updateOrCreateQuickLink('create', result.keyword, result.data);
  //     }
  //   });
  // }

  // editQuickLink(id: string, keyword: string): void {
  //   const dialogRef = this.dialog.open(ListNewsComponent, {
  //     height: '750px',
  //     width: '1200px',
  //     data: {
  //       type: 'quicklink',
  //       keyword: keyword,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.updateOrCreateQuickLink('update', result.keyword, result.data, id);
  //     }
  //   });
  // }

  // editTrend(rank: number): void {
  //   const dialogRef = this.dialog.open(ListNewsComponent, {
  //     height: '750px',
  //     width: '1200px',
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.updateTrend(rank, result);
  //     }
  //   });
  // }

  // formAds(type: string, method: string, data?: any) {
  //   const dialogRef = this.dialog.open(FormAdsComponent, {
  //     width: '450px',
  //     data: {
  //       type: type,
  //       method: method,
  //       value: data,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.getAds();
  //     }
  //   });
  // }

  // editAds(type: string, form: string, data?: any): void {
  //   const dialogRef = this.dialog.open(AdsFormComponent, {
  //     width: '450px',
  //     data: {
  //       type: type,
  //       form: form,
  //       data: data,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.getAds();
  //     }
  //   });
  // }

  // updateTrend(rank: number, body: any) {
  //   const params = {
  //     link: body.linkPost,
  //     title: body.titlePost,
  //     rank: rank,
  //   };
  //   this.homepageService.updateTrend(params).subscribe((res) => {
  //     this.getTrend();
  //   });
  // }

  updateHeadline(id: string, body: any, type: string) {
    const params = {
      id: id,
      image: body.thumbnail,
      titleHeadline: body.titlePost,
      typeHeadline: type,
      urlHeadline: body.linkPost,
    };
    this.homepageService.updateHeadline(params).subscribe((res) => {
      this.getHeadline();
    });
  }

  // updateOrCreateQuickLink(
  //   type: string,
  //   keyword: string,
  //   body: any,
  //   id?: string
  // ) {
  //   if (type === 'create') {
  //     const params = {
  //       link: body.linkPost,
  //       title: body.titlePost,
  //       keyword: keyword,
  //     };
  //     this.homepageService.createQuickLink(params).subscribe((res) => {
  //       this.getQuickLink();
  //     });
  //   } else {
  //     const params = {
  //       id: id,
  //       link: body.linkPost,
  //       title: body.titlePost,
  //       keyword: keyword,
  //     };
  //     this.homepageService.updateQuickLink(params).subscribe((res) => {
  //       this.getQuickLink();
  //     });
  //   }
  // }

  // deleteQuicklink(id: string) {
  //   this.layoutService.deleteConfirmation().then((result) => {
  //     if (result.isConfirmed) {
  //       this.homepageService.deleteQuickLink(id).subscribe(() => {
  //         this.layoutService.deletedConfirmed();
  //         this.getQuickLink();
  //       });
  //     }
  //   });
  // }

  // deleteAds(event: any) {
  //   this.layoutService.deleteConfirmation().then((result) => {
  //     if (result.isConfirmed) {
  //       this.homepageService.deleteAds(event.id).subscribe(() => {
  //         this.layoutService.deletedConfirmed();
  //         this.getAds();
  //       });
  //     }
  //   });
  // }
}
