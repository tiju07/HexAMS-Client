import { inject } from "@angular/core";
import { AssetService } from "../../services/asset-catalogue/asset.service";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { catchError, map, of } from "rxjs";

export const GetAllAssetsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AssetService).getAllAssets();
}

export const getAssetByIDResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(AssetService).getAssetByID(route.params['id']).pipe(
        map(res => res),
        catchError(err => of({ error: err })
        ));