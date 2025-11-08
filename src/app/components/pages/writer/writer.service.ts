import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateWriterRequest } from './write.collection';

@Injectable({
  providedIn: 'root',
})
export class WriterService {
  constructor(private httpService: HttpService) {}

  getAllWriter(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('post/writer', params);
  }

  createWriter(body: CreateWriterRequest) {
    return this.httpService.Post('post/writer', body);
  }

  updateWriter(body: CreateWriterRequest) {
    return this.httpService.Put('post/writer', body, body.writer_id);
  }

  deleteWriter(id: string) {
    return this.httpService.Delete('post/writer', { id: id });
  }
}
