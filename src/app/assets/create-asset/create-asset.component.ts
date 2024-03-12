import { Component, ElementRef, ViewChild } from '@angular/core';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ICategory } from '../../interfaces/icategory';
import { CategoriesService } from '../../services/categories/categories.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ICloudinaryUploadResponse } from '../../interfaces/iclodinaryuploadresponse';
import { CloudinaryImageUploadService } from '../../services/image-upload/cloudinary-image-upload.service';

@Component({
    selector: 'app-create-asset',
    templateUrl: './create-asset.component.html',
    styleUrl: './create-asset.component.css',
    providers: [MessageService]
})
export class CreateAssetComponent {

    constructor(private assetService: AssetService, private categoryService: CategoriesService, private fb: FormBuilder, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute, private cloudinaryService: CloudinaryImageUploadService) { }

    categories!: ICategory[]
    image!: File | null;
    touched = false;
    @ViewChild('imageInput') fileInput!: ElementRef;

    form = this.fb.group({
        assetName: new FormControl('', [Validators.required]),
        assetCategoryID: new FormControl(null, [Validators.required]),
        assetModel: new FormControl(''),
        assetSpecifications: new FormControl(''),
        assetImageURL: [File, [Validators.required]],
        assetImageFilename: [''],
        assetDescription: new FormControl(''),
        assetStatus: new FormControl('', [Validators.required]),
        manufacturingDate: new FormControl(null),
        expiryDate: new FormControl(null),
        assetValue: new FormControl(null, [Validators.required, Validators.min(1)]),
    }, { validators: dateRangeValidator })

    validator(control: string) {
        return this.form.get(control)?.hasError('required') && this.form.get(control)?.touched;
    }

    validateDateRange() {
        return this.form.get('manufacturingDate')?.dirty && this.form.get('expiryDate')?.dirty &&
            this.form.hasError('dateRange');
    }

    minManufacturingDateValidator() {
        const value = this.form.get('manufacturingDate')?.value;
        if (value != null && value != "") {
            return new Date() < new Date(value)
        }
        return false;
    }

    toggleTouched() {
        this.touched = true;
    }

    resetFileInput() {
        this.fileInput.nativeElement.value = null;
        this.image = null;
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => this.categories = data['categories']);
    }


    onFileChange(event: Event) {
        this.image = (event.target as HTMLInputElement).files![0];
        if (this.image.type != "image/png" && this.image.type != "image/jpg" && this.image.type != "image/jpeg" && this.image.type != "image/webp") {
            this.image = null;
            this.fileInput.nativeElement.value = null;
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Invalid File Type! Please use any of the following formats for images: png, jpg or jpeg.' });
            return;
        }
        console.log("File: " + this.image.name);
    }

    createAsset(formData: any) {
        this.assetService.createAsset(formData).subscribe({
            next: data => {
                if (data.status == 200) {
                    this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Asset Creation Successful! Redirecting...', life: 2000 });
                    setTimeout(() => {
                        this.router.navigate(['/assets', 'view', data['body'].assetID])
                    }, 2000)
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Asset!' });
                }
            },
            error: err => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Asset!' });
            }
        });
    }

    onSubmit() {
        if (!this.form.valid || this.image == null) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!', life: 4000 });
            return;
        }
        var formData = {
            assetID: 0,
            assetName: this.form.get('assetName')!.value,
            assetCategoryID: this.form.get('assetCategoryID')!.value,
            assetModel: this.form.get('assetModel')!.value,
            assetSpecifications: this.form.get('assetSpecifications')!.value,
            assetImageURL: '',
            assetImageFilename: '',
            assetDescription: this.form.get('assetDescription')!.value,
            assetStatus: this.form.get('assetStatus')!.value,
            manufacturingDate: this.form.get('manufacturingDate')!.value != "" ? this.form.get('manufacturingDate')!.value : null,
            expiryDate: this.form.get('expiryDate')!.value != "" ? this.form.get('expiryDate')!.value : null,
            assetValue: this.form.get('assetValue')!.value,
        };
        this.cloudinaryService.uploadImage(this.image).subscribe({
            next: (data) => {
                const d = data as ICloudinaryUploadResponse
                formData = { ...formData, assetImageURL: d.url, assetImageFilename: d.original_filename };
                console.log(formData);
                console.log(d.url, d.original_filename);
                this.createAsset(formData);
            },
            error: err => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Error Uploading Image!', life: 1500 });
                console.log(err);
                return;
            }
        })
    }
}

export const dateRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const from = control.get('manufacturingDate');
    const to = control.get('expiryDate');
    return from && to && from?.value != null && to?.value != null && new Date(to.value) <= new Date(from.value) ? { dateRange: true } : null;
};