import { Component, ContentChild, forwardRef, Injector, Input, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorMessage } from '@interfaces/general/error-message.interface';
import { MultiSelect } from '@interfaces/general/multi-select.interface';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';

@Component({
	selector: 'app-ng-select',
	templateUrl: './ng-select.component.html',
	styleUrls: ['./ng-select.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NgSelectComponent),
			multi: true,
		},
	],
})
export class NgSelectComponent extends ControlValueAccessorConnector {

	@Input() submitted!: boolean;
	@Input() placeHolder: string = '';
	@Input() className?: string;
	@Input() name!: string;
	@Input() errorLabel!: string;
	@Input() configMultiSelect?: MultiSelect;
	@Input() isDisabled: boolean = false;
	@Input() customError!: ErrorMessage;
	@Input() loading: boolean = false;
	@ContentChild('templateLabel') templateLabel?: TemplateRef<any>;
	@ContentChild('templateOption') templateOption?: TemplateRef<any>;

	constructor(injector: Injector) {
		super(injector);
	}

}
