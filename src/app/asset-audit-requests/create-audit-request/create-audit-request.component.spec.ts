import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuditRequestComponent } from './create-audit-request.component';

describe('CreateAuditRequestComponent', () => {
  let component: CreateAuditRequestComponent;
  let fixture: ComponentFixture<CreateAuditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAuditRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAuditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
