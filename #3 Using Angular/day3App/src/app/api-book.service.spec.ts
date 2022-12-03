import { TestBed } from '@angular/core/testing';

import { ApiBookService } from './api-book.service';

describe('ApiBookService', () => {
  let service: ApiBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
