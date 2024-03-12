import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetBorrowReturnRequestComponent } from './create-asset-borrow-return-request.component';

describe('CreateAssetBorrowReturnRequestComponent', () => {
  let component: CreateAssetBorrowReturnRequestComponent;
  let fixture: ComponentFixture<CreateAssetBorrowReturnRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAssetBorrowReturnRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssetBorrowReturnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
