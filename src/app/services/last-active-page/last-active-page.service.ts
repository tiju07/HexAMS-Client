import { Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LastActivePageService {

    constructor() { }

    lastActivePage!: any;

    setLastActivePage(page: any) {
        this.lastActivePage = page;
        console.log("LAP" + this.lastActivePage);
    }

    getLastActivePage() {
        return this.lastActivePage;
    }

    clearLastActivePage() {
        this.lastActivePage = [];
    }
}
