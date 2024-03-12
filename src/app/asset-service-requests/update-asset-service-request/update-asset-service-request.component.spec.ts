import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssetServiceRequestComponent } from './update-asset-service-request.component';

describe('UpdateAssetServiceRequestComponent', () => {
  let component: UpdateAssetServiceRequestComponent;
  let fixture: ComponentFixture<UpdateAssetServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAssetServiceRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAssetServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
