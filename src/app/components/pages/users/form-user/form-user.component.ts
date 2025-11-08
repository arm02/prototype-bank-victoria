import { Component, Inject, OnInit } from '@angular/core';
import { CreateUserRequest, UserRoleColectionData } from '../users.collection';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  user: CreateUserRequest = new CreateUserRequest();
  roleData = UserRoleColectionData;
  constructor(
    private dialogRef: MatDialogRef<FormUserComponent>,
    private layoutService: LayoutsService,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    if (data) {
      this.user = data;
      this.user.password = '';
    }
  }

  ngOnInit() {}

  onSaved() {
    this.checkValidationBeforeSaved();
  }

  checkValidationBeforeSaved() {
    if (!this.user.name) {
      this.layoutService.errorMessageDialog('Please Fill Name');
    } else if (!this.user.email) {
      this.layoutService.errorMessageDialog('Please Fill Email');
    } else if (!this.user.password) {
      this.layoutService.errorMessageDialog('Please Fill Password');
    } else if (!this.user.role) {
      this.layoutService.errorMessageDialog('Please Select Role');
    } else {
      if (this.user.user_id) {
        this.updateUser();
      } else {
        this.postUser();
      }
    }
  }

  postUser() {
    this.userService.createUser(this.user).subscribe((res) => {
      this.layoutService.successMessage(
        'Created!',
        'Your writer has been create.'
      );
      this.dialogRef.close(true);
    });
  }

  updateUser() {
    this.userService.updateUser(this.user).subscribe((res) => {
      this.layoutService.successMessage(
        'Updated!',
        'Your user has been update.'
      );
      this.dialogRef.close(true);
    });
  }
}
