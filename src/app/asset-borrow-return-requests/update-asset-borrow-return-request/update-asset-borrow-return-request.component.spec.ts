import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetBorrowReturnRequestComponent } from './update-asset-borrow-return-request.component';

describe('UpdateAssetBorrowReturnRequestComponent', () => {
  let component: UpdateAssetBorrowReturnRequestComponent;
  let fixture: ComponentFixture<UpdateAssetBorrowReturnRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssetBorrowReturnRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssetBorrowReturnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
