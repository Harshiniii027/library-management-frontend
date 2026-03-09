import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/dtos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: LoginRequest = { email: '', password: '' };
  role: 'Admin' | 'User' = 'User'; // toggle between admin/user login
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = '';
    const loginCall = this.role === 'Admin'
      ? this.authService.adminLogin(this.credentials)
      : this.authService.userLogin(this.credentials);

    loginCall.subscribe({
      next: () => {
        const redirect = this.role === 'Admin' ? '/admin' : '/user';
        this.router.navigate([redirect]);
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Login failed';
      }
    });
  }
}