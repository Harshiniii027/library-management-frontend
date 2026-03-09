import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any = null;
  role: string | null = null;
  private userSub!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe(user => {
      this.user = user;
      this.role = user ? user.role : null;
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}