import { Component, Inject, OnInit } from '@angular/core';
import { AdsFormCollection } from '../../../homepage/ads-form/ads-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { HomepageService } from '../../../homepage/homepage.service';
import { ChannelsService } from '../../channels.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { ImagesService } from '../../../images/images.service';

@Component({
  selector: 'app-form-ads-channel',
  templateUrl: './form-ads-channel.component.html',
  styleUrls: ['./form-ads-channel.component.scss'],
})
export class FormAdsChannelComponent implements OnInit {
  files: File[] = [];
  ads: AdsFormCollection = new AdsFormCollection();
  oldFiles: any;
  constructor(
    public dialogRef: MatDialogRef<FormAdsChannelComponent>,
    private cloudinaryService: CloudinaryService,
    private homepageService: HomepageService,
    private channelService: ChannelsService,
    private layoutService: LayoutsService,
    private imageService: ImagesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ads.typeAd = this.data.type;
    if (this.data.value) {
      this.ads = this.data.value;
      this.ads.image = this.data.value?.img;
      this.imageService
        .getFileFromImageUrl(this.ads.image)
        .subscribe((res: File) => {
          this.files.push(res);
          this.oldFiles = res;
        });
    }
  }

  ngOnInit() {}

  onSelect(event: any) {
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  checkImages() {
    if (this.files[0]?.name !== this.oldFiles?.name) {
      return true;
    }
    return false;
  }

  // onSaved() {
  //   if (this.checkImages()) {
  //     this.updateWithUploadCloudinaryService();
  //   } else {
  //     this.saved();
  //   }
  // }

  // saved() {
  //   const param = {
  //     id: this.ads.id,
  //     altText: this.ads.altText,
  //     link: this.ads.link,
  //     typeAd: this.ads.typeAd,
  //     pageId: this.data.channel,
  //     image: this.ads.image,
  //   };
  //   this.channelService.updateAds(param).subscribe((res) => {
  //     this.layoutService.successMessage(
  //       'Updated!',
  //       'Your ads has been update.'
  //     );
  //     this.dialogRef.close(true);
  //   });
  // }

  // updateWithUploadCloudinaryService() {
  //   this.cloudinaryService
  //     .uploadWithSignature(this.files[0])
  //     .subscribe((data) => {
  //       this.ads.image = data.secure_url;
  //       this.saved();
  //     });
  // }
}
