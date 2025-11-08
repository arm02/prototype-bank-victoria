import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ForgotPasswordComponent {
  passwordForm: {
    oldPassword: string;
    newPassword: string;
  } = {
    oldPassword: '',
    newPassword: '',
  };
  confirmNewPassword = '';
  hidePassword = true;
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    private authService: AuthService,
    private layoutService: LayoutsService
  ) {}

  onConfirm() {
    if (this.passwordForm.newPassword !== this.confirmNewPassword) {
      this.layoutService.errorMessageDialog("Password Doesn't Match");
    } else {
      this.authService.forgotPassword(this.passwordForm).subscribe({
        next: (res) => {
          this.layoutService.successMessage(res.message, "Please Login Again ...");
          this.dialogRef.close();
          this.authService.logout().subscribe();
        },
      });
    }
  }
}
