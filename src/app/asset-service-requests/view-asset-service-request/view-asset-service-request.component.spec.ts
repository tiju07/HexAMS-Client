import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetServiceRequestComponent } from './view-asset-service-request.component';

describe('ViewAssetServiceRequestComponent', () => {
  let component: ViewAssetServiceRequestComponent;
  let fixture: ComponentFixture<ViewAssetServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAssetServiceRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssetServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
