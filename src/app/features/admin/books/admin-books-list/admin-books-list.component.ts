import { Component, OnInit } from '@angular/core';
import { AdminBooksService } from 'src/app/core/services/admin-books.service';
import { Book } from 'src/app/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-books-list',
  templateUrl: './admin-books-list.component.html'
})
export class AdminBooksListComponent implements OnInit {
  books: Book[] = [];
  loading = true;
  error = '';

  constructor(private booksService: AdminBooksService, private router: Router) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getAllBooks().subscribe({
      next: data => {
        this.books = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Failed to load books';
        this.loading = false;
      }
    });
  }

  deleteBook(id: number) {
    if (confirm('Are you sure you want to delete this book?')) {
      this.booksService.deleteBook(id).subscribe({
        next: () => this.loadBooks(),
        error: err => alert(err.error?.message || 'Delete failed')
      });
    }
  }

  editBook(id: number) {
    this.router.navigate(['/admin/books/edit', id]);
  }
}