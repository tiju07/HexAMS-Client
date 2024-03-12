import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetServiceRequestComponent } from './create-asset-service-request.component';

describe('CreateAssetServiceRequestComponent', () => {
  let component: CreateAssetServiceRequestComponent;
  let fixture: ComponentFixture<CreateAssetServiceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAssetServiceRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssetServiceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
