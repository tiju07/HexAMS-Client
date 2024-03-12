import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../interfaces/icategory';
import { CategoriesService } from '../../services/categories/categories.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-view-category',
    templateUrl: './view-category.component.html',
    styleUrl: './view-category.component.css',
    providers: [ConfirmationService, MessageService]
})
export class ViewCategoryComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private categoryService: CategoriesService, private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router, private jwtService: JwtDecryptorService) { }

    category!: ICategory;
    isAdmin = false;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => this.category = data['category']);
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
    }

    deleteCategory() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: "none",
            rejectIcon: "none",
            rejectButtonStyleClass: "p-button-danger",
            accept: () => {
                this.categoryService.deleteCategory(this.activatedRoute.snapshot.params['id']).subscribe(data => {
                    if (data.status == 204) {
                        this.messageService.add({ severity: 'success', key: 'success', summary: 'Successful', detail: 'Category Deleted Successfully! Redirecting...', life: 2000 });
                        setTimeout(() => this.router.navigate(['/asset-categories']), 1500);
                    } else {
                        this.messageService.add({ severity: 'error', key: 'error', summary: 'Error', detail: 'Error Deleting Category!', life: 2000 });
                    }
                });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', key: 'error', summary: 'Cancelled!', detail: 'Category Deletion Cancelled!', life: 2000 });
            }
        });
    }
}
