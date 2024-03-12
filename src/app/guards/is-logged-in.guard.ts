import { CanActivateFn } from '@angular/router';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
    const jwtService = inject(JwtDecryptorService);
    const cookieService = inject(CookieService);
    const router = inject(Router);
    if (cookieService.check('auth-token') && jwtService.getRole() != 'Guest') {
        router.navigate(['/profile']);
        return false;
    }
    return true;

};
