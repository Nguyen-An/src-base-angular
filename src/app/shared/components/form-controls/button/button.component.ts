import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

	@Input() type = 'button';
	@Input() isLoading: boolean = false;
	@Input() isDisabled: boolean = false;
	@Input() className: string = '';
	@Output() byClick: EventEmitter<Event> = new EventEmitter();

	constructor() { }

	handlerClick(e: Event) {
		this.byClick.emit(e);
	}

}
