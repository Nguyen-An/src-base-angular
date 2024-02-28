import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormValidateComponent } from './ng-form-validate.component';

describe('NgFormValidateComponent', () => {
	let component: NgFormValidateComponent;
	let fixture: ComponentFixture<NgFormValidateComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NgFormValidateComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NgFormValidateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
