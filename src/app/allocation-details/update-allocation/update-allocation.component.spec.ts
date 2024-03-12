import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAllocationComponent } from './update-allocation.component';

describe('UpdateAllocationComponent', () => {
  let component: UpdateAllocationComponent;
  let fixture: ComponentFixture<UpdateAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAllocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
