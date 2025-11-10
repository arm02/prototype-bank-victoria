import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequestCollection } from '../collection/auth.collection';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  catchError,
  map,
  takeUntil,
} from 'rxjs';
import { environment } from 'src/environments/environments';
import { LayoutsService } from '../layouts/layouts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from '../components/services/state.service';
import { HttpService } from '../components/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private unsubcribed = new Subject();
  isAuthenticated = new BehaviorSubject<any>(false);
  private user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private httpClient: HttpClient,
    private httpService: HttpService,
    private layoutService: LayoutsService,
    private route: ActivatedRoute,
    private router: Router,
    private stateService: StateService
  ) {}

  // async getAuthStatus(): Promise<any> {
  //   await this.authCheck().subscribe((data: any) => {
  //     if (data) {
  //       this.isAuthenticated.next(true);
  //     }
  //   });
  //   return false;
  // }

  authCheck(params?: string) {
    return this.httpClient
      .get(environment.config.apiUrl + 'users/check', {
        withCredentials: true,
      })
      .pipe(
        takeUntil(this.unsubcribed),
        map((response: any) => {
          return response.users;
        }),
        catchError((error: HttpErrorResponse) => {
          this.router.navigate(['/auth/login']);
          if (!params) {
            this.layoutService.handleError(error);
          }
          return EMPTY;
        })
      );
  }

  login(body: LoginRequestCollection): Observable<any> {
    this.isAuthenticated.next(true);
    return this.httpClient
      .post(environment.config.apiUrl + 'users/login', body, {
        withCredentials: true,
      })
      .pipe(
        takeUntil(this.unsubcribed),
        map((response: any) => {
          if (response) {
            localStorage.setItem(
              'user-investor-trust',
              JSON.stringify(response.user)
            );
            if (response.writer) {
              this.stateService.setWriterCheckProfile(response.writer);
            } else {
              this.stateService.setWriterCheckProfile(null);
            }
            setTimeout(() => {
              const returnUrl =
                this.route.snapshot.queryParams['returnUrl'] || '/';
              this.router.navigateByUrl(returnUrl);
            }, 1000);
          }
        })
      );
  }

  logout(): Observable<any> {
    this.isAuthenticated.next(true);
    return this.httpClient
      .post(
        environment.config.apiUrl + 'users/logout',
        {},
        {
          withCredentials: true,
        }
      )
      .pipe(
        takeUntil(this.unsubcribed),
        map((response: any) => {
          if (response) {
            localStorage.clear();
            this.router.navigate(['/auth/login']);
          }
        }),
        catchError((error: HttpErrorResponse) => {
          this.layoutService.handleError(error);
          return EMPTY;
        })
      );
  }

  getUserData() {
    return JSON.parse(
      localStorage.getItem('user-investor-trust') as any
    ) as any;
  }

  forgotPassword(body: { oldPassword: string; newPassword: string }) {
    return this.httpService.Post('users/change-password', body);
  }
}
