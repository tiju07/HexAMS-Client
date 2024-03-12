import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ServiceRequestsService } from "../../services/service-requests/service-requests.service";
import { inject } from "@angular/core";
import { catchError, map, of } from "rxjs";

export const GetAllServiceRequestsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(ServiceRequestsService).getAllServiceRequests();


export const GetServiceRequestByIDResolver = (router: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(ServiceRequestsService).getServiceRequestByID(router.params['id']).pipe(
        map(res => res),
        catchError(err => of({ error: err })
        ));