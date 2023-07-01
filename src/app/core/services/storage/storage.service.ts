import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  hasToken(): boolean {
    return localStorage.getItem('VY.token') !== null;
  }

  clearToken(): void {
    localStorage.removeItem('VT.token');
  }
}
