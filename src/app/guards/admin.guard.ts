import { CanActivateFn, Router } from '@angular/router';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';
import { CookieService } from 'ngx-cookie-service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LastActivePageService } from '../services/last-active-page/last-active-page.service';

export const adminGuard: CanActivateFn = (route, state) => {
    const jwtDecoder = inject(JwtDecryptorService);
    const cookieService = inject(CookieService);
    const router = inject(Router);
    const messageService = inject(MessageService);
    const lastActivePageService = inject(LastActivePageService);

    if (cookieService.check('auth-token') && jwtDecoder.getRole() == 'Admin') {
        return true;
    }
    else if (jwtDecoder.getRole() == 'Guest') {
        messageService.add({ key: 'error', severity: 'error', summary: 'Unauthorized', detail: 'Please Login First!' });
        lastActivePageService.setLastActivePage(router.getCurrentNavigation()?.extractedUrl.toString());
        router.navigate(['/login']);
        return false;
    }
    else {
        messageService.add({ key: 'error', severity: 'error', summary: 'Unauthorized', detail: 'You are not allowed to access this page!' });
        console.log("Currrent: " + router.url);
        if (router.url == '/login') {
            router.navigate(['/home']);
        }
        return false;
    }
};