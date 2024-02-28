import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-table-button-delete',
	templateUrl: './table-button-delete.component.html',
	styleUrls: ['./table-button-delete.component.scss']
})
export class TableButtonDeleteComponent implements OnInit {
	@Output() onClick = new EventEmitter<boolean>();
	constructor() { }

	ngOnInit(): void {
	}

}
