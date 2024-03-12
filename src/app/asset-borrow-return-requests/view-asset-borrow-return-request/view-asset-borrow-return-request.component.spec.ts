import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetBorrowReturnRequestComponent } from './view-asset-borrow-return-request.component';

describe('ViewAssetBorrowReturnRequestComponent', () => {
  let component: ViewAssetBorrowReturnRequestComponent;
  let fixture: ComponentFixture<ViewAssetBorrowReturnRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAssetBorrowReturnRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssetBorrowReturnRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
