import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/Theme';
import { Post } from './types/Post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  //Http data requests
  getPosts(limit?: number) {
    const limitFilter = limit ? `?limit=${limit}` : '';

    return this.http.get<Post[]>(`${environment.appUrl}/posts${limitFilter}`);
  }
  getThemes() {
    return this.http.get<Theme[]>(`${environment.appUrl}/themes`);
  }
}
