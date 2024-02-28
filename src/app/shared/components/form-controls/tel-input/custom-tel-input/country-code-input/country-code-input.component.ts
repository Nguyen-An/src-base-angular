import { Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorConnector } from '@utils/control-value-accessor-connector';
import { PhoneNumberUtil } from 'google-libphonenumber';

@Component({
	selector: 'app-country-code-input',
	templateUrl: './country-code-input.component.html',
	styleUrls: ['./country-code-input.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CountryCodeInputComponent),
			multi: true,
		},
	],

})
export class CountryCodeInputComponent extends ControlValueAccessorConnector implements OnInit {

	@Input() className?: string;
	@Input() errorLabel!: string;
	@Input() inputId!: string;
	@Input() name!: string;
	@Input() placeHolder?: string = '';
	@Input() override formControlName!: string;
	@Input() submitted!: boolean;
	@Input() isDisabled: boolean = false;
	countryCodes: any[] = [];

	constructor(injector: Injector) {
		super(injector);
	}

	ngOnInit(): void {
		this.initCountryCodes();
	}

	initCountryCodes(): void {
		const phoneNumberUtil = PhoneNumberUtil.getInstance();
		const listCountries: string[] = phoneNumberUtil.getSupportedRegions();
		// add TR as initial value
		// this.countryCodes.push(90);
		listCountries.forEach(country => {
			const countryCode = phoneNumberUtil.getCountryCodeForRegion(country);
			this.countryCodes.push({
				dialCode: `+${countryCode}`,
				code: country
			});
			// if (this.countryCodes.indexOf(countryCode) === -1) {
			// 	this.countryCodes.push(countryCode);
			// }
		});
		console.log(this.countryCodes);
		// this.countryCodes.sort((a, b) => a > b ? 1 : -1);
	}

}
