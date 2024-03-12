import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBorrowReturnRequest } from '../../interfaces/iborrowreturnrequest';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BorrowReturnRequestsService {

    constructor(private http: HttpClient, private jwtService: JwtDecryptorService) { }
    url = environment.apiUrl;
    getAllBorrowReturnRequests() {
        const role = this.jwtService.getRole();
        if (role == 'Admin') {
            return this.http.get<IBorrowReturnRequest[]>(`${this.url}/AssetBorrowReturnRequests`, { withCredentials: true });
        }
        else {
            return this.http.get<IBorrowReturnRequest[]>(`${this.url}/AssetBorrowReturnRequests/Employee/` + this.jwtService.getUserData().id, { withCredentials: true })
        }
    }

    getBorrowReturnRequestByID(id: number) {
        return this.http.get<IBorrowReturnRequest>(`${this.url}/AssetBorrowReturnRequests/` + id, { withCredentials: true, observe: 'response' });
    }

    createBorrowReturnRequest(borrowReturnRequest: IBorrowReturnRequest) {
        return this.http.post<any>(`${this.url}/AssetBorrowReturnRequests`, borrowReturnRequest, { withCredentials: true, observe: 'response' });
    }

    updateBorrowReturnRequest(id: number, borrowReturnRequest: IBorrowReturnRequest) {
        return this.http.put<any>(`${this.url}/AssetBorrowReturnRequests/` + id, borrowReturnRequest, { withCredentials: true, observe: 'response' });
    }
}
