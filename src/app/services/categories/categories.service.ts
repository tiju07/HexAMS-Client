import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICategory } from '../../interfaces/icategory';
import { environment } from '../../../environments/environment';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    constructor(private http: HttpClient) { }
    url = environment.apiUrl;
    getAllCategories() {
        return this.http.get<ICategory[]>(`${this.url}/Categories`, { withCredentials: true })
    }

    getCategoryByID(id: number) {
        return this.http.get<ICategory>(`${this.url}/Categories / ` + id, { withCredentials: true })
    }

    createCategory(category: ICategory) {
        return this.http.post<any>(`${this.url}/Categories`, category, { withCredentials: true, observe: 'response' })
    }

    updateCategory(id: number, category: ICategory) {
        return this.http.put<any>(`${this.url}/Categories / ` + id, category, { withCredentials: true, observe: 'response' })
    }

    deleteCategory(id: number) {
        return this.http.delete<any>(`${this.url}/Categories/` + id, { withCredentials: true, observe: 'response' })
    }
}

export const GetCategoryByIDResolver =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
        inject(CategoriesService).getCategoryByID(route.params['id']);
