import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegisterComponent } from './features/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';


import { UserDetailComponent } from './features/admin/user-detail/user-detail.component';
import { LoginComponent } from './features/login/login/login.component';
import { AdminDashboardComponent } from './features/admin/dashboard/admin-dashboard/admin-dashboard.component';
import { AdminBooksListComponent } from './features/admin/books/admin-books-list/admin-books-list.component';
import { AdminBookFormComponent } from './features/admin/books/admin-book-form/admin-book-form.component';
import { AdminUsersComponent } from './features/admin/users/admin-users/admin-users.component';
import { AdminBorrowRecordsComponent } from './features/admin/borrow-records/admin-borrow-records/admin-borrow-records.component';
import { UserDashboardComponent } from './features/user/dashboard/user-dashboard/user-dashboard.component';
import { AvailableBooksComponent } from './features/user/available-books/available-books/available-books.component';
import { BorrowHistoryComponent } from './features/user/borrow-history/borrow-history/borrow-history.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin routes
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { expectedRole: 'Admin' },
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'books', component: AdminBooksListComponent },
      { path: 'books/add', component: AdminBookFormComponent },
      { path: 'books/edit/:id', component: AdminBookFormComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: 'users/:id', component: UserDetailComponent },
      { path: 'borrow-records', component: AdminBorrowRecordsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // User routes
  {
    path: 'user',
    canActivate: [AuthGuard],
    data: { expectedRole: 'User' },
    children: [
      { path: 'dashboard', component: UserDashboardComponent },
      { path: 'books', component: AvailableBooksComponent },
      { path: 'history', component: BorrowHistoryComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }