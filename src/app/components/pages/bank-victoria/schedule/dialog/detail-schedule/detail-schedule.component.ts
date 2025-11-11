import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-schedule',
  templateUrl: './detail-schedule.component.html',
  styleUrls: ['./detail-schedule.component.scss']
})
export class DetailScheduleComponent {

  constructor(private dialogRef: MatDialogRef<DetailScheduleComponent>) {}

  onClose() {
    this.dialogRef.close();
  }
}
