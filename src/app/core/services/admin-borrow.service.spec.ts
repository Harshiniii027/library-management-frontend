import { TestBed } from '@angular/core/testing';

import { AdminBorrowService } from './admin-borrow.service';

describe('AdminBorrowService', () => {
  let service: AdminBorrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBorrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
