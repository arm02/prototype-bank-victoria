import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateSiteRequest } from './sites.collection';

@Injectable({
  providedIn: 'root',
})
export class SitesService {
  constructor(private httpService: HttpService) {}

  getAllSites(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('site', params);
  }

  getSitesById(id: any) {
    return this.httpService.Get('site/' + id);
  }

  createSite(body: CreateSiteRequest) {
    return this.httpService.Post('site', body);
  }

  updateSite(body: any, id: string) {
    return this.httpService.Put('site', body, id);
  }

  deleteSite(id: string) {
    return this.httpService.Delete('site', { id: id });
  }

  getSiteHeadlineById(id: any) {
    const params = {
      site: id,
    };
    return this.httpService.Get('site/headline/all/get', params);
  }

  postSiteHeadline(body: any) {
    return this.httpService.Post('site/headline', body);
  }

  deleteSiteHeadline(id: string) {
    return this.httpService.Delete('site/headline', { id: id });
  }
}
