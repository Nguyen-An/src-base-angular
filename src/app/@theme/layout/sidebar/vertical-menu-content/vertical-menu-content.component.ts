import { 
    Component, 
    ChangeDetectionStrategy,
    ViewEncapsulation, 
    OnInit,
    EventEmitter,
    Output
} from '@angular/core';
import { Router } from '@angular/router';
import { navConfiguration } from '@constant/nav-config';
import { NavMenu } from '@interfaces/general/nav-menu.interface';
import { AuthService } from '@services/auth.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'vertical-menu-content',
    templateUrl: 'vertical-menu-content.component.html',
    encapsulation  : ViewEncapsulation.None
})

export class VerticalMenuContentComponent implements OnInit {

    menu : NavMenu[] = [];
    // totalQuotes: number = 0;
    subQuoteChange!: Subscription;
    @Output() onNavLinkClick= new EventEmitter();
    subProfile?: Subscription;
    isNewQuoteActivity: boolean = false;

    constructor(private router: Router, private _authService: AuthService) { 
    }

    ngOnInit(): void {
        
    }

    onLinkClick (path: string) {
        this.onNavLinkClick.emit(path)
    }

    isSubNavOpen(key: string) {
        const currentRouteTree = this.getRouteTreeInfo(this.menu)
        return this.isExisted(currentRouteTree, key)
    }

    isExisted(navTree: any, key: string): any {
        if(!navTree) {
            return navTree
        }

        if( navTree.key === key ){
            return true;
        }
        let treeNode; 
        for (let p in navTree) {
            if( navTree.hasOwnProperty(p) && typeof navTree[p] === 'object' ) {
                treeNode = this.isExisted(navTree[p], key);
                if(treeNode){
                    return treeNode;
                }
            }
        }
        return treeNode;
    }
    
    getRouteTreeInfo(nodes: NavMenu[]) {
        let result!: NavMenu;
        let found: boolean
        nodes.some((o: NavMenu): any => {
            let submenu: NavMenu;
            if (o.path === `/${this.router.url.split('/')[1]}`) {
                found = true
                return result = o;
            }
            if (o.submenu && (submenu = this.getRouteTreeInfo(o.submenu))) {
                return result = Object.assign({}, o, { submenu });
            }
        });

        return result;
    }


    ngOnDestroy(){}
}