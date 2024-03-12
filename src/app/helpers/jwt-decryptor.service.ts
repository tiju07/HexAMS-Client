import { Injectable } from '@angular/core';
import * as jose from 'jose';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class JwtDecryptorService {

    constructor(private cookieService: CookieService) { }
    user!: string;
    isAuthenticated = false
    payload!: any;
    getUserData() {
        if (this.cookieService.check('auth-token')) {
            this.payload = jose.decodeJwt(this.cookieService.get('auth-token'));
        }
        return this.payload;
    }

    decodeToken(token: string) {
        return jose.decodeJwt(token);
    }

    getRole() {
        if (this.cookieService.check('auth-token')) {
            return this.getUserData().role;
        }
        return 'Guest';
    }


    public _demoSubject: BehaviorSubject<any> = new BehaviorSubject({ isAuthenticated: false, user: undefined });
    setSubject(value: object) {
        if (value) {
            this._demoSubject.next(value);
        } else {
            this._demoSubject.next({ isAuthenticated: false, user: '' })
        }
    }

}

