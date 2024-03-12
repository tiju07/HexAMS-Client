import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { IUserProfile } from '../../interfaces/iuserprofile';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private http: HttpClient) { }
    url = environment.apiUrl;
    getEmployees() {
        return this.http.get(`${this.url}/Employees`, { withCredentials: true, observe: 'response' })
    }

    getEmployeeByID(id: number) {
        return this.http.get(`${this.url}/Employees/` + id, { withCredentials: true, observe: 'response' })
    }

    updateEmployee(id: number, employee: IUserProfile) {
        return this.http.put<any>(`${this.url}/Employees/` + id, employee, { withCredentials: true, observe: 'response' })
    }

    deleteEmployee(id: number) {
        return this.http.delete<any>(`${this.url}/Employees/` + id, { withCredentials: true, observe: 'response' });
    }
}
