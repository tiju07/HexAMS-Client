import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AssetService } from '../services/asset-catalogue/asset.service';
import { IAsset } from '../interfaces/iasset';
import { Observable, map, startWith } from 'rxjs';
import { CategoriesService } from '../services/categories/categories.service';
import { ICategory } from '../interfaces/icategory';
import { JwtDecryptorService } from '../helpers/jwt-decryptor.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-assets',
    templateUrl: './assets.component.html',
    styleUrl: './assets.component.css'
})
export class AssetsComponent {

    constructor(private assetService: AssetService, private activatedRoute: ActivatedRoute, private router: Router, private jwtDecoder: JwtDecryptorService) { }

    searchControl = new FormControl('');
    filterControl = new FormGroup({
        categoryID: new FormControl('')
    })

    assets!: IAsset[];
    assetData: any[] = [];
    filteredAssets!: IAsset[];
    filteredAssetData!: Observable<string[]>;

    categories!: ICategory[];
    payload!: any;

    isAdmin = false;

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => this.assets = data['assets']);
        this.assets.forEach((d: IAsset) => this.assetData.push(d.assetName));
        this.activatedRoute.data.subscribe(data => this.categories = data['categories']);
        this.filteredAssetData = this.searchControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        )
        if (this.jwtDecoder.getRole() == 'Admin') this.isAdmin = true;
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        console.log(filterValue);
        return this.assetData.filter(option => option.toLowerCase().includes(filterValue));
    }

    search() {
        var searchQuery = this.searchControl?.value || undefined;
        var filter = this.filterControl.value.categoryID || undefined;
        if (isNaN(filter as any) == true) {
            filter = "";
        }
        this.assetService.getAllAssets(searchQuery, filter).subscribe(data => this.assets = data as IAsset[]);
    }

    clearFilter() {
        this.filterControl.setValue({ categoryID: '' });
        this.search();
    }

    getCategoryName(id: number | null) {
        return this.categories.filter(c => c.categoryID == id)[0].categoryName;
    }

}
