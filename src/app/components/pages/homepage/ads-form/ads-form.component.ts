import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { HomepageService } from '../homepage.service';
import { ChannelsService } from '../../channels/channels.service';

@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.scss'],
})
export class AdsFormComponent implements OnInit {
  files: File[] = [];
  ads: AdsFormCollection = new AdsFormCollection();
  constructor(
    public dialogRef: MatDialogRef<AdsFormComponent>,
    private cloudinaryService: CloudinaryService,
    private homepageService: HomepageService,
    private channelService: ChannelsService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {}

  onSelect(event: any) {
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  // onSaved() {
  //   if (!this.ads.altText) {
  //     this.layoutService.errorMessageDialog('Please Fill Alt Text');
  //   } else if (!this.ads.link) {
  //     this.layoutService.errorMessageDialog('Please Fill Link');
  //   } else {
  //     this.cloudinaryService
  //       .uploadWithSignature(this.files[0])
  //       .subscribe((data) => {
  //         this.ads.typeAd = this.data;
  //         this.ads.image = data.secure_url;
  //         if (this.ads.typeAd.includes('from-pages')) {
  //           const param = {
  //             altText: this.ads.altText,
  //             link: this.ads.link,
  //             typeAd: this.ads.typeAd.split('/')[0].replace('-from-pages', ''),
  //             pageId: this.ads.typeAd.split('/')[1],
  //             image: this.ads.image,
  //           };
  //           this.channelService.updateAds(param).subscribe((res) => {
  //             this.layoutService.successMessage(
  //               'Updated!',
  //               'Your ads has been update.'
  //             );
  //             this.dialogRef.close(true);
  //           });
  //         } else {
  //           this.homepageService.updateAds(this.ads).subscribe((res) => {
  //             this.layoutService.successMessage(
  //               'Updated!',
  //               'Your ads has been update.'
  //             );
  //             this.dialogRef.close(true);
  //           });
  //         }
  //       });
  //   }
  // }
}

export class AdsFormCollection {
  id: string = '';
  altText: string = '';
  link: string = '';
  typeAd: string = '';
  image: string = '';
}
