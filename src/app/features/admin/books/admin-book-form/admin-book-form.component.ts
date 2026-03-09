import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminBooksService } from 'src/app/core/services/admin-books.service';
import { AddBookDto, UpdateBookDto } from 'src/app/models/dtos';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-admin-book-form',
  templateUrl: './admin-book-form.component.html'
})
export class AdminBookFormComponent implements OnInit {
  bookId?: number;
  isEdit = false;
  model: AddBookDto = { title: '', author: '', category: '', totalCopies: 0 };
  originalBook?: Book;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private booksService: AdminBooksService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookId = +id;
      this.isEdit = true;
      this.booksService.getAllBooks().subscribe(books => {
        this.originalBook = books.find(b => b.bookId === this.bookId);
        if (this.originalBook) {
          this.model = {
            title: this.originalBook.title,
            author: this.originalBook.author,
            category: this.originalBook.category,
            totalCopies: this.originalBook.totalCopies
          };
        }
      });
    }
  }

  submit() {
    if (this.isEdit && this.bookId) {
      const dto: UpdateBookDto = {
        ...this.model,
        availableCopies: this.originalBook?.availableCopies ?? this.model.totalCopies
      };
      this.booksService.updateBook(this.bookId, dto).subscribe({
        next: () => this.router.navigate(['/admin/books']),
        error: err => alert('Update failed')
      });
    } else {
      this.booksService.addBook(this.model).subscribe({
        next: () => this.router.navigate(['/admin/books']),
        error: err => alert('Add failed')
      });
    }
  }
}