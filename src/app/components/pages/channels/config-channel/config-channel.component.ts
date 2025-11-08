import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ListNewsComponent } from 'src/app/components/dialog/list-news/list-news.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { AdsFormComponent } from '../../homepage/ads-form/ads-form.component';
import { FormAdsChannelComponent } from './form-ads-channel/form-ads-channel.component';

@Component({
  selector: 'app-config-channel',
  templateUrl: './config-channel.component.html',
  styleUrls: ['./config-channel.component.scss'],
})
export class ConfigChannelComponent implements OnInit {
  channel: any;
  channelHeadline: any;
  channelSubHeadline: any;
  trend: any;
  quickLink: any;
  ads: any;
  displayedColumnsHeadline: any[] = [
    {
      value: 'titleHeadline',
      type: 'string',
      title: 'Name',
      width: '60%',
    },
    {
      value: 'typeHeadline',
      type: 'string',
      title: 'Type',
      width: '20%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];

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
  constructor(
    private channelService: ChannelsService,
    private route: ActivatedRoute,
    private layoutService: LayoutsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getChannelById();
  }

  getChannelById() {
    this.channelService
      .getChannelById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res) => {
        this.channel = res.page;
        this.getHeadlineById();
      });
  }

  getHeadlineById() {
    this.channelService
      .getChannelHeadlineById(this.channel.page_id)
      .subscribe((res) => {
        this.channelHeadline = res.headline.find(
          (res: any) => res.typeHeadline === 'main'
        );
        this.channelSubHeadline = res.headline.filter(
          (res: any) => res.typeHeadline === 'sub'
        );
        if (!this.channelHeadline) {
          this.channelHeadline = {
            headline_id: null,
            titleHeadline: 'Not Setup',
            image:
              'https://res.cloudinary.com/dzvyafhg1/image/upload/empty-image.png',
          };
        }
        while (this.channelSubHeadline.length < 3) {
          this.channelSubHeadline.push({
            headline_id: null,
            titleHeadline: 'Not Setup',
            image:
              'https://res.cloudinary.com/dzvyafhg1/image/upload/empty-image.png',
          });
        }
        // this.getTrend();
        // this.getQuickLink();
      });
  }

  // getTrend() {
  //   this.channelService
  //     .getChannelTrendById(this.channel.page_id)
  //     .subscribe((res) => {
  //       this.trend = res.trend;
  //       let i = this.trend.length + 1;
  //       while (this.trend.length < 5) {
  //         this.trend.push({
  //           rank: i++,
  //           titlePost: 'Not Set',
  //         });
  //       }
  //     });
  // }

  // getQuickLink() {
  //   this.channelService
  //     .getChannelQuickLinkById(this.channel.page_id)
  //     .subscribe((res) => {
  //       this.quickLink = res.quickLink;
  //       this.getAds();
  //     });
  // }

  // getAds() {
  //   this.channelService
  //     .getChannelAdsById(this.channel.page_id)
  //     .subscribe((res) => {
  //       this.ads = res.ad;
  //       this.mainAds = this.ads.filter((res: any) => res.typeAd === 'main-ad');
  //       this.secondAds = this.ads.filter(
  //         (res: any) => res.typeAd === 'second-ad'
  //       );
  //       // while (this.ads.length < 2) {
  //       //   this.ads.push({
  //       //     typeAd: this.ads.length === 0 ? 'main-ad' : 'second-ad',
  //       //     img: 'https://res.cloudinary.com/dzvyafhg1/image/upload/empty-image.png',
  //       //     altText: 'Not Set',
  //       //     link: 'Not Set',
  //       //   });
  //       // }
  //     });
  // }

  // formAds(type: string, method: string, data?: any) {
  //   const dialogRef = this.dialog.open(FormAdsChannelComponent, {
  //     width: '450px',
  //     data: {
  //       type: type,
  //       method: method,
  //       value: data,
  //       channel: this.channel.page_id,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.getAds();
  //     }
  //   });
  // }

  updateHeadline(type: string, id: string) {
    const dialogRef = this.dialog.open(ListNewsComponent, {
      height: '750px',
      width: '1200px',
      data: {
        page_id: this.route.snapshot.paramMap.get('id'),
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.createHeadline(result, type, id);
      }
    });
  }

  // editTrend(rank: number) {
  //   const dialogRef = this.dialog.open(ListNewsComponent, {
  //     height: '750px',
  //     width: '1200px',
  //     data: {
  //       page_id: this.route.snapshot.paramMap.get('id'),
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.updateTrend(rank, result);
  //     }
  //   });
  // }

  // createQuickLink(): void {
  //   const dialogRef = this.dialog.open(ListNewsComponent, {
  //     height: '750px',
  //     width: '1200px',
  //     data: {
  //       type: 'quicklink',
  //       page_id: this.route.snapshot.paramMap.get('id'),
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
  //       page_id: this.route.snapshot.paramMap.get('id'),
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.updateOrCreateQuickLink('update', result.keyword, result.data, id);
  //     }
  //   });
  // }

  // deleteQuicklink(id: string) {
  //   this.layoutService.deleteConfirmation().then((result) => {
  //     if (result.isConfirmed) {
  //       this.channelService.deleteQuickLink(id).subscribe(() => {
  //         this.layoutService.deletedConfirmed();
  //         this.getQuickLink();
  //       });
  //     }
  //   });
  // }

  // editAds(type: string): void {
  //   const dialogRef = this.dialog.open(AdsFormComponent, {
  //     width: '450px',
  //     data: type + '-from-pages/' + this.channel.page_id,
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.getAds();
  //     }
  //   });
  // }

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
  //       pageId: this.channel.page_id,
  //     };
  //     this.channelService.createQuickLink(params).subscribe((res) => {
  //       this.getQuickLink();
  //     });
  //   } else {
  //     const params = {
  //       id: id,
  //       link: body.linkPost,
  //       title: body.titlePost,
  //       keyword: keyword,
  //       pageId: this.channel.page_id,
  //     };
  //     this.channelService.updateQuickLink(params).subscribe((res) => {
  //       this.getQuickLink();
  //     });
  //   }
  // }

  createHeadline(body: any, type: string, id: string) {
    const params = {
      headlineId: id,
      titleHeadline: body.titlePost,
      urlHeadline: body.linkPost,
      typeHeadline: type,
      pageId: this.channel.page_id,
      image: body.thumbnail,
    };
    this.channelService.postChannelHeadline(params).subscribe((res) => {
      this.getHeadlineById();
    });
  }

  // updateTrend(rank: number, body: any) {
  //   const params = {
  //     link: body.linkPost,
  //     title: body.titlePost,
  //     rank: rank,
  //     pageId: this.channel.page_id,
  //   };
  //   this.channelService.updateTrend(params).subscribe((res) => {
  //     this.getTrend();
  //   });
  // }

  deleteSubHeadline(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.channelService.deleteChannel(event).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getHeadlineById();
        });
      }
    });
  }

  // deleteAds(event: any) {
  //   this.layoutService.deleteConfirmation().then((result) => {
  //     if (result.isConfirmed) {
  //       this.channelService.deleteAds(event.id).subscribe(() => {
  //         this.layoutService.deletedConfirmed();
  //         this.getAds();
  //       });
  //     }
  //   });
  // }
}
