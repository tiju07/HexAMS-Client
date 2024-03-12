import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AllocationDetailsService } from '../../services/allocation-details/allocation-details.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees/employees.service';
import { IEmployee } from '../../interfaces/iemployee';
import { IAsset } from '../../interfaces/iasset';
import { AssetService } from '../../services/asset-catalogue/asset.service';

@Component({
    selector: 'app-create-allocation',
    templateUrl: './create-allocation.component.html',
    styleUrl: './create-allocation.component.css',
    providers: [MessageService]
})
export class CreateAllocationComponent implements OnInit {

    constructor(private fb: FormBuilder, private allocationService: AllocationDetailsService, private messageService: MessageService, private router: Router, private employeeService: EmployeesService, private assetService: AssetService, private activatedRoute: ActivatedRoute) { }

    statuses = ['Allocated', 'Deallocated'];
    employees!: IEmployee[];
    assets!: IAsset[];

    form = this.fb.group({
        employeeID: new FormControl(null, [Validators.required]),
        assetID: new FormControl(null, [Validators.required]),
        assetCount: new FormControl(null, [Validators.required, Validators.min(1)]),
        allocationDetails: new FormControl(null),
        assetAllocatedFrom: new FormControl(null, [Validators.required]),
        assetAllocatedTill: new FormControl(null, [Validators.required]),
        allocationStatus: new FormControl('', [Validators.required])
    }, { validators: dateRangeValidator })

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.employees = data['employees'].body as IEmployee[];
        })
        this.activatedRoute.data.subscribe(data => {
            console.log(data);
            this.assets = data['assets'] as IAsset[];
        })
    }

    validateDateRange() {
        return this.form.get('assetAllocatedTill')?.dirty && this.form.get('assetAllocatedTill')?.dirty &&
            this.form.hasError('dateRange');
    }

    createAllocation() {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!', life: 4000 });
        } else {
            this.allocationService.createAllocation({ assetAllocationID: 0, ...this.form.getRawValue() }).subscribe({
                next: data => {
                    if (data.status == 200) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Allocation Creation Successful! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/allocation-details']), 2000);
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Allocation!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Allocation!' });
                }
            })
        }
    }
}

export const dateRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const from = control.get('assetAllocatedFrom');
    const to = control.get('assetAllocatedTill');
    return from && to && new Date(to.value) <= new Date(from.value) ? { dateRange: true } : null;
};

