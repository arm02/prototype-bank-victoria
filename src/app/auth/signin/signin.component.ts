import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  AuthCheckRequestCollection,
  LoginRequestCollection,
} from 'src/app/collection/auth.collection';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin-new.component.html',
  styleUrls: ['./signin-new.component.scss'],
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.checkLogin();
    this.meta.addTags([
      {
        name: 'description',
        content: 'LMS | PT. Bank Victoria International, Tbk',
      },
      {
        name: 'keywords',
        content: 'lmg, Bank Victoria International',
      },
    ]);
  }

  checkLogin() {
    if (localStorage.getItem('lms-remember-me')) {
      this.router.navigate(['/']);
    }
    // this.authService
    //   .authCheck('login_page')
    //   .subscribe((data: AuthCheckRequestCollection) => {
    //     if (data) {
    //       this.router.navigate(['/']);
    //     }
    //   });
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
    if (
      this.loginCollection.email === 'lms@victoria.com' &&
      this.loginCollection.password === '123'
    ) {
      this.loginSuccess = true;
      localStorage.setItem('lms-remember-me', 'temporary-token');
      setTimeout(() => {
        this.isLoading = false;
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl);
      }, 1000);
      return;
    } else {
      this.isLoading = false;
      this.isErrorMessage = 'Email atau password salah';
    }
  }
}
