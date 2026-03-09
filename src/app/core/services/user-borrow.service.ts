import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BorrowBookDto, ReturnBookDto } from '../../models/dtos';

@Injectable({ providedIn: 'root' })
export class UserBorrowService {
  private apiUrl = 'http://localhost:5189/api/user/borrow';

  constructor(private http: HttpClient) {}

  borrowBook(dto: BorrowBookDto): Observable<any> {
    return this.http.post(this.apiUrl, dto);
  }

  returnBook(dto: ReturnBookDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/return`, dto);
  }

  getMyBorrowHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }
}