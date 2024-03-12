import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from '../services/admins/admins.service';
import { IUserProfile } from '../interfaces/iuserprofile';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
    constructor(private router: Router, private adminService: AdminsService, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }


    user!: IUserProfile;
    isAdmin = false;
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => this.user = data['user'].body as IUserProfile);
        console.log(this.user);
        if (this.jwtService.getRole() == 'Admin') {
            this.isAdmin = true;
        }
    }
}
