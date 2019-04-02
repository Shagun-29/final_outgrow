import { TestBed, inject } from '@angular/core/testing';

import { GetCalcService } from './get-calc.service';

describe('GetCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCalcService]
    });
  });

  it('should be created', inject([GetCalcService], (service: GetCalcService) => {
    expect(service).toBeTruthy();
  }));
});
