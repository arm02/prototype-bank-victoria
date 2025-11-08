import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { UserResponseCollection } from './users.collection';
import { MatDialog } from '@angular/material/dialog';
import { FormUserComponent } from './form-user/form-user.component';
import { LayoutsService } from 'src/app/layouts/layouts.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  query = '';
  page = 1;
  limit = 10;
  rowCount = 0;
  users: UserResponseCollection[] = [];
  displayedColumns: any[] = [
    {
      value: 'name',
      type: 'string',
      title: 'Name',
      width: '30%',
    },
    {
      value: 'email',
      type: 'string',
      title: 'Email',
      width: '30%',
    },
    {
      value: 'role',
      type: 'string',
      title: 'Role',
      width: '15%',
    },
    {
      value: 'createdAt',
      type: 'date',
      title: 'Created At',
      width: '15%',
    },
    {
      value: 'action',
      actions: ['edit', 'delete'],
      type: 'action',
      title: 'Action',
      width: '10%',
    },
  ];
  constructor(
    private userService: UsersService,
    private dialog: MatDialog,
    private layoutService: LayoutsService
  ) {}

  ngOnInit() {
    this.getAllUser();
  }

  createUser() {
    const dialogRef = this.dialog.open(FormUserComponent, {
      disableClose: true,
      height: '450px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllUser();
      }
    });
  }

  editUser(data: any) {
    const dialogRef = this.dialog.open(FormUserComponent, {
      disableClose: true,
      height: '500px',
      width: '400px',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllUser();
      }
    });
  }

  deleteUser(event: any) {
    this.layoutService.deleteConfirmation().then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(event.user_id).subscribe(() => {
          this.layoutService.deletedConfirmed();
          this.getAllUser();
        });
      }
    });
  }

  getAllUser() {
    this.userService
      .getAllUser(this.query, this.page, this.limit)
      .subscribe((data) => {
        this.users = data.object;
        this.rowCount = data.rowCount;
      });
  }

  paginateEvent($event: any) {
    this.page = $event.pageIndex + 1;
    this.limit = $event.pageSize;
    this.getAllUser();
  }
}
