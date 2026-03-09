import { Component, OnInit } from '@angular/core';
// import { UserBorrowService } from '../../../core/services/user-borrow.service';
import { UserBorrowService } from 'src/app/core/services/user-borrow.service';

@Component({
  selector: 'app-borrow-history',
  templateUrl: './borrow-history.component.html'
})
export class BorrowHistoryComponent implements OnInit {
  history: any[] = [];

  constructor(private borrowService: UserBorrowService) {}

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    this.borrowService.getMyBorrowHistory().subscribe(data => this.history = data);
  }

  returnBook(bookId: number) {
    this.borrowService.returnBook({ bookId }).subscribe({
      next: () => {
        alert('Book returned successfully!');
        this.loadHistory();
      },
      error: err => alert(err.error?.message || 'Return failed')
    });
  }
}