import { TestBed } from '@angular/core/testing';

import { PhoneAccessoryService } from './phone-accessory.service';

describe('PhoneAccessoryService', () => {
  let service: PhoneAccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneAccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
