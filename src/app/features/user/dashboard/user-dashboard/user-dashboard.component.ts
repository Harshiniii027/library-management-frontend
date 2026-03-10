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
  currentlyBorrowed = 0;
  totalBorrowed = 0;
  availableBooks = 0;
  recentHistory: any[] = [];

  constructor(
    private authService: AuthService,
    private borrowService: UserBorrowService,
    private booksService: UserBooksService
  ) {}

  ngOnInit() {
    this.loadStats();
    this.loadRecentHistory();
  }

  loadStats() {
    this.borrowService.getMyBorrowHistory().subscribe(history => {
      this.totalBorrowed = history.length;
      this.currentlyBorrowed = history.filter(h => h.status === 'Borrowed').length;
    });

    this.booksService.getAvailableBooks().subscribe(books => {
      this.availableBooks = books.length;
    });
  }

  loadRecentHistory() {
    this.borrowService.getMyBorrowHistory().subscribe(history => {
      this.recentHistory = history.sort((a: any, b: any) => 
        new Date(b.borrowDate).getTime() - new Date(a.borrowDate).getTime()
      ).slice(0, 5);
    });
  }
}