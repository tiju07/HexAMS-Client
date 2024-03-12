import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EmployeesService } from "../../services/employees/employees.service";
import { JwtDecryptorService } from "../../helpers/jwt-decryptor.service";
import { AdminsService } from "../../services/admins/admins.service";
import { catchError, map, of } from "rxjs";

export const GetAllEmployeesResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(EmployeesService).getEmployees();
}

export const GetUserByIDResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

    const jwtDecoder = inject(JwtDecryptorService);
    const adminService = inject(AdminsService);
    const employeesService = inject(EmployeesService);

    if (jwtDecoder.getRole() == 'Admin') {
        return adminService.getAdminByID(jwtDecoder.getUserData().id);
    }
    else {
        return employeesService.getEmployeeByID(jwtDecoder.getUserData().id);
    }
}

export const GetEmployeeByIDResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(EmployeesService).getEmployeeByID(route.params['id']);