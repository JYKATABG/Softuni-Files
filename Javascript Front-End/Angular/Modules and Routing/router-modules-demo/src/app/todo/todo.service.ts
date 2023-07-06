import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../types/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  getTodos(limit: number) {
    return this.http.get<Todo[]>(`${this.url}?_start=0&_limit=${limit}`);
  }
}
