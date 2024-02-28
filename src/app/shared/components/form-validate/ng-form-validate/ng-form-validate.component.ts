import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';

@Component({
	selector: 'app-ng-form-validate',
	templateUrl: './ng-form-validate.component.html',
	styleUrls: ['./ng-form-validate.component.scss']
})
export class NgFormValidateComponent implements OnInit {

	@Input()
	key: any;
	@Input()
	name: string = '';
	@Input()
	value = '';
	@Input() customError!: ErrorMessage;
	@Input()
	form: NgForm | undefined;
	@Input()
	dirty: boolean = false;
	maxLength: any;
	minLength: any;

	constructor() {
	}

	ngOnInit() {
		const that = this;
		if (this.key['_rawValidators']) {
			this.key['_rawValidators'].map((value: any) => {
				if (value['minlength']) {
					that.minLength = value.minlength;
				}
				if (value['maxlength']) {
					that.maxLength = value.maxlength;
				}
			});
		}
	}

}
