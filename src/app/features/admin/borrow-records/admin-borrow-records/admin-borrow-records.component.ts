import { Component, OnInit } from '@angular/core';
import { AdminBorrowService } from 'src/app/core/services/admin-borrow.service';
import { BorrowRecord } from 'src/app/models/borrow-record.model';

@Component({
  selector: 'app-admin-borrow-records',
  templateUrl: './admin-borrow-records.component.html'
})
export class AdminBorrowRecordsComponent implements OnInit {
  records: BorrowRecord[] = [];

  constructor(private borrowService: AdminBorrowService) {}

  ngOnInit() {
    this.borrowService.getAllBorrowRecords().subscribe(data => this.records = data);
  }
}