import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssetComponent } from './delete-asset.component';

describe('DeleteAssetComponent', () => {
  let component: DeleteAssetComponent;
  let fixture: ComponentFixture<DeleteAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAssetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
