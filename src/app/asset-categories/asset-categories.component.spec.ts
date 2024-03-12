import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetCategoriesComponent } from './asset-categories.component';

describe('AssetCategoriesComponent', () => {
  let component: AssetCategoriesComponent;
  let fixture: ComponentFixture<AssetCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
