import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CreateWriterRequest } from '../write.collection';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CloudinaryService } from 'src/app/components/services/cloudinary.service';
import { WriterService } from '../writer.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { ImageBucketComponent } from 'src/app/components/dialog/image-bucket/image-bucket.component';
import { ListNewsComponent } from 'src/app/components/dialog/list-news/list-news.component';
import { AddWidgetComponent } from '../../news/form-news/add-widget.component';
import { AddPointPentingComponent } from '../../news/form-news/add-point-penting.component';

@Component({
  selector: 'app-form-writer',
  templateUrl: './form-writer.component.html',
  styleUrls: ['./form-writer.component.scss'],
})
export class FormWriterComponent implements OnInit {
  files: File[] = [];
  writer: CreateWriterRequest = new CreateWriterRequest();
  changesProfilePicture = false;
  tinyMceConfig: any = '';
  editor: any;
  @ViewChild('openToReadTo') openToReadTo: ElementRef<HTMLElement> | any;
  @ViewChild('openToWidget') openToWidget: ElementRef<HTMLElement> | any;
  @ViewChild('openToPoinPenting') openToPoinPenting:
    | ElementRef<HTMLElement>
    | any;
  @ViewChild('openToImagesBucket') openToImagesBucket:
    | ElementRef<HTMLElement>
    | any;
  constructor(
    public dialogRef: MatDialogRef<FormWriterComponent>,
    private cloudinaryService: CloudinaryService,
    private writerService: WriterService,
    private layoutService: LayoutsService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.writer = data;
      if (typeof data.summaries === 'string')
        this.writer.summaries = JSON.parse(data.summaries);
      this.layoutService
        .loadImageBlob(this.writer.profilePicture)
        .subscribe((i) => {
          const myFile = new File([i], this.writer.profilePicture, {
            type: i.type,
          });
          this.files.push(myFile);
        });
    }
  }

  ngOnInit() {
    this.configureTinyMce();
    if (!this.writer.summaries) this.firstSummary();
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
    if (this.writer.writer_id) {
      this.updateWriter();
    } else {
      this.createWriter();
    }
  }

  updateWriter() {
    if (this.changesProfilePicture) {
      this.cloudinaryService
        .uploadWithSignature(this.files[0])
        .subscribe((data) => {
          this.writer.profilePicture = data.secure_url;
          this.writer.summaries = JSON.stringify(this.writer.summaries) as any;
          this.writerService.updateWriter(this.writer).subscribe((res) => {
            this.layoutService.successMessage(
              'Updated!',
              'Your writer has been update.'
            );
            this.dialogRef.close(true);
          });
        });
    } else {
      this.writer.summaries = JSON.stringify(this.writer.summaries) as any;
      this.writerService.updateWriter(this.writer).subscribe((res) => {
        this.layoutService.successMessage(
          'Updated!',
          'Your writer has been update.'
        );
        this.dialogRef.close(true);
      });
    }
  }

  createWriter() {
    this.cloudinaryService
      .uploadWithSignature(this.files[0])
      .subscribe((data) => {
        this.writer.profilePicture = data.secure_url;
        this.writer.summaries = JSON.stringify(this.writer.summaries) as any;
        this.writerService.createWriter(this.writer).subscribe((res) => {
          this.layoutService.successMessage(
            'Created!',
            'Your writer has been create.'
          );
          this.dialogRef.close(true);
        });
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
      setup: (editor: any) => {
        this.editor = editor;
        editor.ui.registry.addButton('readTo', {
          text: 'Baca Juga (Internal Link)',
          onAction: () => {
            let el: HTMLElement = this.openToReadTo.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addPhoto', {
          text: 'Embed Photo',
          onAction: () => {
            let el: HTMLElement = this.openToImagesBucket.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addWidget', {
          text: 'Embed Widget',
          onAction: () => {
            let el: HTMLElement = this.openToWidget.nativeElement;
            el.click();
          },
        });
        editor.ui.registry.addButton('addPoinPenting', {
          text: 'Poin Penting',
          onAction: () => {
            let el: HTMLElement = this.openToPoinPenting.nativeElement;
            el.click();
          },
        });
      },
    };
  }

  addPhoto(editor: any): void {
    const dialogRef = this.dialog.open(ImageBucketComponent, {
      height: '750px',
      width: '1200px',
      data: 'image',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(`
        <figure class="image"><img src="${result.image}" alt="${result.image}" width="429" height="280">
        <figcaption style="color: #718096; line-height: 1.5; font-size: 12px; padding-left: 0; padding-right: 16px; display: block;">${result.imageDesc} (${result.photographer})</figcaption>
        <figcaption style="color: #718096; line-height: 1.5; font-size: 12px; padding-left: 0; padding-right: 16px; display: block;">Source: ${result.source}</figcaption>
        </figure>`);
      }
    });
  }

  addReadTo(editor: any) {
    const dialogRef = this.dialog.open(ListNewsComponent, {
      height: '750px',
      width: '1200px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(
          '<blockquote><h3><span style="color: rgb(52, 73, 94);"><strong>Baca Juga</strong></span></h3><p><span style="color: rgb(35, 111, 161);"><a style="color: rgb(35, 111, 161);" href="https://www.investortrust.id/' +
            result?.page?.pageName.toLowerCase() +
            '/' +
            result?.code +
            result?.linkPost +
            '" target="_blank" rel="noopener">' +
            result.titlePost +
            '</a></span></p></blockquote>'
        );
      }
    });
  }

  addToWidget(editor: any) {
    const dialogRef = this.dialog.open(AddWidgetComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addToPoinPenting(editor: any) {
    const dialogRef = this.dialog.open(AddPointPentingComponent, {
      width: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        editor.insertContent(result);
      }
    });
  }

  addSummary() {
    this.writer.summaries.push('');
  }

  firstSummary() {
    this.writer.summaries = [''];
  }

  removeSummary(index: number) {
    this.writer.summaries.splice(index, 1);
  }

  trackByFn(index: number, item: any): any {
    return index;
  }
}
