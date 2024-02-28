import { 
    Component, 
    ChangeDetectionStrategy,
    ViewEncapsulation, 
    OnInit,
    Input
} from '@angular/core';
import { navConfiguration } from '@constant/nav-config';
import { NavMenu } from '@interfaces/general/nav-menu.interface';

@Component({
    selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    host: {
        '[class.nav-menu-collapse]': 'collapse',
        '[class.nav-menu-quick-expand]': 'quickExpand',
    }
})
export class SidebarComponent implements OnInit {
    constructor() { }

    menu : NavMenu[] = [];
    @Input() collapse!: boolean;
    @Input() quickExpand!: boolean;

    ngOnInit(): void {
        this.menu = navConfiguration
    }
}
