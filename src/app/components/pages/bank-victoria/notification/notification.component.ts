import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  type: 'notification' | 'profile' = 'notification';
  constructor(
    private bottomSheetRef: MatBottomSheetRef<NotificationComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private router: Router
  ) {
    this.type = this.data.type;
  }

  logout() {
    this.bottomSheetRef.dismiss();
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
