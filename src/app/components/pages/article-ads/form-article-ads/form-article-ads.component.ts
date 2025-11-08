import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { AdsArticleService } from '../article-ads.service';
import { FormAdsArticleRequest } from '../article-ads.collection';
import { ChannelResponseCollection } from '../../channels/channels.collection';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-form-ads',
  templateUrl: './form-article-ads.component.html',
  styleUrls: ['./form-article-ads.component.scss'],
})
export class MasterDataFormAdsArctileComponent implements OnInit {
  filesMobile: File[] = [];
  filesDesktop: File[] = [];
  changesMobile = false;
  changesDesktop = false;
  ads: FormAdsArticleRequest = new FormAdsArticleRequest();
  constructor(
    public dialogRef: MatDialogRef<MasterDataFormAdsArctileComponent>,
    private cloudinaryService: CloudinaryService,
    private adsService: AdsArticleService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) data: FormAdsArticleRequest
  ) {
    if (data) {
      this.ads = data;
      this.loadAdsFiles();
    }
  }

  ngOnInit() {}

  loadAdsFiles() {
    const requests = [];

    if (this.ads.image_desktop) {
      requests.push(this.layoutService.loadImageBlob(this.ads.image_desktop));
    } else {
      requests.push(of(null));
    }

    if (this.ads.image_mobile) {
      requests.push(this.layoutService.loadImageBlob(this.ads.image_mobile));
    } else {
      requests.push(of(null));
    }

    forkJoin(requests).subscribe(([desktopBlob, mobileBlob]) => {
      if (desktopBlob) {
        const desktopFile = new File(
          [desktopBlob],
          this.ads.image_desktop as string,
          {
            type: desktopBlob.type,
          }
        );
        this.filesDesktop.push(desktopFile);
      }

      if (mobileBlob) {
        const mobileFile = new File(
          [mobileBlob],
          this.ads.image_mobile as string,
          {
            type: mobileBlob.type,
          }
        );
        this.filesMobile.push(mobileFile);
      }
    });
  }

  onSelect(event: any, type: string) {
    if (type === 'image_mobile') {
      if (this.filesMobile.length === 0) {
        this.changesMobile = true;
        this.filesMobile.push(...event.addedFiles);
      } else {
        this.changesMobile = true;
        this.filesMobile.splice(this.filesMobile.indexOf(event), 1);
        this.filesMobile.push(...event.addedFiles);
      }
    }
    if (type === 'image_desktop') {
      if (this.filesDesktop.length === 0) {
        this.changesDesktop = true;
        this.filesDesktop.push(...event.addedFiles);
      } else {
        this.changesDesktop = true;
        this.filesDesktop.splice(this.filesDesktop.indexOf(event), 1);
        this.filesDesktop.push(...event.addedFiles);
      }
    }
  }

  onRemove(event: any, type: string) {
    if (type === 'image_mobile') {
      this.changesMobile = true;
      this.filesMobile.splice(this.filesMobile.indexOf(event), 1);
    }
    if (type === 'image_desktop') {
      this.changesDesktop = true;
      this.filesDesktop.splice(this.filesDesktop.indexOf(event), 1);
    }
  }

  onSaved() {
    if (!this.ads.title) {
      this.layoutService.errorMessageDialog('Please Fill Title');
    } else {
      if (this.ads.uuid) {
        this.updateAds();
      } else {
        this.createAds();
      }
    }
  }

  updateAds() {
    const uploads = [];

    if (this.filesMobile[0] && this.changesMobile) {
      uploads.push(
        this.cloudinaryService.uploadWithSignature(this.filesMobile[0])
      );
    } else {
      uploads.push(of(null));
    }

    if (this.filesDesktop[0] && this.changesDesktop) {
      uploads.push(
        this.cloudinaryService.uploadWithSignature(this.filesDesktop[0])
      );
    } else {
      uploads.push(of(null));
    }

    forkJoin(uploads).subscribe({
      next: ([mobileRes, desktopRes]) => {
        if (mobileRes?.secure_url)
          this.ads.image_mobile = mobileRes?.secure_url || null;
        if (desktopRes?.secure_url)
          this.ads.image_desktop = desktopRes?.secure_url || null;

        // Baru createAds sekali di sini
        if (!this.filesMobile[0]) this.ads.image_mobile = null;
        if (!this.filesDesktop[0]) this.ads.image_desktop = null;
        this.adsService.updateAds(this.ads).subscribe({
          next: () => {
            this.layoutService.successMessage(
              'Updated!',
              'Your Ads has been update.'
            );
            this.dialogRef.close(true);
          },
        });
      },
    });
  }

  createAds() {
    delete this.ads.uuid;

    const uploads = [];

    if (this.filesMobile[0]) {
      uploads.push(
        this.cloudinaryService.uploadWithSignature(this.filesMobile[0])
      );
    } else {
      uploads.push(of(null));
    }

    if (this.filesDesktop[0]) {
      uploads.push(
        this.cloudinaryService.uploadWithSignature(this.filesDesktop[0])
      );
    } else {
      uploads.push(of(null));
    }

    forkJoin(uploads).subscribe({
      next: ([mobileRes, desktopRes]) => {
        if (mobileRes) this.ads.image_mobile = mobileRes.secure_url;
        if (desktopRes) this.ads.image_desktop = desktopRes.secure_url;

        // Baru createAds sekali di sini
        this.adsService.createAds(this.ads).subscribe({
          next: () => {
            this.layoutService.successMessage(
              'Created!',
              'Your Ads has been created.'
            );
            this.dialogRef.close(true);
          },
        });
      },
    });
  }
}
