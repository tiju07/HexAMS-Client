import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServiceRequest } from '../../interfaces/iservicerequest';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ServiceRequestsService {

    constructor(private http: HttpClient, private jwtService: JwtDecryptorService) { }
    url = environment.apiUrl;
    getAllServiceRequests() {
        const role = this.jwtService.getRole();
        if (role == 'Admin') {
            return this.http.get<IServiceRequest[]>(`${this.url}/AssetServiceRequests`, { withCredentials: true })
        }
        else {
            return this.http.get<IServiceRequest[]>(`${this.url}/AssetServiceRequests/Employee/` + this.jwtService.getUserData().id, { withCredentials: true })
        }
    }

    getServiceRequestByID(id: number) {
        return this.http.get<IServiceRequest>(`${this.url}/AssetServiceRequests/` + id, { withCredentials: true, observe: 'response' })
    }

    createServiceRequest(serviceRequest: IServiceRequest) {
        return this.http.post<any>(`${this.url}/AssetServiceRequests`, serviceRequest, { withCredentials: true, observe: 'response' })
    }

    updateServiceRequest(id: number | null, serviceRequest: IServiceRequest) {
        return this.http.put<any>(`${this.url}/AssetServiceRequests/` + id, serviceRequest, { withCredentials: true, observe: 'response' })
    }
}
