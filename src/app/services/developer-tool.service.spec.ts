import { TestBed } from '@angular/core/testing';

import { DeveloperToolService } from './developer-tool.service';

describe('DeveloperToolService', () => {
  let service: DeveloperToolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeveloperToolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
