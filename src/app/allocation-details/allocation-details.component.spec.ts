import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationDetailsComponent } from './allocation-details.component';

describe('AllocationDetailsComponent', () => {
  let component: AllocationDetailsComponent;
  let fixture: ComponentFixture<AllocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllocationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
