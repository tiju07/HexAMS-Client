import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { BorrowReturnRequestsService } from '../../services/borrow-return-requests/borrow-return-requests.service';
import { IAsset } from '../../interfaces/iasset';
import { IBorrowReturnRequest } from '../../interfaces/iborrowreturnrequest';
import { formatDate } from '@angular/common';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-update-asset-borrow-return-request',
    templateUrl: './update-asset-borrow-return-request.component.html',
    styleUrl: './update-asset-borrow-return-request.component.css'
})
export class UpdateAssetBorrowReturnRequestComponent {
    constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router, private assetService: AssetService, private borrowReturnRequestService: BorrowReturnRequestsService, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    assets!: IAsset[];
    requestTypes = ['Borrow', 'Return'];
    statuses = ['Open', 'Servicing', 'Rejected', 'Closed'];
    request!: IBorrowReturnRequest;

    dateRangeValidator = (control: AbstractControl) => {
        const from = control.get('assetAllocationFrom')?.value;
        const to = control.get('assetAllocationTill')?.value;
        return from && to && new Date(to) <= new Date(from) ? { 'dateRange': true } : null;
    }

    form = this.fb.group({
        employeeID: new FormControl(null, [Validators.required]),
        adminID: new FormControl(null, [Validators.required]),
        assetID: new FormControl(null, [Validators.required]),
        assetRequestType: new FormControl('', [Validators.required]),
        assetAllocationFrom: new FormControl('', [Validators.required]),
        assetAllocationTill: new FormControl('', [Validators.required]),
        assetCount: new FormControl(null, [Validators.required, Validators.min(1)]),
        requestDetails: new FormControl(null),
        requestStatus: new FormControl('', [Validators.required])
    }, { validators: this.dateRangeValidator });

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => this.assets = data['assets'] as IAsset[]);
        this.activatedRoute.data.subscribe(
            data => {
                console.log(data);
                this.request = data['request'].body as IBorrowReturnRequest;
                this.form.patchValue(this.request as any);
                if (this.request.assetAllocationFrom) {
                    this.form.patchValue({
                        assetAllocationFrom: formatDate(this.request.assetAllocationFrom as Date, "yyyy-MM-dd", "en")
                    });
                } else {
                    this.form.patchValue({
                        assetAllocationFrom: ''
                    });
                }

                if (this.request.assetAllocationTill) {
                    this.form.patchValue({
                        assetAllocationTill: formatDate(this.request.assetAllocationTill as Date, "yyyy-MM-dd", "en")
                    });
                } else {
                    this.form.patchValue({
                        assetAllocationTill: ''
                    });
                }
            }
        );
    }

    validateDateRange() {
        return this.form.hasError('dateRange');
    }

    updateRequest() {
        if (!this.form.valid) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please fill in all required fields.' });
        } else {
            const formValue = this.form.getRawValue();
            const updateParam = {
                requestID: this.request.requestID,
                ...formValue,
                assetAllocationFrom: formValue.assetAllocationFrom ? new Date(formValue.assetAllocationFrom) : null,
                assetAllocationTill: formValue.assetAllocationTill ? new Date(formValue.assetAllocationTill) : null
            };
            this.borrowReturnRequestService.updateBorrowReturnRequest(this.activatedRoute.snapshot.params['id'], updateParam).subscribe({
                next: data => {
                    if (data.status == 204) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Request Update Successful! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/asset-borrow-return-requests', 'view', this.request.requestID]), 1500);
                    } else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Request!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Request!' });
                }
            })
        }
    }
}
