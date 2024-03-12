import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuditRequestComponent } from './update-audit-request.component';

describe('UpdateAuditRequestComponent', () => {
  let component: UpdateAuditRequestComponent;
  let fixture: ComponentFixture<UpdateAuditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAuditRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAuditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
