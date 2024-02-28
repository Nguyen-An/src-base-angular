import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nav-notification',
    templateUrl: './nav-notification.component.html',
    host: {
        '[class.header-nav-item]': 'true'
    },
})
export class NavNotificationComponent implements OnInit, OnDestroy {

    constructor( ) {
    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        
    }
}
