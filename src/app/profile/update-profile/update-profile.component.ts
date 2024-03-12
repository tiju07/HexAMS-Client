import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IUserProfile } from '../../interfaces/iuserprofile';
import { EmployeesService } from '../../services/employees/employees.service';
import { AdminsService } from '../../services/admins/admins.service';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-update-profile',
    templateUrl: './update-profile.component.html',
    styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {
    constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeesService, private adminService: AdminsService, private jwtService: JwtDecryptorService) {
    }

    gender = ['Male', 'Female', 'Others'];
    user!: IUserProfile;
    form = this.fb.group({
        id: new FormControl(0),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required, Validators.minLength(5)]),
        gender: new FormControl('', [Validators.required]),
        contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        address: new FormControl('')
    });

    ngOnInit(): void {
        this.activatedRoute.data.subscribe({
            next: data => {
                // this.user = data['user'] as IUserProfile;
                console.log(data['user'])
                this.form.patchValue(data['user'].body as any);
            }
        })
    }

    updateProfile() {
        if (!this.form.valid) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!', life: 4000 });
            return;
        }
        if (this.jwtService.getRole() == 'Admin') {
            this.adminService.updateAdmin(this.form.get('id')?.value as number, this.form.getRawValue() as IUserProfile).subscribe({
                next: data => {
                    if (data.status == 204) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Profile Updated Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/profile']), 2000);
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Profile!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Profile!' });
                }
            })
        }
        else if (this.jwtService.getRole() == 'Employee') {
            this.employeeService.updateEmployee(this.form.get('id')?.value as number, this.form.getRawValue() as IUserProfile).subscribe({
                next: data => {
                    if (data.status == 204) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Profile Updated Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/profile']), 2000);
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Profile!' });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Updating Profile!' });
                }
            })
        }

    }
}
