import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
// import { LoginRequest, LoginResponse } from '../models/dtos';
import { LoginResponse, LoginRequest } from 'src/app/models/dtos';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:5189/api/auth'; // adjust port if needed
  private tokenKey = 'auth_token';
  private userKey = 'user_info';
  private userSubject = new BehaviorSubject<any>(this.getUser());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  adminLogin(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(tap(res => this.setSession(res)));
  }

  userLogin(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user/login`, credentials)
      .pipe(tap(res => this.setSession(res)));
  }

  private setSession(response: any) {
    const token = response.token;
    // Normalize user object (admin returns flat, user returns nested)
    const user = response.user || {
      userId: response.userId,
      fullName: response.fullName,
      role: response.role
    };
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any {
    const userStr = localStorage.getItem(this.userKey);
    return userStr ? JSON.parse(userStr) : null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded: any = jwtDecode(token);
      const expiry = decoded.exp * 1000;
      return Date.now() < expiry;
    } catch {
      return false;
    }
  }

  getRole(): string | null {
    return this.getUser()?.role || null;
  }
}