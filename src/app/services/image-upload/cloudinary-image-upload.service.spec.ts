import { TestBed } from '@angular/core/testing';

import { CloudinaryImageUploadService } from './cloudinary-image-upload.service';

describe('CloudinaryImageUploadService', () => {
  let service: CloudinaryImageUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudinaryImageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
