import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  AuthCheckRequestCollection,
  LoginRequestCollection,
} from 'src/app/collection/auth.collection';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginCollection: LoginRequestCollection = new LoginRequestCollection();
  isErrorMessage = '';
  isLoading = false;
  showPassword = false;
  loginSuccess = false;
  isSubmitted = false;
  constructor(
    private authService: AuthService,
    private meta: Meta,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkLogin();
    this.meta.addTags([
      {
        name: 'description',
        content: 'CMS Investor Trust',
      },
      {
        name: 'keywords',
        content: 'cms, investor trust',
      },
    ]);
  }

  checkLogin() {
    this.authService
      .authCheck('login_page')
      .subscribe((data: AuthCheckRequestCollection) => {
        if (data) {
          this.router.navigate(['/']);
        }
      });
  }

  inputChange() {
    this.isErrorMessage = '';
    this.isSubmitted = false;
  }

  submitLogin() {
    this.isLoading = true;
    this.isSubmitted = true;
    if (!this.loginCollection.password) {
      this.isErrorMessage = 'Password tidak boleh kosong';
      this.isLoading = false;
      return;
    }
    this.authService.login(this.loginCollection).subscribe({
      next: () => {
        this.loginSuccess = true;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        this.isErrorMessage = error?.error?.message;
      },
    });
  }
}
