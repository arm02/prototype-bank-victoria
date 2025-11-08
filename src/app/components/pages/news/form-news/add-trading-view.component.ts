import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { debounce, debounceTime, map, Observable, of, startWith } from 'rxjs';
import { NewsService } from '../news.service';
import { AuthCheckRequestCollection } from 'src/app/collection/auth.collection';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  template: `<div style="padding: 20px;">
    <div
      style="margin-bottom: 15px; display: flex; gap: 10px; justify-content: space-between"
    >
      <button class="btn-secondary" (click)="onCancel()">Cancel</button>
      <button
        class="btn-primary"
        [ngClass]="{ 'btn-primary': !myControl.hasError('urlNotAllowed') }"
        [disabled]="myControl.hasError('urlNotAllowed')"
        (click)="onSaved()"
      >
        Embed Trading View
      </button>
    </div>
    <mat-form-field style="width: 100%" appearance="outline">
      <mat-label>Format: EXCHANGE:SYMBOL (contoh: IDX:ASII)</mat-label>
      <input
        type="text"
        aria-label="Number"
        matInput
        [formControl]="myControl"
        [matAutocomplete]="auto"
        name="code"
        [placeholder]="'Insert Code'"
      />
      <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
        <mat-option *ngFor="let option of options" [value]="option.symbol">
          <div>
            <span>{{ option.symbol }}</span>
            <i
              *ngIf="userData.role === 'admin'"
              class="fa fa-trash-o"
              (click)="onDeleteTradingView(option.uuid)"
              style="color: red;"
              aria-hidden="true"
            ></i>
          </div>
        </mat-option>
      </mat-autocomplete>
      <mat-error *ngIf="myControl.hasError('urlNotAllowed')">
        Links are not allowed.
      </mat-error>
    </mat-form-field>
  </div>`,
  styles: [
    `
      ::ng-deep .mdc-list-item__primary-text {
        width: 100% !important;
        & > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    `,
  ],
})
export class AddEmbedTradingViewComponent implements OnInit {
  myControl = new FormControl('', [this.noUrlValidator()]);
  options: { uuid: string; symbol: string }[] = [];
  filteredOptions: Observable<{ uuid: string; symbol: string }[]> = of([]);

  userData: AuthCheckRequestCollection = new AuthCheckRequestCollection();
  constructor(
    public dialogRef: MatDialogRef<AddEmbedTradingViewComponent>,
    private newsService: NewsService,
    private authService: AuthService
  ) {
    this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        this.userData = data;
      });
  }
  ngOnInit(): void {
    this.myControl.valueChanges.pipe(debounceTime(800)).subscribe({
      next: (res) => {
        this.getAllTradingView(res);
      },
    });
  }

  noUrlValidator(): ValidatorFn {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return (control: AbstractControl) => {
      const value = control.value;
      if (value && urlPattern.test(value)) {
        return { urlNotAllowed: true };
      }
      return null;
    };
  }

  getAllTradingView(value: string | null) {
    this.newsService.getAllTradingView(value).subscribe({
      next: (res) => {
        this.options = res.data;
      },
    });
  }

  createTradingView() {
    this.newsService.createTradingView(this.myControl.value).subscribe();
  }

  onDeleteTradingView(uuid: string) {
    this.newsService.deleteTradingView(uuid).subscribe({
      next: () => {
        this.myControl.setValue('');
      },
    });
  }

  onSaved() {
    const htmlCode = `<blockquote id="tradingview" data-symbol="${this.myControl.value}"><em>${this.myControl.value}</em></blockquote>`;
    this.createTradingView();
    this.dialogRef.close(htmlCode);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
