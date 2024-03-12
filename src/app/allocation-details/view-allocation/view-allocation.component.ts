import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllocationDetailsService } from '../../services/allocation-details/allocation-details.service';
import { IAllocation } from '../../interfaces/iallocationdetails';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-view-allocation',
    templateUrl: './view-allocation.component.html',
    styleUrl: './view-allocation.component.css'
})
export class ViewAllocationComponent implements OnInit {

    constructor(private http: HttpClient, private allocationService: AllocationDetailsService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private router: Router) { }

    allocation!: IAllocation;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe({
            next: (data) => {
                if (data['allocation'].error && data['allocation'].error.status == 401) {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Unauthorized Access' });
                    this.router.navigate(['/allocation-details']);
                } else if (data['allocation'].status == 200) {
                    this.allocation = data['allocation'].body as IAllocation;
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data['allocation'].error.statusText });
                }
            },
            error: (error) => { console.log("Error: " + error) }
        });

    }
}
