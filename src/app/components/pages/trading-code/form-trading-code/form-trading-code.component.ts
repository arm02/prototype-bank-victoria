import { Component, Inject, OnInit } from '@angular/core';
import { CreateTradingCodeRequest } from '../trading-code.collection';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TradingCodeService } from '../trading-code.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-form-trading-code',
  templateUrl: './form-trading-code.component.html',
  styleUrls: ['./form-trading-code.component.scss'],
})
export class FormTradingCodeComponent implements OnInit {
  tradingCode: CreateTradingCodeRequest = new CreateTradingCodeRequest();
  constructor(
    private dialogRef: MatDialogRef<FormTradingCodeComponent>,
    private tradingCodeService: TradingCodeService,
    private layoutService: LayoutsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.tradingCode = data;
    }
  }

  ngOnInit(): void {}

  onSaved(): void {
    if (this.data?.uuid) {
      this.updateTradingCode();
    } else {
      this.createTradingCode();
    }
  }

  updateTradingCode() {
    this.tradingCodeService.updateTradingViewForm(this.tradingCode).subscribe({
      next: (res) => {
        if (res) {
          this.layoutService.successMessage(
            'Updated!',
            'Your Trading Code has been update.'
          );
          this.dialogRef.close(true);
        }
      },
    });
  }

  createTradingCode() {
    this.tradingCodeService.createTradingViewForm(this.tradingCode).subscribe({
      next: (res) => {
        if (res) {
          this.layoutService.successMessage(
            'Created!',
            'Symbol successfully added to TradingView!'
          );
          this.dialogRef.close(true);
        }
      },
    });
  }
}
