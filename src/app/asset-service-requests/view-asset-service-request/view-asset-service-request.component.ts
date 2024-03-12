import { Component, OnInit } from '@angular/core';
import { IServiceRequest } from '../../interfaces/iservicerequest';
import { ServiceRequestsService } from '../../services/service-requests/service-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-view-asset-service-request',
    templateUrl: './view-asset-service-request.component.html',
    styleUrl: './view-asset-service-request.component.css'
})
export class ViewAssetServiceRequestComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router, private jwtService: JwtDecryptorService) { }
    request!: IServiceRequest;
    isAdmin = false;


    ngOnInit(): void {
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;

        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data['request'].error && data['request'].error.status == 401) {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Unauthorized Access' });
                    this.router.navigate(['/asset-service-requests']);
                } else if (data['request'].status == 200) {
                    this.request = data['request'].body as IServiceRequest;
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data['request'].error.statusText });
                }
            },
            error: (error) => { console.log("Error: " + error) }
        })
    }
}
