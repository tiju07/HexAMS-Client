import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuditRequest } from '../../interfaces/iauditrequest';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuditRequestsService {

    constructor(private http: HttpClient, private jwtService: JwtDecryptorService) { }

    url = environment.apiUrl;

    getAllAuditRequests() {
        const role = this.jwtService.getRole();
        if (role == 'Admin') {
            return this.http.get<IAuditRequest[]>(`${this.url}/AuditReportRequests`, { withCredentials: true });
        } else {
            return this.http.get<IAuditRequest[]>(`${this.url}/AuditReportRequests/Employee/` + this.jwtService.getUserData().id, { withCredentials: true })
        }
    }

    getAuditRequestByID(id: number) {
        return this.http.get<IAuditRequest>(`${this.url}/AuditReportRequests/` + id, { withCredentials: true, observe: 'response' });
    }

    createAuditRequest(auditRequest: IAuditRequest) {
        return this.http.post<any>(`${this.url}/AuditReportRequests`, auditRequest, { withCredentials: true, observe: 'response' });
    }

    updateAuditRequest(id: number, auditRequest: IAuditRequest) {
        return this.http.put<any>(`${this.url}/AuditReportRequests/` + id, auditRequest, { withCredentials: true, observe: 'response' });
    }
}