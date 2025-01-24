import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/admin/books`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }
}
