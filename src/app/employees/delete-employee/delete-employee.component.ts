import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError } from 'rxjs';

@Component({
    selector: 'app-delete-employee',
    templateUrl: './delete-employee.component.html',
    styleUrl: './delete-employee.component.css',
    providers: [MessageService]
})
export class DeleteEmployeeComponent implements OnInit {
    constructor(private employeeService: EmployeesService, private route: ActivatedRoute, private messageService: MessageService, private router: Router) {
    }

    temp: any;
    employee!: any;

    ngOnInit(): void {
        this.employeeService.getEmployeeByID(parseInt(this.route.snapshot.params['id']!))
            .subscribe(data => {
                this.employee = data
            })
        console.log(this.employee);
    }

    deleteEmployee() {
        this.employeeService.deleteEmployee(parseInt(this.route.snapshot.params['id']!))
            .subscribe(response => {
                if (response.status == 200) {
                    this.messageService.add({ severity: "success", summary: "Successful", detail: "Employee Deleted Successfully!" });
                    setTimeout(() => (this.router.navigate(['/employees'])), 2000);
                }
                else {
                    this.messageService.add({ severity: "error", summary: "Error", detail: "Failed Deleting Employee!" });
                }
            },
                error => {
                    this.messageService.add({ severity: "error", summary: "Error", detail: "Failed Deleting Employee!" });
                    console.log("Error: " + error);
                }
            );
    }

    cancel() {
        this.router.navigate(['/employees']);
    }
}
