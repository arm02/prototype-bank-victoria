import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  constructor(private httpService: HttpService) {}

  getHeadline() {
    return this.httpService.Get('home/headline');
  }

  // getTrend() {
  //   return this.httpService.Get('home/trend');
  // }

  // getQuickLink() {
  //   return this.httpService.Get('home/quick-link');
  // }

  // getAds() {
  //   return this.httpService.Get('home/ad');
  // }

  updateHeadline(body: any) {
    return this.httpService.Put('home/headline', body, body.id);
  }

  // updateTrend(body: any) {
  //   return this.httpService.Post('home/trend', body);
  // }

  // updateAds(body: any) {
  //   return this.httpService.Post('home/ad/createOrUpdate', body);
  // }

  // deleteAds(id: string) {
  //   return this.httpService.Delete('home/ad', { id: id });
  // }

  // createQuickLink(body: any) {
  //   return this.httpService.Post('home/quick-link', body);
  // }

  // updateQuickLink(body: any) {
  //   return this.httpService.Put('home/quick-link', body, body.id);
  // }

  // deleteQuickLink(id: string) {
  //   return this.httpService.Delete('home/quick-link', { id: id });
  // }
}
