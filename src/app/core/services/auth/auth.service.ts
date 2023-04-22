import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/auth/user.model';
import { Auth } from '../../models/auth/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.urlBackend;

  constructor(private http: HttpClient) {}

  Login(user: Auth): Observable<User> {
    this.baseUrl = 'http://localhost:3000/login';
    return this.http.get<User>(this.baseUrl);
  }

  /* getPostFilter(name: string): Observable<Post[]> {
    this.baseUrl = 'http://localhost:3000/posts';
    this.baseUrl += `?name=${name}`;
    return this.http.get<Post[]>(this.baseUrl);
  }

  createPost(post: Post): Observable<Post> {
    this.baseUrl = 'http://localhost:3000/posts';
    return this.http.post<Post>(this.baseUrl, post);
  }

  updatePost(post: Post): Observable<Post> {
    this.baseUrl = `http://localhost:3000/posts/${post.id}`;
    return this.http.put<Post>(this.baseUrl, post);
  }

  deletePost(post: Post): Observable<void> {
    this.baseUrl = 'http://localhost:3000/posts';
    return this.http.delete<void>(`${this.baseUrl}/${post.id}`);
  } */
}
