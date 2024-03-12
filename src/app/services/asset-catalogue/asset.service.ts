import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IAsset } from '../../interfaces/iasset';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AssetService {

    constructor(private http: HttpClient) { }

    url = environment.apiUrl;

    getAllAssets(searchQuery: string = '', categoryFilter: string = '') {
        return this.http.get<IAsset[]>(`${this.url}/Assets?searchQuery=` + searchQuery + '&categoryFilter=' + categoryFilter, { withCredentials: true })
    }

    getAssetByID(id: number) {
        return this.http.get<IAsset>(`${this.url}/Assets/` + id, { withCredentials: true })
    }

    createAsset(asset: IAsset) {
        return this.http.post<any>(`${this.url}/Assets`, asset, { withCredentials: true, observe: 'response' })
    }

    updateAsset(id: number, asset: IAsset) {
        return this.http.put<any>(`${this.url}/Assets/` + id, asset, { withCredentials: true, observe: 'response' })
    }

    deleteAsset(id: number) {
        return this.http.delete<HttpResponse<IAsset | any>>(`${this.url}/Assets/` + id, { withCredentials: true, observe: 'response' })
    }
}
