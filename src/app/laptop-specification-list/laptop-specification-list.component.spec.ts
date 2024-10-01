import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSpecificationListComponent } from './laptop-specification-list.component';

describe('LaptopSpecificationListComponent', () => {
  let component: LaptopSpecificationListComponent;
  let fixture: ComponentFixture<LaptopSpecificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopSpecificationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopSpecificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
