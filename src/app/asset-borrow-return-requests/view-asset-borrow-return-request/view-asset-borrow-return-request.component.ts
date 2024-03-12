import { Component, OnInit } from '@angular/core';
import { BorrowReturnRequestsService } from '../../services/borrow-return-requests/borrow-return-requests.service';
import { IBorrowReturnRequest } from '../../interfaces/iborrowreturnrequest';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-view-asset-borrow-return-request',
    templateUrl: './view-asset-borrow-return-request.component.html',
    styleUrl: './view-asset-borrow-return-request.component.css'
})
export class ViewAssetBorrowReturnRequestComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router, private jwtService: JwtDecryptorService) { }

    request!: IBorrowReturnRequest;
    isAdmin = false;

    ngOnInit(): void {
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data['request'].error && data['request'].error.status == 401) {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Unauthorized Access' });
                    this.router.navigate(['/asset-borrow-return-requests']);
                } else if (data['request'].status == 200) {
                    this.request = data['request'].body as IBorrowReturnRequest;
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data['request'].error.statusText });
                }
            },
            error: (error) => { console.log("Error: " + error) }
        });
    }
}
