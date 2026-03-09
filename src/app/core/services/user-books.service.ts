import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';

@Injectable({ providedIn: 'root' })
export class UserBooksService {
  private apiUrl = 'http://localhost:5189/api/user/books';

  constructor(private http: HttpClient) {}

  getAvailableBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}