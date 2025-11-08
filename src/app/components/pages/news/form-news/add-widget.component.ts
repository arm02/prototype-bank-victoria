import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  template: `<div style="padding: 20px;">
    <div
      style="margin-bottom: 15px; display: flex; gap: 10px; justify-content: space-between"
    >
      <button class="btn-secondary" (click)="onCancel()">Cancel</button>
      <button class="btn-primary" (click)="onSaved()">Embed Widget</button>
    </div>
    <mat-form-field appearance="outline" style="width: 100%">
      <mat-label>Insert Widget</mat-label>
      <textarea
        matInput
        cdkTextareaAutosize
        #autosize="cdkTextareaAutosize"
        cdkAutosizeMinRows="10"
        cdkAutosizeMaxRows="20"
        [(ngModel)]="widget"
      ></textarea>
    </mat-form-field>
  </div>`,
})
export class AddWidgetComponent implements OnInit {
  widget = '';
  constructor(public dialogRef: MatDialogRef<AddWidgetComponent>) {}
  ngOnInit(): void {}

  onSaved() {
    this.dialogRef.close(this.widget);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
