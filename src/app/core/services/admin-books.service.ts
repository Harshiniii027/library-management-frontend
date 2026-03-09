import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { AddBookDto, UpdateBookDto } from '../../models/dtos';

@Injectable({ providedIn: 'root' })
export class AdminBooksService {
  private apiUrl = 'http://localhost:5189/api/admin/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(dto: AddBookDto): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  updateBook(id: number, dto: UpdateBookDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, dto);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}