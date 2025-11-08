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
    await this.authService
      .authCheck()
      .subscribe((data: AuthCheckRequestCollection) => {
        if (data) {
          this.authService.isAuthenticated.next(true);
          if (next.data.role !== 'all' && data.role !== 'admin') {
            if (next.data.role && next.data.role.indexOf(data.role) === -1) {
              this.router.navigate(['/']);
              return false;
            }
          }
          status = true;
        } else {
          this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url },
          });
        }
        return status;
      });
  }
}
