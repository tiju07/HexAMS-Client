import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssetAuditRequestComponent } from './view-asset-audit-request.component';

describe('ViewAssetAuditRequestComponent', () => {
  let component: ViewAssetAuditRequestComponent;
  let fixture: ComponentFixture<ViewAssetAuditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAssetAuditRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssetAuditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
