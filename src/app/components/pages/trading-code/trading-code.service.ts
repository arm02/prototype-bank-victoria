import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateTradingCodeRequest } from './trading-code.collection';

@Injectable({
  providedIn: 'root',
})
export class TradingCodeService {
  constructor(private httpService: HttpService) {}

  getAllTradingView(q: string | null, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q ? q : ''),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/trading-view', params);
  }

  createTradingView(symbol: string | null) {
    const params = {
      symbol: symbol,
    };
    return this.httpService.Post('master-data/trading-view', params);
  }

  createTradingViewForm(payload: CreateTradingCodeRequest) {
    return this.httpService.Post('master-data/trading-view', payload);
  }

  updateTradingViewForm(payload: CreateTradingCodeRequest) {
    return this.httpService.Put(
      `master-data/trading-view/${payload.uuid}`,
      payload
    );
  }

  deleteTradingView(id: string) {
    return this.httpService.Delete('master-data/trading-view', { id: id });
  }

  importTradingView(files: File) {
    const data = new FormData();
    data.append('file', files);
    return this.httpService.Post('master-data/trading-view/import/upload', data, 'image');
  }
}
