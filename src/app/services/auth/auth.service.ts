import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/iuser';
import { ILogin } from '../../interfaces/ilogin';
import { CookieService } from 'ngx-cookie-service';
import { IForgotPassword } from '../../interfaces/iforgotpassword';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private cookieService: CookieService) { }

    url = environment.apiUrl;

    login(credentials: ILogin, role: string) {
        if (role == 'admin') {
            return this.http.post<any>(`${this.url}/Admin/Login`, credentials, { withCredentials: true, observe: 'response' });
        }
        else {
            return this.http.post<any>(`${this.url}/Employee/Login`, credentials, { withCredentials: true, observe: 'response' });
        }
    }

    register(userData: IUser, role: string) {
        if (role == 'admin') {
            return this.http.post<any>(`${this.url}/Admin/Register`, userData, { observe: 'response' });
        }
        else {
            return this.http.post<any>(`${this.url}/Employee/Register`, userData, { observe: 'response' });
        }
    }

    validateUsernameOrEmail(email: string, role: string) {
        if (role == 'admin') {
            return this.http.post<any>(`${this.url}/Admins/ValidateUsernameOrEmail`, email, { observe: 'response' });
        }
        else {
            return this.http.post<any>(`${this.url}/Employees/ValidateUsernameOrEmail`, email, { observe: 'response' });
        }
    }

    updatePassword(credentials: ILogin, role: string) {
        console.log(role);
        if (role == 'Admin' || role == 'admin') {
            return this.http.post<any>(`${this.url}/Admins/UpdatePassword`, credentials, { observe: 'response' });
        }
        else {
            return this.http.post<any>(`${this.url}/Employees/UpdatePassword`, credentials, { observe: 'response' });
        }
    }

    sendPasswordResetLink(data: IForgotPassword) {
        console.log(data);
        return this.http.post<any>(`${this.url}/ForgotPassword`, data, { observe: 'response' });
    }

    logout() {
        return this.http.post(`${this.url}/Logout`, { withCredentials: true, observe: 'response' });
    }
}
