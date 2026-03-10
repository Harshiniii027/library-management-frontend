import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminUsersService } from '../../../core/services/admin-users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId!: number;
  user: User | null = null;
  borrowHistory: any[] = [];
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: AdminUsersService
  ) {}

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.loadUser();
    this.loadHistory();
  }

  loadUser() {
    this.usersService.getUserById(this.userId).subscribe({
      next: (data) => {
        this.user = data;
        this.loading = false;
      },
      error: (err) => {
        alert('User not found');
        this.router.navigate(['/admin/users']);
      }
    });
  }

  loadHistory() {
    this.usersService.getUserBorrowHistory(this.userId).subscribe(data => {
      this.borrowHistory = data;
    });
  }

  goBack() {
    this.router.navigate(['/admin/users']);
  }
}