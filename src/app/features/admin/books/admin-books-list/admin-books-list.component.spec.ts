import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksListComponent } from './admin-books-list.component';

describe('AdminBooksListComponent', () => {
  let component: AdminBooksListComponent;
  let fixture: ComponentFixture<AdminBooksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBooksListComponent]
    });
    fixture = TestBed.createComponent(AdminBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
