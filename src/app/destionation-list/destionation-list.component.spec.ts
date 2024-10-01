import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestionationListComponent } from './destionation-list.component';

describe('DestionationListComponent', () => {
  let component: DestionationListComponent;
  let fixture: ComponentFixture<DestionationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestionationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestionationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
