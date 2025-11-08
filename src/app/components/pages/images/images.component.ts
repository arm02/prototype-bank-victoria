import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';
import { ImagesResponseCollection } from './images.collection';
import { MatDialog } from '@angular/material/dialog';
import { CreateImagesComponent } from './create-images/create-images.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserResponseCollection } from '../users/users.collection';
import { UsersService } from '../users/users.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  query = '';
  querySearchUser = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  images: ImagesResponseCollection[] = [];
  users: UserResponseCollection[] = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  type = '';
  sortBy = {
    value: '',
    type: 'DESC',
  };
  userId = '';
  displayedColumns: any[] = [
    {
      value: 'image',
      type: 'image',
      title: 'Image',
      width: '10%',
    },
    {
      value: 'title',
      type: 'string',
      title: 'Title',
      width: '15%',
    },
    {
      value: 'type',
      type: 'string',
      title: 'Type',
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
      width: '10%',
    },
    {
      value: 'tag',
      type: 'array-value',
      title: 'Tag',
      width: '5%',
    },
    {
      value: 'name',
      type: 'string',
      title: 'Upload By',
      width: '10%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Upload Date',
      width: '15%',
    },
    {
      value: 'action',
      actions: ['copy', 'edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '15%',
    },
  ];
  constructor(
    private imageService: ImagesService,
    public dialog: MatDialog,
    private layoutService: LayoutsService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.getAllImage();
    this.getAllUser();
  }

  createImage() {
    const dialogRef = this.dialog.open(CreateImagesComponent, {
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllImage();
      }
    });
  }

  editImage(event: any) {
    const dialogRef = this.dialog.open(CreateImagesComponent, {
      disableClose: true,
      width: '600px',
      data: event,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllImage();
      }
    });
  }

  getAllImage() {
    this.imageService
      .getAllImage(
        this.query,
        this.page,
        this.limit,
        this.type,
        this.userId,
        this.range?.value,
        this.sortBy
      )
      .subscribe((data) => {
        this.images = data.object;
        this.rowCount = data.rowCount;
        this.mappingImageData();
      });
  }

  copyImage(event: ImagesResponseCollection) {
    this.layoutService.copyToClipboard(event.image);
  }

  deleteImage(event: ImagesResponseCollection) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.imageService.deleteImage(event.image_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllImage();
        });
      }
    });
  }

  mappingImageData() {
    this.images.map((image: ImagesResponseCollection) => {
      image.name = image.user.name;
      image.type =
        image.type === 'image'
          ? 'Image'
          : image.type === 'video'
          ? 'Video'
          : 'Not Set';
      image.tag = image?.tag?.split(',');
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllImage();
  }

  getAllUser() {
    this.userService
      .getAllUser(this.querySearchUser, this.page, this.limit)
      .subscribe((data) => {
        this.users = data.object;
      });
  }
}
