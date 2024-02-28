import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
    selector: 'nav-profile',
    templateUrl: './nav-profile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.header-nav-item]': 'true'
    }
})
export class NavProfileComponent implements OnInit {
    constructor(
        private _authService: AuthService
    ) { }

    ngOnInit(): void { }

    signout() {
        this._authService.logout();
      }
}
