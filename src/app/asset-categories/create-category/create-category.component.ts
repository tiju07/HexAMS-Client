import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories/categories.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';

@Component({
    selector: 'app-create-category',
    templateUrl: './create-category.component.html',
    styleUrl: './create-category.component.css',
    providers: [MessageService]
})
export class CreateCategoryComponent {

    constructor(private categoryService: CategoriesService, private fb: FormBuilder, private messageService: MessageService, private router: Router) { }

    form = this.fb.group({
        categoryName: new FormControl('', [Validators.required]),
        categoryDescription: new FormControl('')
    })

    createCategory() {
        if (!this.form.valid) {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Fill in all required fields!' });
            return;
        }
        this.categoryService.createCategory({ categoryID: 0, ...this.form.getRawValue() }).subscribe({
            next: data => {
                if (data.status == 200) {
                    this.messageService.add({ key: 'success', severity: 'success', summary: 'Success', detail: 'Category Creation Successful! Redirecting...', life: 2000 });
                    console.log(data);
                    console.log(data.body?.categoryID);
                    this.router.navigate(['/asset-categories', 'view', data.body.categoryID]);
                } else {
                    this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Category!' });
                }
            },
            error: err => {
                this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Failed Creating Category!' });
                console.log("Error: " + err);
            }
        })
    }
}
