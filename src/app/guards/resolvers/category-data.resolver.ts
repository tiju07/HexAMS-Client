import { inject } from "@angular/core";
import { CategoriesService } from "../../services/categories/categories.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { catchError, map, of } from "rxjs";

export const GetAllCategoriesResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(CategoriesService).getAllCategories();
}

export const GetCategoryByIDResolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(CategoriesService).getCategoryByID(route.params['id']).pipe(
        map(res => res),
        catchError(err => of({ error: err })),
    )
