import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, AbstractControl, Validators } from '@angular/forms';
import { makeid } from '@utils/makeid';
@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => SearchBoxComponent),
		multi: true
	},
	{
		provide: NG_VALIDATORS,
		useExisting: SearchBoxComponent,
		multi: true
	}
	]
})
export class SearchBoxComponent implements ControlValueAccessor, AfterViewInit {

	set value(val: string) {
		this.val = val;
		this.onChange(val);
		this.onTouch(val);
	}
	val: string = ''; // this is the updated value that the class accesses
	name: string = makeid(10);
	@Input() inputModel: string = '';
	@Input() placeHolder: string = 'Search...';
	@Input() isDisabled: boolean = false;
	@Input() boxClassName!: string;
	@Input() controlClassName!: string;
	@Output() byChanges: EventEmitter<any> = new EventEmitter<any>();
	@Output() bySearch: EventEmitter<boolean> = new EventEmitter<any>();
	@Output() byReset: EventEmitter<boolean> = new EventEmitter<any>();

	onChange: any = () => { };
	onTouch: any = () => { };

	get validator() {
		return Validators.nullValidator;
	}

	constructor(
		private _def: ChangeDetectorRef,
	) { }

	ngAfterViewInit() {
		this._def.detectChanges();
	}

	onChangeData() {
		this.byChanges.emit(this.inputModel);
		this.onChange(this.inputModel);
		if (!this.inputModel) {
			this.reset();
		}
	}

	// this method sets the value programmatically
	writeValue(value: any) {
		this.value = value;
	}
	// upon UI element value changes, this method gets triggered
	registerOnChange(fn: any) {
		this.onChange = fn;
	}
	// upon touching the element, this method gets triggered
	registerOnTouched(fn: any) {
		this.onTouch = fn;
	}

	validate(ctrl: AbstractControl) {
		return this.validator(ctrl);
	}

	search() {
		this.bySearch.next(true);
	}

	reset() {
		this.byReset.next(true);
	}
}
