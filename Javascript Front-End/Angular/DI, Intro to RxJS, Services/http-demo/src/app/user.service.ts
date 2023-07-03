import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todos } from './types/Todos';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  todos: Todos[] = [];

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
