import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/app/components/services/http.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  template: `<div style="padding: 20px;">
    <div
      style="margin-bottom: 15px; display: flex; gap: 10px; justify-content: space-between"
    >
      <button class="btn-secondary" (click)="onCancel()">Cancel</button>
      <button class="btn-primary" (click)="onSaved()">
        Embed Social Media
      </button>
    </div>
    <mat-form-field style="width: 100%" appearance="outline">
      <mat-label>Insert Link</mat-label>
      <input matInput name="embedLink" [(ngModel)]="embedLink" type="text" />
    </mat-form-field>
  </div>`,
})
export class AddEmbedLinkComponent implements OnInit {
  embedLink = '';
  constructor(
    public dialogRef: MatDialogRef<AddEmbedLinkComponent>,
    private layoutService: LayoutsService,
    private httpService: HttpService
  ) {}
  ngOnInit(): void {}

  onSaved() {
    if (
      !this.embedLink.includes('twitter.com') &&
      !this.embedLink.includes('x.com')
    ) {
      this.layoutService.errorMessageDialog('Invalid Link');
    } else {
      if (!this.embedLink.includes('status')) {
        this.layoutService.errorMessageDialog('Invalid Link');
      } else {
        this.httpService
          .Get('master-data/twitter-oembed', {
            url: this.embedLink,
          })
          .subscribe({
            next: (res) => {
              this.dialogRef.close(res.html);
            },
            error: () => {
              this.layoutService.errorMessageDialog('Error Embed Link');
            },
          });
      }
    }
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
