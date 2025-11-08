import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LayoutsService } from '../layouts/layouts.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private layoutService: LayoutsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (
      !request.url.includes('master-data/trading-view') &&
      !request.url.includes('users/login')
    )
      this.layoutService.show();
    return next.handle(request).pipe(finalize(() => this.layoutService.hide()));
  }
}
