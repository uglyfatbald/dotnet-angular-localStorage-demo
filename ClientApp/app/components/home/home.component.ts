import { Component , PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    private myValue:any;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    }

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            console.debug('>> isPlatformBrowser==true. Retrieve the value using localStorage.getItem()');
            this.myValue = localStorage.getItem('test');
        }
    }

    test() {
        if (isPlatformBrowser(this.platformId)) {
            console.debug('>> isPlatformBrowser==true. Storing the value using localStorage.setItem()');
            localStorage.setItem('test', this.myValue);
        }
        alert('Value stored: '+ this.myValue);
    }
}
