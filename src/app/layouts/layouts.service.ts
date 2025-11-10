import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subject, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LayoutsService {
  isLoading = new Subject<boolean>();
  isExpanded = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  setIsExpanded(value: boolean) {
    this.isExpanded.next(value);
  }

  successMessageDialog(message: string) {
    Swal.fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: message,
      icon: 'success',
    }).then((data) => {});
  }

  errorMessageDialog(message: string) {
    Swal.fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: 'Oops',
      text: message,
      icon: 'error',
    }).then((data) => {});
  }

  setCookie(
    name: string,
    value: string,
    expireDays: number,
    path: string = ''
  ) {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    let cpath: string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
  }

  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  deleteCookie(name: string) {
    this.setCookie(name, '', -1);
  }

  getUTCDate() {
    const epochNow = new Date().getTime();
    return epochNow;
  }

  deleteConfirmation() {
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#337d92',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });
  }

  successMessage(title: string, message: string) {
    return Swal.fire(title, message, 'success');
  }

  errorMessage(title: string, message: string) {
    return Swal.fire(title, message, 'error');
  }

  deletedConfirmed() {
    return Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
  }

  postCreated() {
    return Swal.fire('Created!', 'Your news has been create.', 'success');
  }

  postUpdated() {
    return Swal.fire('Updated!', 'Your news has been update.', 'success');
  }

  copyToClipboard(value: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = value;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.successMessageDialog('Copy to Clipboard');
  }

  loadImageBlob(url: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob',
    });
  }

  handleError(error: HttpErrorResponse | any) {
    const isServerError =
      error?.status >= 500 ||
      error?.status === 0 ||
      error?.status === undefined;
    const isBadRequest = error?.status === 400 || error?.status === 422;
    const isAuthError =
      error?.status === 401 ||
      error?.error?.message === 'jwt must be provided' ||
      error?.error?.message === 'jwt expired';

    let title = 'Oops';
    let message =
      error?.error?.message === 'jwt must be provided'
        ? 'Please login first'
        : error?.error?.message ??
          error?.error?.error ??
          error?.error ??
          error?.message;

    if (isAuthError) {
      title = 'Please Re-Login';
      message = 'Session Expired or Token Invalid';
      this.router.navigate(['/auth/login']);
    }

    if (isServerError) {
      title = 'Connection Issue';
      message = 'Something went wrong, please try again later.';
    } else if (isBadRequest) {
      title = 'Bad Request';
      message =
        error?.error?.message ||
        error?.error?.error ||
        'Invalid request. Please check your input.';
    }

    Swal.fire({
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: 3000,
      title: `${title}`,
      text: message,
      icon: 'error',
    });

    return EMPTY;
  }

  formatDate(date: Date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear(),
      hour = '' + d.getHours(),
      minute = '' + d.getMinutes(),
      second = '' + d.getSeconds();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return (
      year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    );
  }

  downloadFromBlob(response: Blob, filename: string) {
    const url = window.URL.createObjectURL(response);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  removeLocalStorageLike(pattern: string) {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.includes(pattern)) {
        localStorage.removeItem(key);
        i--;
      }
    }
  }
}
