import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private httpService: HttpService) {}

  getCountDataDashboard() {
    return this.httpService.Get('dashboard/get');
  }

  getJsonBlobData(id: string) {
    return this.httpService.GetFromJsonBlob(id);
  }

  getJsonBlobCMSData(id: string) {
    return this.httpService.GetFromJsonBlob(id);
  }

  SyncDataYoutube() {
    return this.httpService.Post('youtube/sync');
  }

  getAllChangeLogs(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/change-logs', params);
  }

  getAllFeedback(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('master-data/feedback', params);
  }

  createChangeLogs(body: { title: string; content: string }) {
    return this.httpService.Post('master-data/change-logs', body);
  }

  updateChangeLogs(body: { uuid: string; title: string; content: string }) {
    return this.httpService.Put('master-data/change-logs', body, body.uuid);
  }

  deletechangeLogs(id: string) {
    return this.httpService.Delete('master-data/change-logs', { id: id });
  }
}
