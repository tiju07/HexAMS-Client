import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditRequestsService } from '../../services/audit-requests/audit-requests.service';
import { IAuditRequest } from '../../interfaces/iauditrequest';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-view-asset-audit-request',
    templateUrl: './view-asset-audit-request.component.html',
    styleUrl: './view-asset-audit-request.component.css'
})
export class ViewAssetAuditRequestComponent implements OnInit {

    constructor(private auditRequestService: AuditRequestsService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router) { }

    request!: IAuditRequest;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data['request'].error && data['request'].error.status == 401) {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Unauthorized Access' });
                    this.router.navigate(['/asset-audit-requests']);
                } else if (data['request'].status == 200) {
                    this.request = data['request'].body as any as IAuditRequest;
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data['request'].error.statusText });
                }
            },
            error: (error) => { console.log("Error: " + error) }
        })
    }
}
