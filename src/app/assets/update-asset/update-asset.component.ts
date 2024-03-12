import { Component, ElementRef, ViewChild } from '@angular/core';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { CategoriesService } from '../../services/categories/categories.service';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';
import { IAsset } from '../../interfaces/iasset';
import { formatDate } from '@angular/common';
import { CloudinaryImageUploadService } from '../../services/image-upload/cloudinary-image-upload.service';
import { ICloudinaryUploadResponse } from '../../interfaces/iclodinaryuploadresponse';
import { dateRangeValidator } from '../create-asset/create-asset.component';

declare var bootstrap: any;

@Component({
    selector: 'app-update-asset',
    templateUrl: './update-asset.component.html',
    styleUrl: './update-asset.component.css',
    providers: [MessageService]
})
export class UpdateAssetComponent {

    constructor(private assetService: AssetService, private categoryService: CategoriesService, private fb: FormBuilder, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute, private cloudinarySerice: CloudinaryImageUploadService) { }

    categories!: ICategory[]
    asset!: IAsset;
    image!: File | null;
    statuses = ['Available', 'Unavailable']
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
        assetStatus: new FormControl(null, [Validators.required]),
        manufacturingDate: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
        expiryDate: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en")),
        assetValue: new FormControl(null, [Validators.required, Validators.min(1)]),
    }, { validators: dateRangeValidator })

    validator(control: string) {
        return this.form.get(control)?.hasError('required') && this.form.get(control)?.touched;
    }

    minManufacturingDateValidator() {
        const value = this.form.get('manufacturingDate')?.value;
        if (value != null && value != "") {
            return new Date() < new Date(value)
        }
        return false;
    }

    validateDateRange() {
        return this.form.get('manufacturingDate')?.dirty && this.form.get('expiryDate')?.dirty &&
            this.form.hasError('dateRange');
    }

    toggleTouched() {
        this.touched = true;
    }

    resetFileInput() {
        this.fileInput.nativeElement.value = null;
        this.image = null;
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

    ngOnInit(): void {
        const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'focus'
        }));
        this.activatedRoute.data.subscribe(data => {
            this.asset = data['asset'] as IAsset;
            this.form.patchValue(this.asset as any);
            if (this.asset.manufacturingDate) {
                this.form.patchValue({
                    manufacturingDate: formatDate(this.asset.manufacturingDate as Date, "yyyy-MM-dd", "en")
                });
            } else {
                this.form.patchValue({
                    manufacturingDate: ''
                });
            }

            if (this.asset.expiryDate) {
                this.form.patchValue({
                    expiryDate: formatDate(this.asset.expiryDate as Date, "yyyy-MM-dd", "en")
                });
            } else {
                this.form.patchValue({
                    expiryDate: ''
                });
            }
        });

        this.activatedRoute.data.subscribe(data => this.categories = data['categories'] as ICategory[]);
    }

    updateAsset(formData: any) {
        const manufacturingDate = this.form.get('manufacturingDate')?.value;
        const expiryDate = this.form.get('expiryDate')?.value;
        const updateParam = {
            assetID: this.asset.assetID,
            ...formData,
            manufacturingDate: manufacturingDate ? new Date(manufacturingDate) : null,
            expiryDate: expiryDate ? new Date(expiryDate) : null
        };
        console.log("Updated Params: " + updateParam)
        this.assetService.updateAsset(parseInt(this.activatedRoute?.snapshot.params['id']), updateParam).subscribe({
            next: data => {
                if (data.status == 204) {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Asset Update Successful! Redirecting...', life: 2000 })
                    this.router.navigate(['/assets', 'view', this.asset.assetID]);
                } else {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed Updating Asset!' })
                }
            },
            error: err => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed Updating Asset!' })
                console.log(err);
            }
        })
    }

    onSubmit() {
        if (this.form.invalid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!', life: 4000 })
            return;
        }
        var formData = {
            assetID: this.asset.assetID,
            assetName: this.form.get('assetName')!.value,
            assetCategoryID: this.form.get('assetCategoryID')!.value,
            assetModel: this.form.get('assetModel')!.value,
            assetSpecifications: this.form.get('assetSpecifications')!.value,
            assetImageURL: this.asset.assetImageURL,
            assetImageFilename: this.asset.assetImageFilename,
            assetDescription: this.form.get('assetDescription')!.value,
            assetStatus: this.form.get('assetStatus')!.value,
            manufacturingDate: this.form.get('manufacturingDate')!.value,
            expiryDate: this.form.get('expiryDate')!.value,
            assetValue: this.form.get('assetValue')!.value,
        };
        if (this.image != null) {
            this.cloudinarySerice.uploadImage(this.image).subscribe({
                next: (data) => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Success!', life: 1500 });
                    const d = data as ICloudinaryUploadResponse
                    formData = { ...formData, assetImageURL: d.url, assetImageFilename: d.original_filename };
                    console.log("FormData: " + formData);
                    this.updateAsset(formData);
                },
                error: err => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error!', life: 1500 });
                    console.log(err);
                    return;
                }
            })
        } else {
            this.updateAsset(formData);
        }

    }
}
