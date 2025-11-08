import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { environment } from 'src/environments/environments';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class CloudinaryService {
  private unsubcribed = new Subject();
  constructor(private http: HttpClient) {}

  uploadWithSignature(files: File): Observable<any> {
    const data = new FormData();
    const type = files.type.split('/');
    const timestamp = this.generateTimestamp();
    const publicId = this.generatePublicId();
    data.append('file', files);
    data.append('api_key', '692993836457629');
    data.append('eager', 'w_400,h_300,c_pad|w_260,h_200,c_crop');
    data.append('public_id', publicId);
    data.append('timestamp', timestamp);
    data.append(
      'signature',
      this.generateSignature(publicId, timestamp)
    );
    return this.http
      .post(environment.config.cloudinaryBaseUrl + type[0] + '/upload', data)
      .pipe(takeUntil(this.unsubcribed));
  }

  generateTimestamp() {
    return Math.round(new Date().getTime() / 1000).toString();
  }

  generatePublicId() {
    const publicId = (
      Date.now() +
      Math.floor(Math.random() * 10000) +
      1
    ).toString();
    return publicId;
  }

  generateSignature(publicId: string, timestamp: string) {
    const signatures = crypto
      .SHA1(
        'eager=w_400,h_300,c_pad|w_260,h_200,c_crop&public_id=' +
          publicId +
          '&timestamp=' +
          timestamp +
          environment.config.cloudinaryApiSecret
      )
      .toString();
    return signatures;
  }
}
