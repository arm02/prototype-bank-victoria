import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  constructor(private httpService: HttpService, private datePipe: DatePipe) {}

  getAllMedia(
    q: string,
    page: number,
    limit: number,
    page_id?: string,
    writer_id?: string,
    date?: any,
    sort?: any,
    reporter_id?: any,
    status?: string,
    site_id?: string
  ) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
      page_id: page_id ? page_id : '',
      writer_id: writer_id ? writer_id : '',
      reporter_id: reporter_id ? reporter_id : '',
      status: status ? status : '',
      date_start: date?.start
        ? this.datePipe.transform(date.start, 'YYYY-MM-dd')
        : '',
      date_end: date?.end
        ? this.datePipe.transform(date.end, 'YYYY-MM-dd')
        : '',
      sort_by: sort?.value ? sort.value : '',
      sort_type: sort?.type ? sort.type : '',
      site_id: site_id ? site_id : '',
    };
    return this.httpService.Get('media/get', params);
  }

  getDeletedMedia(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
      deleted: 1,
    };
    return this.httpService.Get('media/get', params);
  }

  downloadMedia(
    page_id?: string,
    writer_id?: string,
    date?: any,
    reporter_id?: any,
    status?: string
  ) {
    const params = {
      page_id: page_id ? page_id : '',
      writer_id: writer_id ? writer_id : '',
      reporter_id: reporter_id ? reporter_id : '',
      status: status ? status : '',
      date_start: date?.start
        ? this.datePipe.transform(date.start, 'YYYY-MM-dd')
        : '',
      date_end: date?.end
        ? this.datePipe.transform(date.end, 'YYYY-MM-dd')
        : '',
      type: 'media',
    };
    return this.httpService.Get('post/download', params, 'blob');
  }
}
