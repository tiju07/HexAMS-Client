import { Component } from '@angular/core';
import { ServiceRequestsService } from '../../services/service-requests/service-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { MessageService } from 'primeng/api';
import { IAsset } from '../../interfaces/iasset';
import { IServiceRequest } from '../../interfaces/iservicerequest';

@Component({
    selector: 'app-update-asset-service-request',
    templateUrl: './update-asset-service-request.component.html',
    styleUrl: './update-asset-service-request.component.css'
})
export class UpdateAssetServiceRequestComponent {

    constructor(private serviceRequestService: ServiceRequestsService, private router: Router, private fb: FormBuilder, private assetService: AssetService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }

    assets!: IAsset[];
    issueTypes = ['Malfunction', 'Repair'];
    statuses = ['Open', 'Servicing', 'Rejected', 'Closed']

    form = this.fb.group({
        requestID: new FormControl(null),
        employeeID: new FormControl(null),
        assetID: new FormControl(null, [Validators.required]),
        issueType: new FormControl('', [Validators.required]),
        requestDetails: new FormControl(''),
        requestStatus: new FormControl('', [Validators.required])
    })

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => this.assets = data['assets'] as IAsset[]);
        this.activatedRoute.data.subscribe((data) => {
            console.log(data)
            this.form.patchValue(data['request'].body as any);
        })
    }

    updateRequest() {
        if (!this.form.valid) {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the required fields' });
            return;
        }
        this.serviceRequestService.updateServiceRequest(this.activatedRoute.snapshot.params['id'], this.form.getRawValue()).subscribe({
            next: (data) => {
                if (data.status == 204) {
                    this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Request Updated Successfully! Redirecting...', life: 2000 });
                    setTimeout(() => this.router.navigate(['/asset-service-requests', 'view', this.activatedRoute.snapshot.params['id']]), 1500);
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Request!' });
                }
            },
            error: (err) => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Request!' });
            }
        })
    }
}
