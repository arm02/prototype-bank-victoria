import { Component, Inject, OnInit } from '@angular/core';
import { ChangeLogsRequest } from '../changelogs.collection';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ChangelogsService } from '../changelogs.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-form-changelogs',
  templateUrl: './form-changelogs.component.html',
  styleUrls: ['./form-changelogs.component.scss'],
})
export class FormChangelogsComponent implements OnInit {
  changeLogs = new ChangeLogsRequest();
  tinyMceConfig: any = '';
  constructor(
    public dialogRef: MatDialogRef<FormChangelogsComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cloudinaryService: CloudinaryService,
    private changeLogsService: ChangelogsService,
    private layoutService: LayoutsService
  ) {
    if (data?.uuid) this.changeLogs = data;
    console.log(this.changeLogs);
  }

  ngOnInit() {
    this.configureTinyMce();
  }

  onSaved() {
    if (this.changeLogs.uuid) {
      this.updateChangeLogs();
    } else {
      this.createChangeLogs();
    }
  }

  createChangeLogs() {
    this.changeLogsService.createChangeLogs(this.changeLogs).subscribe({
      next: () => {
        this.layoutService.successMessage(
          'Created!',
          'Your change logs has been create.'
        );
        this.dialogRef.close(true);
      },
    });
  }

  updateChangeLogs() {
    this.changeLogsService.updateChangeLogs(this.changeLogs).subscribe({
      next: () => {
        this.layoutService.successMessage(
          'Updated!',
          'Your change logs has been update.'
        );
        this.dialogRef.close(true);
      },
    });
  }

  configureTinyMce() {
    this.tinyMceConfig = {
      branding: false,
      image_advtab: true,
      image_caption: true,
      imagetools_toolbar: `
        rotateleft rotateright |
        flipv fliph |
        imageoptions`,
      inline: false,
      menubar: true,
      paste_data_images: !0,
      autoresize_bottom_margin: 400,
      contextmenu: 'paste link image table',
      images_upload_handler: (blobInfo: any) =>
        new Promise((resolve) => {
          const file = blobInfo.blob();
          let uploadedFile = '';
          this.cloudinaryService.uploadWithSignature(file).subscribe((data) => {
            uploadedFile = data.secure_url;
            resolve(uploadedFile);
          });
          return uploadedFile;
        }),
      plugins:
        'paste anchor tinydrive editimage autolink autoresize autosave charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link lists media nonbreaking pagebreak preview quickbars save searchreplace table template visualblocks visualchars wordcount',
      toolbar: `
        copy paste removeformat undo redo formatselect
        bold italic strikethrough forecolor backcolor
        link alignleft aligncenter alignright alignjustify
        numlist bullist outdent indent
        readTo addPhoto addWidget addPoinPenting`,
    };
  }
}
