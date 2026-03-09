import { Component } from '@angular/core';
// import { AuthService } from '../../../core/services/auth.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  template: `
    <div class="container mt-4">
      <h2>Welcome, {{ user?.fullName }}!</h2>
      <p>This is your dashboard. Use the navigation to browse and borrow books.</p>
    </div>
  `
})
export class UserDashboardComponent {
  user = this.authService.getUser();
  constructor(private authService: AuthService) {}
}