import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateImagesRequest } from './images.collection';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) {}

  getAllImage(
    q: string,
    page: number,
    limit: number,
    type: string = '',
    user_id?: string,
    date?: any,
    sort?: any
  ) {
    const params = {
      q: encodeURIComponent(q),
      type: type ? type : '',
      page: page,
      limit: limit,
      user_id: user_id ? user_id : '',
      date_start: date?.start
        ? this.datePipe.transform(date.start, 'YYYY-MM-dd')
        : '',
      date_end: date?.end
        ? this.datePipe.transform(date.end, 'YYYY-MM-dd')
        : '',
      sort_by: sort?.value ? sort.value : '',
      sort_type: sort?.type ? sort.type : '',
    };
    return this.httpService.Get('image/get', params);
  }

  postImage(body: CreateImagesRequest) {
    return this.httpService.Post('image/upload', body);
  }

  updateImage(body: CreateImagesRequest) {
    return this.httpService.Put('image/update', body);
  }

  deleteImage(id: string) {
    return this.httpService.Delete('image/delete', { id: id });
  }

  getFileFromImageUrl(url: string) {
    return this.httpClient
      .get(url, {
        responseType: 'blob',
      })
      .pipe(
        map((response) => {
          const myFile = new File([response], url, {
            type: response.type,
          });
          return myFile;
        })
      );
  }
}
