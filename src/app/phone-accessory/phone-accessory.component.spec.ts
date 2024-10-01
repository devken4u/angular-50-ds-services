import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAccessoryComponent } from './phone-accessory.component';

describe('PhoneAccessoryComponent', () => {
  let component: PhoneAccessoryComponent;
  let fixture: ComponentFixture<PhoneAccessoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneAccessoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
