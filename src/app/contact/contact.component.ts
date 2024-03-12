import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
    constructor(private fb: FormBuilder, private messageService: MessageService) { 0 }

    form = this.fb.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required])
    })

    onSubmit() {
        if (!this.form.valid) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please fill in all required fields!' });
            return;
        }
        this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Message Sent Successfully' });
        this.form.reset();
    }

}
