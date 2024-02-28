import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, HostListener, OnDestroy } from '@angular/core';
import { AppConfig } from '@interfaces/general/app-config.interface';
import { SCREEN_SIZE } from '@enum/screen-size.enum';
import { Select } from '@ngxs/store';
import { ScreenSizeService } from '@services/screen-size.service';
import { Observable, Subscription } from 'rxjs';
import { delay, filter, startWith } from 'rxjs/operators';
import { AuthService } from '@services/auth.service';
import { ActivatedRoute, ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
	selector: 'app-base',
	templateUrl: './base.component.html',
	styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
	@Select((state: { app: AppConfig; }) => state.app) app$!: Observable<AppConfig>;

	isCollapse!: boolean;
	isMobile!: boolean;
	isMobileNavOpen!: boolean;
	quickExpand!: boolean;
	subscription!: Subscription;
	subRoute?: Subscription;
	isPermission: boolean = true;

	constructor(private cdr: ChangeDetectorRef, private screenSizeSvc: ScreenSizeService, private _router: Router, private _authService: AuthService, private _route: ActivatedRoute) {
		this.screenSizeSvc.onResize$.pipe(delay(0)).subscribe(sizes => {
			const sizeTabletAbove = sizes.includes(SCREEN_SIZE.XXL) || sizes.includes(SCREEN_SIZE.XL) || sizes.includes(SCREEN_SIZE.LG);
			if (sizeTabletAbove) {
				this.isMobile = false;
			} else {
				this.isMobile = true;
			}
			this.cdr.markForCheck();
		});
	}

	@HostListener('window:resize', ['$event']) windowResize(event: any) {
		this.getScreenWidth(event.target.innerWidth);
	}

	ngOnInit() {
		this.subscription = this.app$.subscribe(app => {
			this.isCollapse = app.sideNavCollapse;
			this.isMobileNavOpen = app.mobileNavCollapse;
			this.cdr.markForCheck();
		});
		this.getScreenWidth(window.innerWidth);

	}

	mouseEnterExpand() {
		if (this.isCollapse) {
			this.quickExpand = true;
		}
	}

	mouseLeaveCollapse() {
		if (this.isCollapse) {
			this.quickExpand = false;
		}
	}

	getScreenWidth(size: number) {
		this.screenSizeSvc.onResize(size);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
		this.subRoute?.unsubscribe();
	}
}
