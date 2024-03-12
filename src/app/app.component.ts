import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtDecryptorService } from './helpers/jwt-decryptor.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    displayProgress = false;
    constructor(private cookieService: CookieService, private jwtService: JwtDecryptorService, private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.displayProgress = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.displayProgress = false;
            }
        });
    }
    isAuthenticated!: boolean;
    user!: string | undefined;
    ngOnInit() {
        this.isAuthenticated = this.cookieService.check('auth-token');
        this.user = this.cookieService.get('name');
        if (this.isAuthenticated) {
            this.jwtService.setSubject({ isAuthenticated: this.isAuthenticated, user: this.user });
        }
        else {
            this.jwtService.setSubject({ isAuthenticated: false, user: undefined });
        }
    }

    onActivate(_event: any) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
