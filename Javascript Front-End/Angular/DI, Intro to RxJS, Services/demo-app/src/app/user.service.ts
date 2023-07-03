import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './types/JsonPlaceHolder';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient) {}

  readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get<User[]>(this.url);
  }
}
