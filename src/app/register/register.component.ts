import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

    roles: any[] = [{ label: 'Admin', value: 'admin' }, { label: 'Employee', value: 'employee' }];
    selectedRole!: string;
    strongPassword = false;


    constructor(private fb: FormBuilder, private messageService: MessageService, private authService: AuthService, private router: Router) {
    }

    gender = ['Male', 'Female', 'Others'];
    onPasswordStrengthChanged(event: boolean) {
        this.strongPassword = event;
    }

    pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    form = this.fb.group({
        id: new FormControl(0),
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl('', [Validators.required, Validators.minLength(5)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.pattern)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        gender: new FormControl('', [Validators.required]),
        contactNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
        address: new FormControl('')
    }, { validators: this.passwordMatchValidator });

    passwordMatchValidator(control: FormGroup) {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        return password === confirmPassword ? null : { passwordsDoNotMatch: true };
    }

    ngOnInit(): void {
        const popoverTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'));
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'focus'
        }));
    }

    passwordVisible = false;
    confirmPasswordVisible = false;

    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }

    toggleConfirmPasswordVisibility() {
        this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }

    registerUser() {
        if (this.selectedRole == null) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please select a role!' });
        }
        else if (!this.form.valid) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please enter all required details' });
        }
        else {
            this.authService.register(this.form.getRawValue(), this.selectedRole).subscribe({
                next: data => {
                    if (data.status == 200) {
                        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Registration Successful! Redirecting...', life: 2000 });
                        setTimeout(() => {
                            this.router.navigate(['/login'])
                        }, 1500)
                    }
                    else {
                        this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: data.statusText });
                    }
                },
                error: err => {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: err.error['Error'][0] });
                }
            })
        }
    }

}