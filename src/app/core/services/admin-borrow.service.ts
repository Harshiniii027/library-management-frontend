import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BorrowRecord } from '../../models/borrow-record.model';

@Injectable({ providedIn: 'root' })
export class AdminBorrowService {
  private apiUrl = 'http://localhost:5189/api/admin/borrow';

  constructor(private http: HttpClient) {}

  getAllBorrowRecords(): Observable<BorrowRecord[]> {
    return this.http.get<BorrowRecord[]>(this.apiUrl);
  }
}