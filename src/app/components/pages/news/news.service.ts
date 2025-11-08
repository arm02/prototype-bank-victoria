import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateNewsRequestCollection } from './news.collection';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpService: HttpService, private datePipe: DatePipe) {}

  getAllNews(
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
    return this.httpService.Get('post/news', params);
  }

  getDeletedNews(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
      deleted: 1,
    };
    return this.httpService.Get('post/news', params);
  }

  getAllNewsBySite(
    q: string,
    page: number,
    limit: number,
    site_id?: string,
    writer_id?: string,
    date?: any,
    sort?: any,
    reporter_id?: any,
    status?: string
  ) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
      site_id: site_id ? site_id : '',
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
    };
    return this.httpService.Get('post/news', params);
  }

  getNews(id: string) {
    return this.httpService.Get('post/news/' + id);
  }

  getAnalyticPageView(url: string) {
    return this.httpService.Get('post/analytic/news' + url);
  }

  getMatomoPageView(url: string) {
    return this.httpService.Get('post/matomo/news' + url);
  }

  createNews(body: CreateNewsRequestCollection) {
    return this.httpService.Post('post/news', body);
  }

  createMediaNews(id: string, body: any) {
    return this.httpService.Post('post/news/' + id, body);
  }

  updateNews(body: CreateNewsRequestCollection) {
    return this.httpService.Put('post/news', body, body.post_id);
  }

  deleteNews(id: string) {
    return this.httpService.Delete('post/news', { id: id });
  }

  downloadNews(
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
      type: 'news',
    };
    return this.httpService.Get('post/download', params, 'blob');
  }

  getAllTradingView(q: string | null) {
    const params = {
      q: encodeURIComponent(q ? q : ''),
      page: 1,
      limit: 20,
    };
    return this.httpService.Get('master-data/trading-view', params);
  }

  createTradingView(symbol: string | null) {
    const params = {
      symbol: symbol,
    };
    return this.httpService.Post('master-data/trading-view', params);
  }

  deleteTradingView(id: string) {
    return this.httpService.Delete('master-data/trading-view', { id: id });
  }

  recoverNews(id: string) {
    return this.httpService.Put(`post/deleted/undo/${id}`);
  }

  deletePermanent(id: string) {
    return this.httpService.Delete(`post/deleted/permanent`, { id: id });
  }
}
