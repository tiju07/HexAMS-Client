import { Component, OnInit } from '@angular/core';
import { IBorrowReturnRequest } from '../interfaces/iborrowreturnrequest';
import { BorrowReturnRequestsService } from '../services/borrow-return-requests/borrow-return-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Column } from '../interfaces/column';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';


@Component({
    selector: 'app-asset-borrow-return-requests',
    templateUrl: './asset-borrow-return-requests.component.html',
    styleUrl: './asset-borrow-return-requests.component.css'
})
export class AssetBorrowReturnRequestsComponent implements OnInit {
    constructor(private borrowReturnRequestService: BorrowReturnRequestsService, private router: Router, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    requests!: IBorrowReturnRequest[];
    cols!: Column[];
    selectedRequest!: IBorrowReturnRequest;
    isAdmin = false;

    ngOnInit(): void {
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
        this.activatedRoute.data.subscribe((data) => {
            this.requests = data['requests'] as IBorrowReturnRequest[];
        })
        this.cols = [
            { field: 'requestID', header: 'Request ID' },
            { field: 'employeeID', header: 'Employee ID' },
            { field: 'adminID', header: 'Admin ID' },
            { field: 'assetID', header: 'Asset ID' },
            { field: 'assetRequestType', header: 'Asset Request Type' },
            { field: 'assetAllocationFrom', header: 'Asset Allocation From' },
            { field: 'assetAllocationTill', header: 'Asset Allocation Till' },
            { field: 'assetCount', header: 'Asset Count' },
            { field: 'requestDetails', header: 'Request Details' },
            { field: 'requestStatus', header: 'Request Status' },
        ]
    }

    onRowSelect() {
        this.router.navigate(['/asset-borrow-return-requests', 'view', this.selectedRequest.requestID]);
    }
}
