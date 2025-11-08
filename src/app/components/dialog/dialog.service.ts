import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from './upload-file/upload-file.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  uploadFileDialog(data: any): void {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      disableClose: true,
      height: '400px',
      width: '600px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
