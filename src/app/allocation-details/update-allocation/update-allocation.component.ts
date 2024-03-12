import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AllocationDetailsService } from '../../services/allocation-details/allocation-details.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { IEmployee } from '../../interfaces/iemployee';
import { IAsset } from '../../interfaces/iasset';
import { dateRangeValidator } from '../create-allocation/create-allocation.component';
import { IAllocation } from '../../interfaces/iallocationdetails';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-update-allocation',
    templateUrl: './update-allocation.component.html',
    styleUrl: './update-allocation.component.css',
    providers: [MessageService]
})
export class UpdateAllocationComponent {

    constructor(private fb: FormBuilder, private allocationService: AllocationDetailsService, private messageService: MessageService, private router: Router, private employeeService: EmployeesService, private assetService: AssetService, private activatedRoute: ActivatedRoute) { }

    statuses = ['Allocated', 'Deallocated'];
    employees!: IEmployee[];
    assets!: IAsset[];
    allocationDetail!: IAllocation;

    form = this.fb.group({
        employeeID: new FormControl(null, [Validators.required]),
        assetID: new FormControl(null, [Validators.required]),
        assetCount: new FormControl(null, [Validators.required, Validators.min(1)]),
        allocationDetails: new FormControl(null),
        assetAllocatedFrom: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en"), [Validators.required]),
        assetAllocatedTill: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en"), [Validators.required]),
        allocationStatus: new FormControl('', [Validators.required])
    }, { validators: dateRangeValidator })

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.employees = data['employees'].body as IEmployee[];
        })
        this.activatedRoute.data.subscribe(data => {
            this.assets = data['assets'] as IAsset[];
        })
        this.activatedRoute.data.subscribe({
            next: (data) => {
                this.allocationDetail = data['allocation'].body as IAllocation;
                this.form.patchValue(this.allocationDetail as any);
                if (this.allocationDetail.assetAllocatedFrom) {
                    this.form.patchValue({
                        assetAllocatedFrom: formatDate(this.allocationDetail.assetAllocatedFrom as Date, "yyyy-MM-dd", "en")
                    });
                } else {
                    this.form.patchValue({
                        assetAllocatedFrom: ''
                    });
                }

                if (this.allocationDetail.assetAllocatedTill) {
                    this.form.patchValue({
                        assetAllocatedTill: formatDate(this.allocationDetail.assetAllocatedTill as Date, "yyyy-MM-dd", "en")
                    });
                } else {
                    this.form.patchValue({
                        assetAllocatedTill: ''
                    });
                }

            },
            error: (error) => { console.log("Error: " + error) }
        });
    }

    validateDateRange() {
        return this.form.get('assetAllocatedTill')?.dirty && this.form.get('assetAllocatedTill')?.dirty &&
            this.form.hasError('dateRange');
    }

    updateAllocation() {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!', life: 4000 });
        }
        else {
            const formValue = this.form.getRawValue();
            const updateParam = {
                assetAllocationID: this.allocationDetail.assetAllocationID,
                ...formValue,
                assetAllocatedFrom: formValue.assetAllocatedFrom ? new Date(formValue.assetAllocatedFrom) : null,
                assetAllocatedTill: formValue.assetAllocatedTill ? new Date(formValue.assetAllocatedTill) : null
            };
            this.allocationService.updateAllocation(this.allocationDetail.assetAllocationID, updateParam).subscribe({
                next: data => {
                    if (data.status == 200) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Allocation Update Successful! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/allocation-details']), 2000);
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Allocation!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Allocation!' });
                }
            })
        }
    }
}
