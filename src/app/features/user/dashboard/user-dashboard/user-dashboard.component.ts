import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserBooksService } from 'src/app/core/services/user-books.service';
import { UserBorrowService } from 'src/app/core/services/user-borrow.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user = this.authService.getUser();
  currentlyBorrowed: number = 0;
  totalBorrowed: number = 0;
  availableBooks: number = 0;
  recentActivity: any[] = [];

  constructor(
    private authService: AuthService,
    private borrowService: UserBorrowService,
    private booksService: UserBooksService
  ) {}

  ngOnInit() {
    this.loadStats();
    this.loadRecentActivity();
  }

  loadStats() {
    this.borrowService.getMyBorrowHistory().subscribe(history => {
      this.currentlyBorrowed = history.filter(h => h.status === 'Borrowed').length;
      this.totalBorrowed = history.length;
    });
    this.booksService.getAvailableBooks().subscribe(books => {
      this.availableBooks = books.length;
    });
  }

  loadRecentActivity() {
    this.borrowService.getMyBorrowHistory().subscribe(history => {
      this.recentActivity = history.slice(0, 5); // last 5
    });
  }
}