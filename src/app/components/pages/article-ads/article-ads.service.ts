import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormAdsArticleRequest } from './article-ads.collection';

@Injectable({
  providedIn: 'root',
})
export class AdsArticleService {
  constructor(private httpService: HttpService) {}

  getAllAds(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/ads-article/get', params);
  }

  createAds(body: FormAdsArticleRequest) {
    return this.httpService.Post('master-data/ads-article/create', body);
  }

  updateAds(body: FormAdsArticleRequest) {
    return this.httpService.Put(
      'master-data/ads-article/update',
      body,
      body.uuid
    );
  }

  deleteAds(id?: string) {
    return this.httpService.Delete('master-data/ads-article/delete', {
      id: id,
    });
  }
}
