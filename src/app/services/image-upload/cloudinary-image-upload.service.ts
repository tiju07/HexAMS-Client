import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CloudinaryImageUploadService {

    constructor(private http: HttpClient) { }

    cloudName = 'domp5l8sc';
    uploadPreset = 'ml_default';

    uploadImage(image: File) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", this.uploadPreset)

        return this.http.post(`https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload/`, formData);
    }
}
