import { TestBed } from '@angular/core/testing';

import { SearchMockDataService } from './search-mock-data.service';

describe('SearchMockDataService', () => {
  let service: SearchMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
