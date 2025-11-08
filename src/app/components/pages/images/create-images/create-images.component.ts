import { Component, inject, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { CreateImagesRequest } from '../images.collection';
import { ImagesService } from '../images.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-images',
  templateUrl: './create-images.component.html',
  styleUrls: ['./create-images.component.scss'],
})
export class CreateImagesComponent implements OnInit {
  files: File[] = [];
  images: CreateImagesRequest = new CreateImagesRequest();
  user = this.authService.getUserData();
  oldFiles: any;
  constructor(
    public dialogRef: MatDialogRef<CreateImagesComponent>,
    private authService: AuthService,
    private cloudinaryService: CloudinaryService,
    private imageService: ImagesService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) private data: CreateImagesRequest
  ) {
    if (data?.image_id) {
      this.images = data;
      this.images.type = this.images.type.toLowerCase();
      this.imageService
        .getFileFromImageUrl(this.images.image)
        .subscribe((res: File) => {
          this.files.push(res);
          this.oldFiles = res;
        });
      this.images.tag = data?.tag || [];
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

  uploadImage() {
    if (this.data?.image_id) {
      if (this.checkImages()) {
        this.updateWithUploadCloudinaryService();
      } else {
        this.updateImage();
      }
    } else {
      this.saveImage();
    }
  }

  updateImage() {
    this.imageService.updateImage(this.images).subscribe((res) => {
      this.layoutService.successMessage(
        'Updated!',
        'Your image has been updated.'
      );
      this.dialogRef.close(this.images);
    });
  }

  updateWithUploadCloudinaryService() {
    this.cloudinaryService
      .uploadWithSignature(this.files[0])
      .subscribe((data) => {
        this.images.image = data.secure_url;
        this.images.type = this.files[0].type.includes('image')
          ? 'image'
          : 'video';
        this.updateImage();
      });
  }

  saveImage() {
    this.cloudinaryService
      .uploadWithSignature(this.files[0])
      .subscribe((data) => {
        this.images.date = this.layoutService.getUTCDate();
        this.images.userId = this.user.user_id;
        this.images.image = data.secure_url;
        this.images.type = this.files[0].type.includes('image')
          ? 'image'
          : 'video';
        this.imageService.postImage(this.images).subscribe((res) => {
          this.layoutService.successMessage(
            'Uploaded!',
            'Your image has been upload.'
          );
          this.dialogRef.close(this.images);
        });
      });
  }

  announcer = inject(LiveAnnouncer);
  removeKeyword(keyword: string) {
    const index = this.images.tag.indexOf(keyword);
    if (index >= 0) {
      this.images.tag.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.images.tag.push(value);
    }
    event.chipInput!.clear();
  }

  addHashtagFromInputField(): void {
    const inputField = document.getElementById(
      'hashtagInput'
    ) as HTMLInputElement;
    const inputValue = inputField.value.trim();
    if (inputValue) {
      this.images.tag.push(inputValue);
      inputField.value = '';
    }
  }
}
