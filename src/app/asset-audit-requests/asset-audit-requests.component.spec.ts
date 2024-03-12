import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetAuditRequestsComponent } from './asset-audit-requests.component';

describe('AssetAuditRequestsComponent', () => {
  let component: AssetAuditRequestsComponent;
  let fixture: ComponentFixture<AssetAuditRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetAuditRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetAuditRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
