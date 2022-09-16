import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import Book from './entity/book';

describe('UserService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
