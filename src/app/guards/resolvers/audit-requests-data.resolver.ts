import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuditRequestsService } from "../../services/audit-requests/audit-requests.service";
import { catchError, map, of } from "rxjs";

export const GetAllAuditRequestsResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(AuditRequestsService).getAllAuditRequests();

export const GetAuditRequestByIDResolver = (router: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(AuditRequestsService).getAuditRequestByID(router.params['id']).pipe(
        map(res => res),
        catchError(err => of({ error: err })
        ));