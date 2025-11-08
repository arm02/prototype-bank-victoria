import { Component, OnInit } from '@angular/core';
import { TradingCodeResponseCollection } from './trading-code.collection';
import { TradingCodeService } from './trading-code.service';
import { MatDialog } from '@angular/material/dialog';
import { FormTradingCodeComponent } from './form-trading-code/form-trading-code.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { ImportTradingCodeComponent } from './import-trading-code/import-trading-code.component';

@Component({
  selector: 'app-trading-code',
  templateUrl: './trading-code.component.html',
  styleUrls: ['./trading-code.component.scss'],
})
export class TradingCodeComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  tradingView: TradingCodeResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'symbol',
      type: 'string',
      title: 'Symbol',
      width: '20%',
    },
    {
      value: 'company_name',
      type: 'string',
      title: 'Company Name',
      width: '40%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created At',
      width: '20%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '20%',
    },
  ];
  constructor(
    private tradingCodeService: TradingCodeService,
    private dialog: MatDialog,
    private layoutService: LayoutsService
  ) {}

  ngOnInit(): void {
    this.getAllTradingCode();
  }

  getAllTradingCode() {
    this.tradingCodeService
      .getAllTradingView(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.tradingView = data.data;
        this.rowCount = data.count;
      });
  }

  importTradingCode() {
    const dialogRef = this.dialog.open(ImportTradingCodeComponent, {
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.tradingCodeService.importTradingView(result).subscribe({
            next: (result) => {
              this.layoutService.successMessage('Created!', result.message);
              this.getAllTradingCode();
            },
          });
        }
      },
    });
  }

  createTradingCode() {
    const dialogRef = this.dialog.open(FormTradingCodeComponent, {
      disableClose: true,
      width: '600px',
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getAllTradingCode();
        }
      },
    });
  }

  editTradingCode(row: any) {
    const dialogRef = this.dialog.open(FormTradingCodeComponent, {
      disableClose: true,
      width: '400px',
      data: row,
    });
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.getAllTradingCode();
        }
      },
    });
  }

  deleteTradingCode(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.tradingCodeService.deleteTradingView(event.uuid).subscribe({
          next: () => {
            this.layoutService.deletedConfirmed();
            this.getAllTradingCode();
          },
        });
      }
    });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllTradingCode();
  }
}
