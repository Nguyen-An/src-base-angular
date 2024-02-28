import { Component, HostBinding, Input } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	host: {
		'[class.is-collapse]': 'collapse'
	}
})
export class NavbarComponent {
	@Input() collapse!: boolean;
	@Input() isMobile!: boolean;
	constructor(
	) { }

}
