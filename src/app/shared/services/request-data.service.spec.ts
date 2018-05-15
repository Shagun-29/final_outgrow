import { TestBed, inject } from '@angular/core/testing';

import { RequestDataService } from './request-data.service';

describe('RequestDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestDataService]
    });
  });

  it('should be created', inject([RequestDataService], (service: RequestDataService) => {
    expect(service).toBeTruthy();
  }));
});
