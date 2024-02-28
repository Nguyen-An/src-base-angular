import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AppConfig } from '@interfaces/general/app-config.interface';
import { Store, Select } from '@ngxs/store'; 
import { Observable, Subscription } from 'rxjs';
import { UpdateMobileNavCollapse } from 'src/app/store/app-config/app-config.action';

@Component({
    selector: 'mobile-nav',
    templateUrl: 'mobile-nav.component.html',
    host: {
        '[class.is-open]': 'isOpen',
    }
})

export class MobileNavComponent implements OnInit {
    @Select((state: { app: AppConfig; }) => state.app) app$!: Observable<AppConfig>;
    @Input() isOpen: boolean = false;
    subscription!: Subscription;

    constructor(private cdr: ChangeDetectorRef, private store: Store) { }

    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.isOpen = app.mobileNavCollapse
            this.cdr.markForCheck()
        });
    }

    closeNav() {
        this.isOpen = false;
        this.store.dispatch(new UpdateMobileNavCollapse(this.isOpen));
    }

    onClicked() {
        this.closeNav()
    }
}