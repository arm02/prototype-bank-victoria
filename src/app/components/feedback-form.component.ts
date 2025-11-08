import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'feedback-components',
  template: `<div class="investor-trust__feedback">
    <h2>Feedback Form</h2>
    <mat-form-field appearance="outline">
      <mat-label>Value</mat-label>
      <textarea
        matInput
        cdkTextareaAutosize
        #autosize="cdkTextareaAutosize"
        cdkAutosizeMinRows="7"
        cdkAutosizeMaxRows="20"
        [(ngModel)]="content"
      ></textarea>
    </mat-form-field>
    <div class="investor-trust__feedback__action">
      <button
        mat-dialog-close
        class="btn-secondary investor-trust__feedback__button investor-trust__feedback__button-right"
      >
        Cancel
      </button>
      <button
        class="btn-primary investor-trust__feedback__button"
        (click)="createFeedback()"
      >
        Save
      </button>
    </div>
  </div>`,
  styles: [
    `
      .investor-trust__feedback {
        padding: 20px;
        overflow-y: auto;
        max-height: 90vh;
        & > mat-form-field {
          width: 100%;
        }

        &__action {
          display: flex;
        }

        &__button {
          &-right {
            margin-right: 5px;
          }

          width: 100%;
        }
      }
    `,
  ],
})
export class FeedbackFormComponent {
  showFeedback = true;
  content = '';
  constructor(
    public dialogRef: MatDialogRef<FeedbackFormComponent>,
    private httpService: HttpService
  ) {}

  createFeedback() {
    this.createFeedbackApi().subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: () => {
        this.dialogRef.close();
      },
    });
  }

  createFeedbackApi() {
    return this.httpService.Post('master-data/feedback', {
      content: this.content,
    });
  }
}
