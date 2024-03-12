import { Component } from '@angular/core';
import { AuditRequestsService } from '../../services/audit-requests/audit-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { MessageService } from 'primeng/api';
import { EmployeesService } from '../../services/employees/employees.service';
import { IAsset } from '../../interfaces/iasset';
import { IEmployee } from '../../interfaces/iemployee';
import { IAuditRequest } from '../../interfaces/iauditrequest';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';


@Component({
    selector: 'app-update-audit-request',
    templateUrl: './update-audit-request.component.html',
    styleUrl: './update-audit-request.component.css'
})
export class UpdateAuditRequestComponent {
    constructor(private auditRequestService: AuditRequestsService, private router: Router, private fb: FormBuilder, private assetService: AssetService, private messageService: MessageService, private employeeService: EmployeesService, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    assets!: IAsset[]
    statuses = ['Pending', 'Verified', 'Rejected'];
    isEmployee = false;

    form = this.fb.group({
        requestID: new FormControl(0),
        employeeID: new FormControl(null, [Validators.required]),
        assetID: new FormControl(null, [Validators.required]),
        requestDetails: new FormControl(''),
        requestStatus: new FormControl('', [Validators.required])
    })

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.assets = data['assets'] as IAsset[]
        })
        this.activatedRoute.data.subscribe({
            next: (data) => {
                this.form.patchValue(data['request'].body as any)
            }
        })
        if (this.jwtService.getRole() == "Employee") this.isEmployee = true;
        this.form.get('employeeID')?.disable();
    }

    updateRequest() {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill in all required fields' });
            return;
        }
        else {
            const requestID = this.activatedRoute.snapshot.params['id'];
            this.auditRequestService.updateAuditRequest(requestID, this.form.getRawValue()).subscribe({
                next: data => {
                    if (data.status == 204) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Request Updated Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/asset-audit-requests', 'view', requestID]), 1500);
                    }
                    else {
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
