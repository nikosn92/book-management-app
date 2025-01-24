import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `${environment.apiUrl}/books`; // Uses updated environment.apiUrl

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Pass token in headers
    });
  }


  getBookById(id: string): Observable<any> {
    console.log(`Fetching details for book ID: ${id}`);
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  addBook(data: { title: string; author: string; genre: string }): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Correctly use the base apiUrl
    });
  }



  updateBook(bookId: string, bookData: any): Observable<any> {
    console.log(`Updating book ID: ${bookId} with data:`, bookData);
    return this.http.put(`${this.apiUrl}/${bookId}`, bookData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  deleteBook(bookId: string): Observable<any> {
    console.log(`Sending DELETE request for book ID: ${bookId}`);
    return this.http.delete(`${this.apiUrl}/${bookId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }


}
