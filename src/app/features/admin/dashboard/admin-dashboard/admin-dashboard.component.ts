import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  summary: any = { totalUsers: 0, totalBooks: 0, borrowedBooks: 0, returnedBooks: 0 };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:5189/api/AdminDashboard/summary').subscribe((data: any) => {
      this.summary = data;
    });
  }
}