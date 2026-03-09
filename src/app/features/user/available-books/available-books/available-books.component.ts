import { Component, OnInit } from '@angular/core';

import { UserBooksService } from 'src/app/core/services/user-books.service';
import { UserBorrowService } from 'src/app/core/services/user-borrow.service';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html'
})
export class AvailableBooksComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private booksService: UserBooksService,
    private borrowService: UserBorrowService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getAvailableBooks().subscribe(data => this.books = data);
  }

  borrowBook(bookId: number) {
    this.borrowService.borrowBook({ bookId }).subscribe({
      next: () => {
        alert('Book borrowed successfully!');
        this.loadBooks(); // refresh list
      },
      error: err => alert(err.error?.message || 'Borrow failed')
    });
  }
}