import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { IForgotPassword } from '../../interfaces/iforgotpassword';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
    roles: any[] = [{ label: 'Admin', value: 'admin' }, { label: 'Employee', value: 'employee' }];
    selectedRole!: string;

    constructor(private fb: FormBuilder, private authService: AuthService, private messageService: MessageService, private router: Router) { }

    form = this.fb.group({
        email: new FormControl('', [Validators.required, Validators.min(5)]),
    })

    onSubmit() {
        console.log("Submitted!");
        this.authService.sendPasswordResetLink(this.form.getRawValue() as IForgotPassword).subscribe({
            next: (data) => {
                if (data.status == 200) {
                    this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Password Reset Link Sent!' });
                    setTimeout(() => this.router.navigate(['/login']), 1500);
                }
            },
            error: (err) => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: "Error while sending password reset link!" });
            }
        });
    }
}
