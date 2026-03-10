import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { UpdateUserStatusDto } from '../../models/dtos';

@Injectable({ providedIn: 'root' })
export class AdminUsersService {
  private apiUrl = 'http://localhost:5189/api/admin/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  updateUserStatus(id: number, dto: UpdateUserStatusDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, dto);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getUserBorrowHistory(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${id}/borrow-history`);
  }
}