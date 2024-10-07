import { TestBed } from '@angular/core/testing';

import { LaptopSpecificationService } from './laptop-specification.service';

describe('LaptopSpecificationService', () => {
  let service: LaptopSpecificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaptopSpecificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
