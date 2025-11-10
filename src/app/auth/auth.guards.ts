import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { AuthCheckRequestCollection } from '../collection/auth.collection';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    let status = false;
    if (localStorage.getItem('lms-remember-me')) {
      status = true;
    } else {
      this.router.navigate(['/auth/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
    return status;
  }
}
