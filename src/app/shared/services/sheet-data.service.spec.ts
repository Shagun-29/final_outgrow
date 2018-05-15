import { TestBed, inject } from '@angular/core/testing';

import { SheetDataService } from './sheet-data.service';

describe('SheetDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetDataService]
    });
  });

  it('should be created', inject([SheetDataService], (service: SheetDataService) => {
    expect(service).toBeTruthy();
  }));
});
