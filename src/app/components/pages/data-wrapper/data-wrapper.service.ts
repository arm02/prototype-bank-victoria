import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { DataWrapperRequest } from './data-wrapper.collection';

@Injectable({
  providedIn: 'root',
})
export class DataWrapperService {
  constructor(private httpService: HttpService) {}

  getAllDataWrapper(q: string | null, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q ? q : ''),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/data-wrapper', params);
  }

  createDataWrapper(payload: DataWrapperRequest) {
    return this.httpService.Post('master-data/data-wrapper', payload);
  }

  updateDataWrapper(payload: DataWrapperRequest) {
    return this.httpService.Put(
      `master-data/data-wrapper/${payload.uuid}`,
      payload
    );
  }

  deleteDataWrapper(id: string) {
    return this.httpService.Delete('master-data/data-wrapper', { id: id });
  }
}
