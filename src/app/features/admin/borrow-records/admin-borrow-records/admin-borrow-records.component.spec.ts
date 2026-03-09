import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBorrowRecordsComponent } from './admin-borrow-records.component';

describe('AdminBorrowRecordsComponent', () => {
  let component: AdminBorrowRecordsComponent;
  let fixture: ComponentFixture<AdminBorrowRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBorrowRecordsComponent]
    });
    fixture = TestBed.createComponent(AdminBorrowRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
