import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookiesService } from './cookies.service';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { ENDPOINT, EXPIRED } from '@constant/index';
import { EndpointService } from '@services/index';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	// profile$ = new BehaviorSubject<User | null>(null);
	isLoggedIn: boolean = false;

	constructor(
		private _cookieService: CookiesService,
		private _service: EndpointService
	) { }

	get token() {
		return this._cookieService.getCookies(environment.TOKEN) || '';
	}

	set token(token: string) {
		this._cookieService.setCookies(environment.TOKEN, token, EXPIRED.TOKEN);
	}

	get refreshToken() {
		return this._cookieService.getCookies(environment.REFRESH_TOKEN) || '';
	}

	set refreshToken(token: string) {
		this._cookieService.setCookies(environment.REFRESH_TOKEN, token, EXPIRED.REFRESH_TOKEN);
	}

	checkAuthentication() {
		const isAuthen = this.token || this.refreshToken;
		this.isLoggedIn = !!isAuthen;
		return isAuthen;
	}

	getStarted(email: string) {
		return this._service.sendGet({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['get-started'],
			params: { email },
			skipToken: 'true'
		});
	}

	checkEmail(email: string){
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['check-email'],
			body: {email},
			skipToken: 'true'
		})
	}

	login(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['login'],
			body,
			skipToken: 'true'
		}).pipe(
			map((res: any) => {
				this.token = res.token;
				this.refreshToken = res.refresh;
				return res;
			})
		);
	}

	sendRefreshToken(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['refresh-token'],
			body
		}).pipe(
			map((res: any) => {
				this.token = res.token;
				this.refreshToken = res.refresh;
				return res;
			})
		);
	}

	resendCode(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['resend-code'],
			body,
			skipToken: 'true'
		});
	}

	completeSignUp(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['complete-signup'],
			body,
			skipToken: 'true'
		});
	}

	verifyAccount(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['verify'],
			body,
			skipToken: 'true'
		});
	}

	resendPassword(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['resend-password'],
			body,
			skipToken: 'true'
		});
	}

	resetPassword(body: any) {
		return this._service.sendPost({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['reset-password'],
			body,
			skipToken: 'true'
		});
	}

	updatePassword(body: any) {
		return this._service.sendPut({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['update-password'],
			body
		});
	}

	getProfile() {
		return this._service.sendGet({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['profile']
		});
	}

	updateProfile(body: any) {
		return this._service.sendPut({
			resource: ENDPOINT.AUTHENTICATION,
			subs: ['profile'],
			body
		});
	}


	logout() {
		this._cookieService.clearAllCookies();
		localStorage.clear();
		window.location.reload();
	}
}
