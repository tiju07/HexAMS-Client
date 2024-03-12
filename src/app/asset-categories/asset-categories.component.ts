import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';
import { ICategory } from '../interfaces/icategory';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'app-asset-categories',
    templateUrl: './asset-categories.component.html',
    styleUrl: './asset-categories.component.css',
    providers: [ConfirmationService, MessageService]
})
export class AssetCategoriesComponent implements OnInit {

    constructor(private categoryService: CategoriesService, private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    cols!: Column[];
    categories!: ICategory[];
    selectedCategory!: ICategory;
    isAdmin = false;
    ngOnInit() {
        this.isAdmin = false;
        this.activatedRoute.data.subscribe(data => this.categories = data['categories']);
        this.cols = [
            { field: 'categoryID', header: 'Category ID' },
            { field: 'categoryName', header: 'Category Name' },
            { field: 'categoryDescription', header: 'Description' }
        ];
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
    }

    onRowSelect() {
        this.router.navigate(['/asset-categories', 'view', this.selectedCategory.categoryID]);
    }

    updateCategory(id: number) {
        if (this.jwtService.getRole() == 'Guest') {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please Login First!' });
            this.router.navigate(['/login']);
        } else if (this.jwtService.getRole() == 'Employee') {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'You are not authorized to perform this action!' });
        }
        else {
            this.router.navigate(['/asset-categories', 'update', id]);
        }
    }

    deleteCategory(id: number) {
        if (this.jwtService.getRole() == 'Guest') {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'Please Login First!' });
            this.router.navigate(['/login']);
        } else if (this.jwtService.getRole() == 'Employee') {
            this.messageService.add({ key: 'error', severity: 'error', summary: 'Error', detail: 'You are not authorized to perform this action!' });
        }
        else {
            console.log("Clicked!: " + id);
            this.confirmationService.confirm({
                message: 'Are you sure that you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                acceptIcon: "none",
                rejectIcon: "none",
                rejectButtonStyleClass: "p-button-danger",
                accept: () => {
                    this.messageService.add({ severity: 'success', key: 'success', summary: 'Successful', detail: 'Category Deleted Successfully! Redirecting...', life: 2000 });
                    this.categoryService.deleteCategory(id).subscribe(data => {
                        if (data.status == 204) {
                            this.messageService.add({ severity: 'success', key: 'success', summary: 'Successful', detail: 'Category Deleted Successfully! Redirecting...', life: 2000 });
                            setTimeout(() => this.categoryService.getAllCategories().subscribe(data => this.categories = data as ICategory[]), 1500);
                        } else {
                            this.messageService.add({ severity: 'error', key: 'error', summary: 'Error', detail: 'Error Deleting Category!', life: 2000 });
                        }
                    });
                },
                reject: () => {
                    this.messageService.add({ severity: 'error', key: 'error', summary: 'Error', detail: 'Category Deletion Cancelled!', life: 2000 });
                }
            });
        }
    }

}
