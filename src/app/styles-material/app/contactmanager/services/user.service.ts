import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = environment.urlBackend;

  constructor(private http: HttpClient) {}

  loadAll() {
    this.baseUrl = this.baseUrl + 'azure';
    return this.http.get<User[]>(this.baseUrl);
  }

  UserById(id: number): Observable<User> {
    /* this.baseUrl = this.baseUrl + `azure?id=${id}`; */
    this.baseUrl = `http://localhost:3000/azure?id=${id}`;
    return this.http.get<User>(this.baseUrl);
  }
}
