import { Component, OnInit } from '@angular/core';
import { AdminUsersService } from 'src/app/core/services/admin-users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: AdminUsersService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getAllUsers().subscribe(data => this.users = data);
  }

  toggleStatus(user: User) {
    const newStatus = !user.isActive;
    this.usersService.updateUserStatus(user.userId, { isActive: newStatus }).subscribe({
      next: () => {
        user.isActive = newStatus;
      },
      error: err => alert('Failed to update status')
    });
  }
}