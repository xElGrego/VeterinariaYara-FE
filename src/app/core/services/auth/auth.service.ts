import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.urlBackend;

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    this.baseUrl = 'http://localhost:3000/posts';
    let body = {
      user,
      password,
    };
    return this.http.post(this.baseUrl, body);
  }
}
