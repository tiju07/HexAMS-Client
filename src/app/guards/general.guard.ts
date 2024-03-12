import { CanActivateFn, Router } from '@angular/router';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { inject } from '@angular/core';
import { LastActivePageService } from '../services/last-active-page/last-active-page.service';

export const generalGuard: CanActivateFn = (route, state) => {
    const jwtDecoder = inject(JwtDecryptorService);
    const cookieService = inject(CookieService);
    const router = inject(Router);
    const messageService = inject(MessageService);
    const lastActivePageService = inject(LastActivePageService);

    if (cookieService.check('auth-token') && jwtDecoder.getRole() != 'Guest') {
        return true;
    } else {
        messageService.add({ key: 'error', severity: 'error', summary: 'Unauthorized', detail: 'Please Login First!' });
        lastActivePageService.setLastActivePage(router.getCurrentNavigation()?.extractedUrl.toString());
        router.navigate(['/login']);
        return false;
    }
};
