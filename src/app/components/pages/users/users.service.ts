import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { CreateUserRequest } from './users.collection';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpService: HttpService) {}

  getAllUser(q: string, page: number, limit: number) {
    const params = {
      q: encodeURIComponent(q),
      page: page,
      limit: limit,
    };
    return this.httpService.Get('users/get', params);
  }

  createUser(body: CreateUserRequest) {
    return this.httpService.Post('users/create', body);
  }

  updateUser(body: CreateUserRequest) {
    return this.httpService.Put('users/update', body, body.user_id);
  }

  deleteUser(id: string) {
    return this.httpService.Delete('users/delete', { id: id });
  }
}
