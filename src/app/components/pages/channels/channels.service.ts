import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateChannelRequest } from './channels.collection';

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  constructor(private httpService: HttpService) {}

  getAllChannel(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('page/page', params);
  }

  getChannelById(id: any) {
    return this.httpService.Get('page/page/' + id);
  }

  getChannelHeadlineById(id: any) {
    return this.httpService.Get('page/headline/' + id);
  }

  // getChannelTrendById(id: any) {
  //   return this.httpService.Get('page/trend/' + id);
  // }

  // getChannelQuickLinkById(id: any) {
  //   return this.httpService.Get('page/quick-link/' + id);
  // }

  // getChannelAdsById(id: any) {
  //   return this.httpService.Get('page/ad/' + id);
  // }

  postChannelHeadline(body: any) {
    return this.httpService.Post('page/headline', body);
  }

  // updateTrend(body: any) {
  //   return this.httpService.Post('page/trend', body);
  // }

  createChannel(body: CreateChannelRequest) {
    return this.httpService.Post('page/page', body);
  }

  updateChannel(body: any, id: string) {
    return this.httpService.Put('page/page', body, id);
  }

  // updateAds(body: any) {
  //   return this.httpService.Post('page/ad/createOrUpdate', body);
  // }

  // deleteAds(id: string) {
  //   return this.httpService.Delete('page/ad', { id: id });
  // }

  deleteChannel(id: string) {
    return this.httpService.Delete('page/page', { id: id });
  }

  deleteChannelHeadline(id: string) {
    return this.httpService.Delete('page/headline', { id: id });
  }

  // createQuickLink(body: any) {
  //   return this.httpService.Post('page/quick-link', body);
  // }

  // updateQuickLink(body: any) {
  //   return this.httpService.Put('page/quick-link', body, body.id);
  // }

  // deleteQuickLink(id: string) {
  //   return this.httpService.Delete('page/quick-link', { id: id });
  // }
}
