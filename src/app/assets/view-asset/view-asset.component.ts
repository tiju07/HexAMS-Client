import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAsset } from '../../interfaces/iasset';
import { AssetService } from '../../services/asset-catalogue/asset.service';
import { JwtDecryptorService } from '../../helpers/jwt-decryptor.service';

@Component({
    selector: 'app-view-asset',
    templateUrl: './view-asset.component.html',
    styleUrl: './view-asset.component.css'
})
export class ViewAssetComponent implements OnInit {

    constructor(private assetService: AssetService, private activatedRoute: ActivatedRoute, private jwtService: JwtDecryptorService) { }

    assetID!: string | null;
    asset!: IAsset;
    isAdmin = false;
    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => { this.asset = data['data'] as IAsset; console.log(data['data']) });
        if (this.jwtService.getRole() == 'Admin') this.isAdmin = true;
    }
}
