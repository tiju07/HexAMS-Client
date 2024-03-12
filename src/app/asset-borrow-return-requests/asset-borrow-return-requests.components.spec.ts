import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBorrowReturnRequestsComponent } from './asset-borrow-return-requests.component';

describe('AssetBorrowReturnRequestComponent', () => {
    let component: AssetBorrowReturnRequestsComponent;
    let fixture: ComponentFixture<AssetBorrowReturnRequestsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AssetBorrowReturnRequestsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AssetBorrowReturnRequestsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
