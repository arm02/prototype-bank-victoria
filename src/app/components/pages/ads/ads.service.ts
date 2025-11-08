import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormAdsRequest } from './ads.collection';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor(private httpService: HttpService) {}

  getAllAds(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/ads/get', params);
  }

  createAds(body: FormAdsRequest) {
    return this.httpService.Post('master-data/ads/create', body);
  }

  updateAds(body: FormAdsRequest) {
    return this.httpService.Put('master-data/ads/update', body, body.uuid);
  }

  deleteAds(id?: string) {
    return this.httpService.Delete('master-data/ads/delete', { id: id });
  }

  getAllChannel() {
    const params = {
      page: 1,
      limit: 100,
    };
    return this.httpService.Get('page/page', params);
  }
}
