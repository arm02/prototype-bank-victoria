import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-import-trading-code',
  templateUrl: './import-trading-code.component.html',
  styleUrls: ['./import-trading-code.component.scss'],
})
export class ImportTradingCodeComponent implements OnInit {
  files: File[] = [];
  constructor(
      public dialogRef: MatDialogRef<ImportTradingCodeComponent>) {}

  ngOnInit() {}
  onSelect(event: any) {
    if (this.files.length === 0) {
      this.files.push(...event.addedFiles);
    }
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  
  onSaved() {
    this.dialogRef.close(this.files[0] || null);
  }
}
