import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControlValidateComponent } from './form-control-validate/form-control-validate.component';
import { NgFormValidateComponent } from './ng-form-validate/ng-form-validate.component';


@NgModule({
	declarations: [FormControlValidateComponent, NgFormValidateComponent],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		NgFormValidateComponent,
		FormControlValidateComponent
	]
})
export class FormValidateModule { }


