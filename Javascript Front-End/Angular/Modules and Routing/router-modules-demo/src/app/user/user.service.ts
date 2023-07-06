import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';
import { GlobalLoaderService } from '../core/global-loader/global-loader.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getSingleUser(id: string) {
    return this.http.get<User>(`${this.url}/${id}`);
  }
}
