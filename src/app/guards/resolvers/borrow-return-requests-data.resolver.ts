import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BorrowReturnRequestsService } from "../../services/borrow-return-requests/borrow-return-requests.service";
import { inject } from "@angular/core";
import { catchError, map, of } from "rxjs";

export const GetAllBorrowReturnRequests = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(BorrowReturnRequestsService).getAllBorrowReturnRequests();

export const GetBorrowReturnRequestByID = (router: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
    inject(BorrowReturnRequestsService).getBorrowReturnRequestByID(router.params['id']).pipe(
        map(res => res),
        catchError(err => of({ error: err })
        ));
