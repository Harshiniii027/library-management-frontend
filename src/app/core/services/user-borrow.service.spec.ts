import { TestBed } from '@angular/core/testing';

import { UserBorrowService } from './user-borrow.service';

describe('UserBorrowService', () => {
  let service: UserBorrowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBorrowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
