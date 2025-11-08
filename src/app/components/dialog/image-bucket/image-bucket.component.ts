import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ImagesService } from '../../pages/images/images.service';
import { ImagesResponseCollection } from '../../pages/images/images.collection';
import { CreateImagesComponent } from '../../pages/images/create-images/create-images.component';

@Component({
  selector: 'app-image-bucket',
  templateUrl: './image-bucket.component.html',
  styleUrls: ['./image-bucket.component.scss'],
})
export class ImageBucketComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  images: ImagesResponseCollection[] = [];
  isLoading = true;
  displayedColumns: any[] = [
    {
      value: 'image',
      type: 'image',
      title: 'Image',
      width: '15%',
    },
    {
      value: 'title',
      type: 'string',
      title: 'Title',
      width: '10%',
    },
    {
      value: 'source',
      type: 'string',
      title: 'Source',
      width: '10%',
    },
    {
      value: 'imageDesc',
      type: 'string',
      title: 'Caption',
      width: '15%',
    },
    {
      value: 'name',
      type: 'string',
      title: 'Upload By',
      width: '15%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Upload Date',
      width: '15%',
    },
    {
      value: 'action',
      actions: ['select-image'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<ImageBucketComponent>,
    private imageService: ImagesService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.getAllImage();
    }, 1000);
  }

  getAllImage() {
    this.imageService
      .getAllImage(this.query, this.page, this.limit, this.data)
      .subscribe((data) => {
        this.isLoading = false;
        this.images = data.object;
        this.rowCount = data.rowCount;
        this.mappingImageData();
      });
  }

  createImage() {
    const dialogRef = this.dialog.open(CreateImagesComponent, {
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dialogRef.close(result);
      }
    });
  }

  selectImage(event: any) {
    if (event) {
      this.dialogRef.close(event);
    }
  }

  mappingImageData() {
    this.images.map((image: ImagesResponseCollection) => {
      image.name = image.user.name;
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllImage();
  }
}
