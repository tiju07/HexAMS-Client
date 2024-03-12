import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MatDialogModule } from '@angular/material/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ProgressBarModule } from 'primeng/progressbar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssetsComponent } from './assets/assets.component';
import { AllocationDetailsComponent } from './allocation-details/allocation-details.component';
import { AssetBorrowReturnRequestsComponent } from './asset-borrow-return-requests/asset-borrow-return-requests.component';
import { FooterComponent } from './footer/footer.component';
import { AssetAuditRequestsComponent } from './asset-audit-requests/asset-audit-requests.component';
import { AssetServiceRequestsComponent } from './asset-service-requests/asset-service-requests.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { ViewAssetComponent } from './assets/view-asset/view-asset.component';
import { CreateAssetComponent } from './assets/create-asset/create-asset.component';
import { UpdateAssetComponent } from './assets/update-asset/update-asset.component';
import { DeleteAssetComponent } from './assets/delete-asset/delete-asset.component';
import { AssetCategoriesComponent } from './asset-categories/asset-categories.component';
import { ViewCategoryComponent } from './asset-categories/view-category/view-category.component';
import { CreateCategoryComponent } from './asset-categories/create-category/create-category.component';
import { UpdateCategoryComponent } from './asset-categories/update-category/update-category.component';
import { CreateAllocationComponent } from './allocation-details/create-allocation/create-allocation.component';
import { UpdateAllocationComponent } from './allocation-details/update-allocation/update-allocation.component';
import { ViewAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/view-asset-borrow-return-request/view-asset-borrow-return-request.component';
import { ViewAllocationComponent } from './allocation-details/view-allocation/view-allocation.component';
import { CreateAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/create-asset-borrow-return-request/create-asset-borrow-return-request.component';
import { UpdateAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/update-asset-borrow-return-request/update-asset-borrow-return-request.component';
import { CreateAssetServiceRequestComponent } from './asset-service-requests/create-asset-service-request/create-asset-service-request.component';
import { UpdateAssetServiceRequestComponent } from './asset-service-requests/update-asset-service-request/update-asset-service-request.component';
import { ViewAssetServiceRequestComponent } from './asset-service-requests/view-asset-service-request/view-asset-service-request.component';
import { ViewAssetAuditRequestComponent } from './asset-audit-requests/view-asset-audit-request/view-asset-audit-request.component';
import { CreateAuditRequestComponent } from './asset-audit-requests/create-audit-request/create-audit-request.component';
import { UpdateAuditRequestComponent } from './asset-audit-requests/update-audit-request/update-audit-request.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        RegisterComponent,
        LoginComponent,
        ProfileComponent,
        EmployeesComponent,
        AssetsComponent,
        AllocationDetailsComponent,
        AssetBorrowReturnRequestsComponent,
        FooterComponent,
        AssetAuditRequestsComponent,
        AssetServiceRequestsComponent,
        ViewEmployeeComponent,
        DeleteEmployeeComponent,
        ViewAssetComponent,
        CreateAssetComponent,
        UpdateAssetComponent,
        DeleteAssetComponent,
        AssetCategoriesComponent,
        ViewCategoryComponent,
        CreateCategoryComponent,
        UpdateCategoryComponent,
        CreateAllocationComponent,
        UpdateAllocationComponent,
        ViewAssetBorrowReturnRequestComponent,
        ViewAllocationComponent,
        CreateAssetBorrowReturnRequestComponent,
        UpdateAssetBorrowReturnRequestComponent,
        CreateAssetServiceRequestComponent,
        UpdateAssetServiceRequestComponent,
        ViewAssetServiceRequestComponent,
        ViewAssetAuditRequestComponent,
        CreateAuditRequestComponent,
        UpdateAuditRequestComponent,
        PasswordStrengthComponent,
        ForgotPasswordComponent,
        UpdateProfileComponent,
        ResetPasswordComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastModule,
        ButtonModule,
        ReactiveFormsModule,
        FormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSelectModule,
        TableModule,
        ConfirmDialogModule,
        MatDialogModule,
        SkeletonModule,
        SelectButtonModule,
        PasswordModule,
        DividerModule,
        PopoverModule,
        ScrollTopModule,
        ProgressBarModule
    ],
    providers: [MessageService, ConfirmationService, CookieService, Location],
    bootstrap: [AppComponent]
})
export class AppModule { }
