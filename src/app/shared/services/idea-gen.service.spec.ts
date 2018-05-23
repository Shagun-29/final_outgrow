import { TestBed, inject } from '@angular/core/testing';

import { IdeaGenService } from './idea-gen.service';

describe('IdeaGenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdeaGenService]
    });
  });

  it('should be created', inject([IdeaGenService], (service: IdeaGenService) => {
    expect(service).toBeTruthy();
  }));
});
