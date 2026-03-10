import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginRequest } from 'src/app/models/dtos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: LoginRequest = { email: '', password: '' };
  errorMessage = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = '';
    this.isLoading = true;

    // First try admin login
    this.authService.adminLogin(this.credentials).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/admin']);
      },
      error: (adminErr) => {
        // If admin fails, try user login
        this.authService.userLogin(this.credentials).subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigate(['/user']);
          },
          error: (userErr) => {
            this.isLoading = false;
            this.errorMessage = 'Invalid email or password';
          }
        });
      }
    });
  }

  fillAdminDemo() {
    this.credentials = {
      email: 'admin@library.com',   // change to your actual admin email
      password: 'admin123'           // change to your actual admin password
    };
    // Directly call login – no need to set role
    this.login();
  }
}