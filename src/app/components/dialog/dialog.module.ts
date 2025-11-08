import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageBucketComponent } from './image-bucket/image-bucket.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DialogService } from './dialog.service';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    LayoutsModule,
    FormsModule
  ],
  providers: [DialogService]
})
export class DialogModule { }
