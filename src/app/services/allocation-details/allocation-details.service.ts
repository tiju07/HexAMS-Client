import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllocation } from '../../interfaces/iallocationdetails';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AllocationDetailsService {
    getAllocationDetailsByEmployee(employeeID: number) {
        return this.http.get<IAllocation[]>(`${this.url}/AllocationDetails/Employee/` + employeeID, { withCredentials: true, observe: 'response' })
    }

    constructor(private http: HttpClient, private jwtService: JwtDecryptorService) { }

    url = environment.apiUrl;

    getAllAllocationDetails() {
        const role = this.jwtService.getRole();
        if (role == 'Admin') {
            return this.http.get<IAllocation[]>(`${this.url}/AllocationDetails`, { withCredentials: true })
        }
        else {
            return this.http.get<IAllocation[]>(`${this.url}/AllocationDetails/Employee/` + this.jwtService.getUserData().id, { withCredentials: true })
        }
    }

    getAllocationDetailByID(id: number) {
        return this.http.get<HttpResponse<any>>(`${this.url}/AllocationDetails/` + id, { withCredentials: true, observe: 'response' })

    }

    createAllocation(allocationDetail: IAllocation) {
        return this.http.post<HttpResponse<any>>(`${this.url}/AllocationDetails`, allocationDetail, { withCredentials: true, observe: 'response' })
    }

    updateAllocation(id: number | null, allocationDetail: IAllocation) {
        return this.http.put<HttpResponse<any>>(`${this.url}/AllocationDetails/` + id, allocationDetail, { withCredentials: true, observe: 'response' })
    }
}
