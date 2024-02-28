import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: './content.component.html',
    host: {
        '[class.with-page-header]': 'pageHeader',
        '[class.is-collapse]': 'collapse'
    }
})
export class ContentComponent implements OnInit {

    @Input() collapse!: boolean
    @Input() pageHeader: boolean = true

    constructor() {
    }

    ngOnInit(): void { 
    }
}
