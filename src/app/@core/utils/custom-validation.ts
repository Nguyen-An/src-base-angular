import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

export function mustMatch(controlName: string, matchingControlName: string, controlLabel: string) {
	return (formGroup: FormGroup) => {
		const control = formGroup.get(controlName);
		const matchingControl = formGroup.get(matchingControlName);
		if (!control || !matchingControl) {
			return;
		}
		if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
			return;
		}
		if (control.value !== matchingControl.value) {
			matchingControl.setErrors({ mustMatch: { controlLabel } });
			return;
		}
		matchingControl.setErrors(null);
	};
}


// export function PhoneNumberValidator(regionCode: string | null): ValidatorFn {
// const phoneNumberUtil = PhoneNumberUtil.getInstance();
// 	return (control: AbstractControl): { [key: string]: any } | null => {
// 		let validNumber = false;
// 		try {
// 			const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
// 				control.value, regionCode
// 			);
// 			validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
// 		} catch (e) { }

// 		return validNumber ? null : { wrongNumber: { value: control.value } };
// 	};
// }

export function phoneNumberValidator(countryCodeName: string, phoneNumberName: string) {
	return (formGroup: FormGroup) => {
		const countryCodeControl = formGroup.get(countryCodeName);
		const phoneNumberControl = formGroup.get(phoneNumberName);
		if (phoneNumberControl?.value) {
			const phoneNumberUtil = PhoneNumberUtil.getInstance();
			const phoneNumberInput: string = phoneNumberControl.value;
			if ((phoneNumberInput || '').trim().length !== 0) {
				try {
					const phoneNumber = phoneNumberUtil.parse(countryCodeControl?.value + phoneNumberInput);
					if (!phoneNumberUtil.isValidNumber(phoneNumber)) {
						phoneNumberControl?.setErrors({ validatePhoneNumber: { valid: false } });
						return;
					}
				} catch (error) {
					phoneNumberControl?.setErrors({ validatePhoneNumber: { valid: false } });
					return;
				}
			}
		}
		if (phoneNumberControl?.getError('validatePhoneNumber')) {
			phoneNumberControl?.setErrors({ validatePhoneNumber: null });
		}
	};
}

export function whitespacesValid(control: FormControl) {
	const isWhitespace = control.value && (control.value || '').toString().trim().length === 0;
	const isValid = !isWhitespace;
	return isValid ? null : { whitespace: true };
}
