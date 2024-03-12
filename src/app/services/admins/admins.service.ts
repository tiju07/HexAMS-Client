import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserProfile } from '../../interfaces/iuserprofile';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AdminsService {

    constructor(private http: HttpClient) { }

    url = environment.apiUrl;

    getAdminByID(id: number) {
        return this.http.get(`${this.url}/Admins/` + id, { withCredentials: true, observe: 'response' })
    }

    updateAdmin(id: number, admin: IUserProfile) {
        return this.http.put<any>(`${this.url}/Admins/` + id, admin, { withCredentials: true, observe: 'response' })
    }
}
