import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { AdsService } from '../ads.service';
import { FormAdsRequest } from '../ads.collection';
import { ChannelResponseCollection } from '../../channels/channels.collection';

@Component({
  selector: 'app-form-ads',
  templateUrl: './form-ads.component.html',
  styleUrls: ['./form-ads.component.scss'],
})
export class MasterDataFormAdsComponent implements OnInit {
  files: File[] = [];
  changesProfilePicture = false;
  ads: FormAdsRequest = new FormAdsRequest();
  adsType = [
    {
      value: 'billboard',
      label: 'Billboard',
    },
    {
      value: 'skin-ads',
      label: 'Skin Ads',
    },
    {
      value: 'long-rectangle',
      label: 'Long Rectangle',
    },
    {
      value: 'medium-rectangle-top',
      label: 'Media Rectangle Top',
    },
    {
      value: 'medium-rectangle-bottom',
      label: 'Media Rectangle Bottom',
    },
  ];
  adsViewType = ['home', 'news', 'channel'];
  channels: ChannelResponseCollection[] = [];
  constructor(
    public dialogRef: MatDialogRef<MasterDataFormAdsComponent>,
    private cloudinaryService: CloudinaryService,
    private adsService: AdsService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) data: FormAdsRequest
  ) {
    this.getAllChannel();
    if (data) {
      this.ads = data;
      this.layoutService.loadImageBlob(this.ads.image).subscribe((i) => {
        const myFile = new File([i], this.ads.image, {
          type: i.type,
        });
        this.files.push(myFile);
      });
    }
  }

  ngOnInit() {}

  getAllChannel() {
    this.adsService.getAllChannel().subscribe((data) => {
      this.channels = data.object;
    });
  }

  onSelect(event: any) {
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
    } else {
      this.changesProfilePicture = true;
      this.files.splice(this.files.indexOf(event), 1);
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    this.changesProfilePicture = true;
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSaved() {
    if (!this.ads.name) {
      this.layoutService.errorMessageDialog('Please Fill Name');
    } else if (!this.ads.type) {
      this.layoutService.errorMessageDialog('Please Fill Type');
    } else if (!this.ads.view_channel) {
      this.layoutService.errorMessageDialog('Please Fill View Channel');
    } else if (!this.ads.view_type) {
      this.layoutService.errorMessageDialog('Please Fill View Type');
    } else if (!this.ads.link) {
      this.layoutService.errorMessageDialog('Please Fill Link');
    } else {
      if (this.ads.uuid) {
        this.updateAds();
      } else {
        this.createAds();
      }
    }
  }

  updateAds() {
    if (this.changesProfilePicture) {
      this.cloudinaryService.uploadWithSignature(this.files[0]).subscribe({
        next: (data) => {
          this.ads.image = data.secure_url;
          this.adsService.updateAds(this.ads).subscribe((res) => {
            this.layoutService.successMessage(
              'Updated!',
              'Your Ads has been update.'
            );
            this.dialogRef.close(true);
          });
        },
      });
    } else {
      this.adsService.updateAds(this.ads).subscribe({
        next: () => {
          this.layoutService.successMessage(
            'Updated!',
            'Your Ads has been update.'
          );
          this.dialogRef.close(true);
        },
      });
    }
  }

  createAds() {
    delete this.ads.uuid;
    if (this.files[0]) {
      this.cloudinaryService.uploadWithSignature(this.files[0]).subscribe({
        next: (data) => {
          this.ads.image = data.secure_url;
          this.adsService.createAds(this.ads).subscribe({
            next: () => {
              this.layoutService.successMessage(
                'Created!',
                'Your Ads has been create.'
              );
              this.dialogRef.close(true);
            },
          });
        },
      });
    } else {
      this.adsService.createAds(this.ads).subscribe({
        next: () => {
          this.layoutService.successMessage(
            'Created!',
            'Your Ads has been create.'
          );
          this.dialogRef.close(true);
        },
      });
    }
  }
}
