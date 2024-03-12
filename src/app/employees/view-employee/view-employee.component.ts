import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees/employees.service';
import { IEmployee } from '../../interfaces/iemployee';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-view-employee',
    templateUrl: './view-employee.component.html',
    styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {

    constructor(private employeeService: EmployeesService, private activatedRoute: ActivatedRoute, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router, private jwtService: JwtDecryptorService) {
    }
    employee!: IEmployee;
    isAdmin = false;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe({
            next: data => {
                if (data['employee'].status == 200) {
                    this.employee = data['employee'].body as IEmployee;
                }
                else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data['error'] });
                }
            },
            error: error => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: error });
            }
        })
        if (this.jwtService.getRole() == 'Admin') {
            this.isAdmin = true;
        }
    }

    deleteEmployee(id: number) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: "none",
            rejectIcon: "none",
            rejectButtonStyleClass: "p-button-danger",
            accept: () => {
                this.messageService.add({ severity: 'success', key: 'success', summary: 'Successful', detail: 'Employee Deleted Successfully! Redirecting...', life: 2000 });
                this.employeeService.deleteEmployee(id).subscribe(data => {
                    if (data.status == 200) {
                        this.messageService.add({ severity: 'success', key: 'success', summary: 'Successful', detail: 'Employee Deleted Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/employees']), 2000);
                    } else {
                        this.messageService.add({ severity: 'error', key: 'error', summary: 'Error', detail: 'Error Deleting Employee!', life: 3000 });
                    }
                });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', key: 'error', summary: 'Cancelled!', detail: 'Employee Deletion Cancelled!', life: 3000 });
            }
        });
    }
}
