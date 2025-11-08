import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EMPTY,
  catchError,
  delay,
  map,
  mergeMap,
  of,
  retry,
  retryWhen,
  throwError,
} from 'rxjs';
import { LayoutsService } from 'src/app/layouts/layouts.service';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  constructor(
    private http: HttpClient,
    private layoutService: LayoutsService
  ) {}

  ParamGet = (object: any) => {
    let params = '';
    let i = 0;
    for (const val in object) {
      if (i === 0) {
        params += `?${val}=${object[val]}`;
      } else {
        params += `&${val}=${object[val]}`;
      }
      i++;
    }
    return params;
  };

  GetFromJsonBlob = (path: string, request: any = '') => {
    if (typeof request === 'object' && request !== null) {
      request = this.ParamGet(request);
    }
    const url = environment.config.jsonBlob + path + request;
    return this.http.get(url, this.options).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => {
        this.layoutService.handleError(error);
        return EMPTY;
      })
    );
  };

  Get = (path: string, request: any = '', type?: string) => {
    if (typeof request === 'object' && request !== null) {
      request = this.ParamGet(request);
    }
    const url = environment.config.apiUrl + path + request;
    if (type) this.options.responseType = type;

    return this.http.get(url, this.options).pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, index) => {
            if (error.status >= 500 && index < 2) {
              return of(error).pipe(delay(1000));
            }
            return throwError(() => error);
          })
        )
      ),
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        this.layoutService.handleError(error);
        return EMPTY;
      })
    );
  };

  Post = (path: string, body: any = {}, type = 'json') => {
    const url = environment.config.apiUrl + path;
    return this.http
      .post(
        url,
        body,
        type === 'json' ? this.options : { withCredentials: true }
      )
      .pipe(
        retryWhen((errors) =>
          errors.pipe(
            mergeMap((error, index) => {
              if (error.status >= 500 && index < 2) {
                return of(error).pipe(delay(1000));
              }
              return throwError(() => error);
            })
          )
        ),
        map((response: any) => response),
        catchError((error: HttpErrorResponse) => {
          this.layoutService.handleError(error);
          return EMPTY;
        })
      );
  };

  Delete = (path: string, params: any, secondPath: string = '') => {
    let url = environment.config.apiUrl + path + '/' + params.id;
    if (secondPath) url += '/' + secondPath;

    return this.http.delete(url, this.options).pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, index) => {
            if (error.status >= 500 && index < 2) {
              return of(error).pipe(delay(1000));
            }
            return throwError(() => error);
          })
        )
      ),
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        this.layoutService.handleError(error);
        return EMPTY;
      })
    );
  };

  Put = (path: string, body: any = {}, secondPath: string = '') => {
    let url = environment.config.apiUrl + path;
    if (secondPath) url += '/' + secondPath;

    return this.http.put(url, body, this.options).pipe(
      retryWhen((errors) =>
        errors.pipe(
          mergeMap((error, index) => {
            if (error.status >= 500 && index < 2) {
              return of(error).pipe(delay(1000));
            }
            return throwError(() => error);
          })
        )
      ),
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => {
        this.layoutService.handleError(error);
        return EMPTY;
      })
    );
  };

  delete(): void {}
}
