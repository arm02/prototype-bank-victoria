import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class NewslatterService {
  constructor(private httpService: HttpService) {}

  getAllNewsLatter(page: number, limit: number) {
    const params = {
      page: page,
      limit: limit,
    };
    return this.httpService.Get('newslatter', params);
  }
}
