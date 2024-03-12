import { Component, OnInit } from '@angular/core';
import { IAllocation } from '../interfaces/iallocationdetails';
import { AllocationDetailsService } from '../services/allocation-details/allocation-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'app-allocation-details',
    templateUrl: './allocation-details.component.html',
    styleUrl: './allocation-details.component.css'
})
export class AllocationDetailsComponent implements OnInit {

    constructor(private allocationService: AllocationDetailsService, private router: Router, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    allocationDetails!: IAllocation[];
    cols!: Column[];
    selectedAllocation!: IAllocation;
    isAdmin = false;

    ngOnInit(): void {
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
        if (!isNaN(this.activatedRoute.snapshot.params['employeeID'])) {
            this.activatedRoute.data.subscribe(data => {
                console.log(data['allocations'].body as IAllocation[]);
                this.allocationDetails = data['allocations'].body as IAllocation[];
            })
        } else {
            this.activatedRoute.data.subscribe(data => {
                this.allocationDetails = data['allocations'] as IAllocation[];
            })
        }
        this.cols = [
            { field: 'assetAllocationID', header: 'Allocation ID' },
            { field: 'employeeID', header: 'Employee ID' },
            { field: 'assetID', header: 'Asset ID' },
            { field: 'assetCount', header: 'Asset Count' },
            { field: 'allocationDetails', header: 'Allocation Details' },
            { field: 'assetAllocatedFrom', header: 'Allocated From' },
            { field: 'assetAllocatedTill', header: 'Allocated Till' },
            { field: 'allocationStatus', header: 'Allocation Status' }
        ]
    }

    onRowSelect() {
        this.router.navigate(['/allocation-details', 'view', this.selectedAllocation.assetAllocationID]);
    }
}
