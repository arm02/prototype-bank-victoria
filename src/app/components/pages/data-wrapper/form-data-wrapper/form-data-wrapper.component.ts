import { Component, Inject, OnInit } from '@angular/core';
import { DataWrapperRequest } from '../data-wrapper.collection';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataWrapperService } from '../data-wrapper.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-form-data-wrapper',
  templateUrl: './form-data-wrapper.component.html',
  styleUrls: ['./form-data-wrapper.component.scss'],
})
export class FormDataWrapperComponent {
  dataWrapper: DataWrapperRequest = new DataWrapperRequest();
  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  constructor(
    private dialogRef: MatDialogRef<FormDataWrapperComponent>,
    private dataWrapperService: DataWrapperService,
    private layoutService: LayoutsService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.dataWrapper = data;
    }
    this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        this.userData = data;
      });
  }
  onSaved(): void {
    if (this.data?.uuid) {
      this.updateDataWrapper();
    } else {
      this.createDataWrapper();
    }
  }

  updateDataWrapper() {
    this.dataWrapperService.updateDataWrapper(this.dataWrapper).subscribe({
      next: (res) => {
        if (res) {
          this.layoutService.successMessage(
            'Updated!',
            'Your Data Wrapper has been updated.'
          );
          this.dialogRef.close(true);
        }
      },
    });
  }

  createDataWrapper() {
    this.dataWrapperService.createDataWrapper(this.dataWrapper).subscribe({
      next: (res) => {
        if (res) {
          this.layoutService.successMessage(
            'Created!',
            'Your Data Wrapper has been created.'
          );
          this.dialogRef.close(true);
        }
      },
    });
  }
}
