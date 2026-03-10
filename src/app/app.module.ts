import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './features/login/login/login.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminBooksListComponent } from './features/admin/books/admin-books-list/admin-books-list.component';
import { AdminBookFormComponent } from './features/admin/books/admin-book-form/admin-book-form.component';
import { AdminUsersComponent } from './features/admin/users/admin-users/admin-users.component';
import { AdminBorrowRecordsComponent } from './features/admin/borrow-records/admin-borrow-records/admin-borrow-records.component';
import { UserDashboardComponent } from './features/user/dashboard/user-dashboard/user-dashboard.component';
import { AvailableBooksComponent } from './features/user/available-books/available-books/available-books.component';
import { BorrowHistoryComponent } from './features/user/borrow-history/borrow-history/borrow-history.component';
import { FormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { UserDetailComponent } from './features/admin/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminBooksListComponent,
    AdminBookFormComponent,
    AdminUsersComponent,
    AdminBorrowRecordsComponent,
    UserDashboardComponent,
    AvailableBooksComponent,
    BorrowHistoryComponent,
    HomeComponent,
    RegisterComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
