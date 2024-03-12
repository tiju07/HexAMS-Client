import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesComponent } from './employees/employees.component';
import { AssetsComponent } from './assets/assets.component';
import { AllocationDetailsComponent } from './allocation-details/allocation-details.component';
import { AssetBorrowReturnRequestsComponent } from './asset-borrow-return-requests/asset-borrow-return-requests.component';
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
import { GetCategoryByIDResolver } from './services/categories/categories.service';
import { CreateCategoryComponent } from './asset-categories/create-category/create-category.component';
import { UpdateCategoryComponent } from './asset-categories/update-category/update-category.component';
import { CreateAllocationComponent } from './allocation-details/create-allocation/create-allocation.component';
import { UpdateAllocationComponent } from './allocation-details/update-allocation/update-allocation.component';
import { ViewAllocationComponent } from './allocation-details/view-allocation/view-allocation.component';
import { ViewAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/view-asset-borrow-return-request/view-asset-borrow-return-request.component';
import { CreateAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/create-asset-borrow-return-request/create-asset-borrow-return-request.component';
import { UpdateAssetBorrowReturnRequestComponent } from './asset-borrow-return-requests/update-asset-borrow-return-request/update-asset-borrow-return-request.component';
import { CreateAssetServiceRequestComponent } from './asset-service-requests/create-asset-service-request/create-asset-service-request.component';
import { UpdateAssetServiceRequestComponent } from './asset-service-requests/update-asset-service-request/update-asset-service-request.component';
import { ViewAssetServiceRequestComponent } from './asset-service-requests/view-asset-service-request/view-asset-service-request.component';
import { ViewAssetAuditRequestComponent } from './asset-audit-requests/view-asset-audit-request/view-asset-audit-request.component';
import { CreateAuditRequestComponent } from './asset-audit-requests/create-audit-request/create-audit-request.component';
import { UpdateAuditRequestComponent } from './asset-audit-requests/update-audit-request/update-audit-request.component';
import { employeeGuard } from './guards/employee.guard';
import { adminGuard } from './guards/admin.guard';
import { generalGuard } from './guards/general.guard';
import { GetAllEmployeesResolver, GetEmployeeByIDResolver, GetUserByIDResolver } from './guards/resolvers/employee-data.resolver';
import { GetAllAssetsResolver, getAssetByIDResolver } from './guards/resolvers/asset-data.resolver';
import { GetAllCategoriesResolver } from './guards/resolvers/category-data.resolver';
import { GetAllAllocationDetails, GetAllocationDetailsByID } from './guards/resolvers/allocation-data.resolver';
import { GetAllBorrowReturnRequests, GetBorrowReturnRequestByID } from './guards/resolvers/borrow-return-requests-data.resolver';
import { GetAllAuditRequestsResolver, GetAuditRequestByIDResolver } from './guards/resolvers/audit-requests-data.resolver';
import { GetAllServiceRequestsResolver, GetServiceRequestByIDResolver } from './guards/resolvers/service-requests.resolver';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { UpdateProfileComponent } from './profile/update-profile/update-profile.component';
import { isLoggedInGuard } from './guards/is-logged-in.guard';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent, canActivate: [isLoggedInGuard] },
    { path: 'login', component: LoginComponent, canActivate: [isLoggedInGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'forgot-password/:token/:email', component: ForgotPasswordComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [generalGuard], resolve: { user: GetUserByIDResolver } },
    { path: 'profile/update', component: UpdateProfileComponent, canActivate: [generalGuard], resolve: { user: GetUserByIDResolver } },
    { path: 'employees', component: EmployeesComponent, canActivate: [adminGuard], resolve: { employees: GetAllEmployeesResolver } },
    { path: 'employees/view/:id', component: ViewEmployeeComponent, canActivate: [adminGuard], resolve: { employee: GetEmployeeByIDResolver } },
    { path: 'employees/delete/:id', component: DeleteEmployeeComponent, canActivate: [adminGuard] },
    { path: 'assets', component: AssetsComponent, canActivate: [generalGuard], resolve: { assets: GetAllAssetsResolver, categories: GetAllCategoriesResolver } },
    { path: 'assets/view/:id', component: ViewAssetComponent, canActivate: [generalGuard], resolve: { data: getAssetByIDResolver }, },
    { path: 'assets/add', component: CreateAssetComponent, canActivate: [adminGuard], resolve: { categories: GetAllCategoriesResolver } },
    { path: 'assets/update/:id', component: UpdateAssetComponent, canActivate: [adminGuard], resolve: { categories: GetAllCategoriesResolver, asset: getAssetByIDResolver } },
    { path: 'assets/delete/:id', component: DeleteAssetComponent, resolve: { data: getAssetByIDResolver }, canActivate: [adminGuard] },
    { path: 'asset-categories', component: AssetCategoriesComponent, canActivate: [generalGuard], resolve: { categories: GetAllCategoriesResolver } },
    { path: 'asset-categories/view/:id', component: ViewCategoryComponent, canActivate: [generalGuard], resolve: { category: GetCategoryByIDResolver } },
    { path: 'asset-categories/add', component: CreateCategoryComponent, canActivate: [adminGuard] },
    { path: 'asset-categories/update/:id', component: UpdateCategoryComponent, canActivate: [adminGuard], resolve: { category: GetCategoryByIDResolver } },
    { path: 'allocation-details', component: AllocationDetailsComponent, canActivate: [generalGuard], resolve: { allocations: GetAllAllocationDetails } },
    { path: 'allocation-details/view/:id', component: ViewAllocationComponent, canActivate: [generalGuard], resolve: { allocation: GetAllocationDetailsByID } },
    { path: 'allocation-details/add', component: CreateAllocationComponent, canActivate: [adminGuard], resolve: { employees: GetAllEmployeesResolver, assets: GetAllAssetsResolver } },
    { path: 'allocation-details/update/:id', component: UpdateAllocationComponent, canActivate: [adminGuard], resolve: { employees: GetAllEmployeesResolver, assets: GetAllAssetsResolver, allocation: GetAllocationDetailsByID } },
    { path: 'allocation-details/:employeeID', component: AllocationDetailsComponent, canActivate: [generalGuard], resolve: { allocations: GetAllAllocationDetails } },
    { path: 'asset-borrow-return-requests', component: AssetBorrowReturnRequestsComponent, canActivate: [generalGuard], resolve: { requests: GetAllBorrowReturnRequests } },
    { path: 'asset-borrow-return-requests/view/:id', component: ViewAssetBorrowReturnRequestComponent, canActivate: [generalGuard], resolve: { request: GetBorrowReturnRequestByID } },
    { path: 'asset-borrow-return-requests/add', component: CreateAssetBorrowReturnRequestComponent, canActivate: [employeeGuard], resolve: { assets: GetAllAssetsResolver } },
    { path: 'asset-borrow-return-requests/add/:assetID', component: CreateAssetBorrowReturnRequestComponent, canActivate: [employeeGuard], resolve: { assets: GetAllAssetsResolver } },
    { path: 'asset-borrow-return-requests/update/:id', component: UpdateAssetBorrowReturnRequestComponent, canActivate: [adminGuard], resolve: { request: GetBorrowReturnRequestByID, assets: GetAllAssetsResolver } },
    { path: 'asset-audit-requests', component: AssetAuditRequestsComponent, canActivate: [generalGuard], resolve: { requests: GetAllAuditRequestsResolver } },
    { path: 'asset-audit-requests/view/:id', component: ViewAssetAuditRequestComponent, canActivate: [generalGuard], resolve: { request: GetAuditRequestByIDResolver } },
    { path: 'asset-audit-requests/add', component: CreateAuditRequestComponent, canActivate: [adminGuard], resolve: { assets: GetAllAssetsResolver, employees: GetAllEmployeesResolver } },
    { path: 'asset-audit-requests/add/:employeeID', component: CreateAuditRequestComponent, canActivate: [adminGuard], resolve: { assets: GetAllAssetsResolver, employees: GetAllEmployeesResolver } },
    { path: 'asset-audit-requests/update/:id', component: UpdateAuditRequestComponent, canActivate: [generalGuard], resolve: { assets: GetAllAssetsResolver, request: GetAuditRequestByIDResolver } },
    { path: 'asset-service-requests', component: AssetServiceRequestsComponent, canActivate: [generalGuard], resolve: { requests: GetAllServiceRequestsResolver } },
    { path: 'asset-service-requests/view/:id', component: ViewAssetServiceRequestComponent, canActivate: [generalGuard], resolve: { request: GetServiceRequestByIDResolver } },
    { path: 'asset-service-requests/add', component: CreateAssetServiceRequestComponent, canActivate: [employeeGuard], resolve: { assets: GetAllAssetsResolver } },
    { path: 'asset-service-requests/update/:id', component: UpdateAssetServiceRequestComponent, canActivate: [adminGuard], resolve: { request: GetServiceRequestByIDResolver, assets: GetAllAssetsResolver } },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
