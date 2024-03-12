import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetServiceRequestsComponent } from './asset-service-requests.component';

describe('AssetServiceRequestsComponent', () => {
  let component: AssetServiceRequestsComponent;
  let fixture: ComponentFixture<AssetServiceRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetServiceRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetServiceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
