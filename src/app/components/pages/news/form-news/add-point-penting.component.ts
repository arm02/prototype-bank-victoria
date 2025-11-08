import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  template: `<div style="padding: 20px;">
    <div
      style="margin-bottom: 15px; display: flex; gap: 10px; justify-content: space-between"
    >
      <button class="btn-secondary" (click)="onCancel()">Cancel</button>
      <div>
        <button
          class="btn-secondary"
          style="margin-right: 10px"
          (click)="addPoint()"
        >
          Add Point
        </button>
        <button class="btn-primary" (click)="onSaved()">Save</button>
      </div>
    </div>
    <ng-container *ngFor="let data of poinPenting; let i = index">
      <div style="display: flex; gap: 10px">
        <mat-form-field style="width: 105%" appearance="outline">
          <mat-label>Value</mat-label>
          <textarea
            matInput
            cdkTextareaAutosize
            #autosize="cdkTextareaAutosize"
            cdkAutosizeMinRows="2"
            cdkAutosizeMaxRows="20"
            [(ngModel)]="data.value"
          ></textarea>
        </mat-form-field>
        <a
          *ngIf="poinPenting.length > 1"
          style="color: red; font-size: 30px; cursor: pointer;"
          (click)="deletePoint(i)"
          ><i class="fa fa-trash-o" aria-hidden="true"></i
        ></a>
      </div>
    </ng-container>
  </div>`,
})
export class AddPointPentingComponent implements OnInit {
  poinPenting: PoinPentingInterface[] = [{ value: '' }];
  constructor(public dialogRef: MatDialogRef<AddPointPentingComponent>) {}
  ngOnInit(): void {}

  addPoint() {
    this.poinPenting.push({ value: '' });
  }

  deletePoint(index: number) {
    this.poinPenting.splice(index, 1);
  }

  onSaved() {
    this.dialogRef.close(this.generateHtml());
  }

  onCancel() {
    this.dialogRef.close(false);
  }

  generateHtml() {
    let rows = this.poinPenting
      .map((poin, index) => {
        if (index === this.poinPenting.length - 1) {
          return `<tr>
              <td style="width: 2%; vertical-align: top; padding-right: 10px; border-right: 1px solid #ddd;">●</td>
              <td style="padding-left: 10px; vertical-align: top; padding-bottom: 10px;">${poin.value}</td>
              </tr>`;
        } else {
          return `
          <tr style="border-bottom: 1px solid #ddd">
            <td style="width: 2%; vertical-align: top; padding-right: 10px; border-right: 1px solid #ddd;">●</td>
            <td style="padding-left: 10px; vertical-align: top; padding-bottom: 10px;">${poin.value}</td>
          </tr>`;
        }
      })
      .join('');

    return `
      <div class="container" style="width: 100%">
        <h2 style="color: #003366">Poin Penting</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 10px">
          <tbody>
            <tr>
              <td style="padding: 10px; vertical-align: top">
                <table style="width: 100%; border-collapse: collapse">
                  <tbody>
                    ${rows}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;
  }
}

export class PoinPentingInterface {
  value: string = '';
}
