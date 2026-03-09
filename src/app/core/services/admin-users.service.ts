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

  updateUserStatus(id: number, dto: UpdateUserStatusDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, dto);
  }
}