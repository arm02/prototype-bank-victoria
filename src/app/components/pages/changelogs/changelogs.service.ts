import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ChangeLogsRequest } from './changelogs.collection';

@Injectable({
  providedIn: 'root',
})
export class ChangelogsService {
  constructor(private httpService: HttpService) {}

  getAllChangeLogs(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/change-logs', params);
  }

  createChangeLogs(body: ChangeLogsRequest) {
    return this.httpService.Post('master-data/change-logs', body);
  }

  updateChangeLogs(body: ChangeLogsRequest) {
    return this.httpService.Put('master-data/change-logs', body);
  }

  deleteChangeLogs(id: string) {
    return this.httpService.Delete('master-data/change-logs', { id: id });
  }
}
