import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { MessageService } from 'primeng/api';
import { IAsset } from '../../interfaces/iasset';
import { AuditRequestsService } from '../../services/audit-requests/audit-requests.service';
import { IEmployee } from '../../interfaces/iemployee';
import { EmployeesService } from '../../services/employees/employees.service';

@Component({
    selector: 'app-create-audit-request',
    templateUrl: './create-audit-request.component.html',
    styleUrl: './create-audit-request.component.css'
})
export class CreateAuditRequestComponent implements OnInit {
    constructor(private auditRequestService: AuditRequestsService, private router: Router, private fb: FormBuilder, private assetService: AssetService, private messageService: MessageService, private employeeService: EmployeesService, private activatedRoute: ActivatedRoute) { }

    assets!: IAsset[]
    employees!: IEmployee[];

    form = this.fb.group({
        requestID: new FormControl(0),
        employeeID: new FormControl(null, [Validators.required]),
        assetID: new FormControl(null, [Validators.required]),
        requestDetails: new FormControl(''),
        requestStatus: new FormControl('Pending')
    })

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.assets = data['assets'] as IAsset[]
        })
        this.activatedRoute.data.subscribe(data => {
            this.employees = data['employees'].body as IEmployee[]
        })
        if (!isNaN(this.activatedRoute.snapshot.params['employeeID'])) {
            this.form.patchValue({
                employeeID: this.activatedRoute.snapshot.params['employeeID']
            })
        }
    }

    createRequest() {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the required fields' })
            return;
        }
        else {
            this.auditRequestService.createAuditRequest(this.form.getRawValue()).subscribe({
                next: data => {
                    if (data.status == 200) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Request Created Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/asset-audit-requests', 'view', data['body'].requestID]), 2000);
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Request!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Request!' });
                }
            })
        }
    }
}
