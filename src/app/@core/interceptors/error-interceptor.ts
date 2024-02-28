import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Toast, ToastHTML } from '@utils/toast';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(private _toast: HotToastService) { }

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((requestError) => {
				if (requestError.status !== 401) {
					switch (requestError.status) {
						case 404:
							Toast.fire({
								html: ToastHTML('error', 'Error', 'Not found!')
							})
							break;
						case 403:
							Toast.fire({
								html: ToastHTML('error', 'Warning', 'Signature has expired.')
							})
							break;
						case 400:
							Toast.fire({
								html: ToastHTML('error', 'Error', requestError.error.name?.[0] || requestError.error.message || requestError.error.message?.[0])
							})
							break;
						default:
							Toast.fire({
								html: ToastHTML('error', 'Error', requestError.error.name?.[0] || requestError.error.message || requestError.error.message?.[0] || 'Server Error')
							})
							break;
					}
				}
				return throwError(requestError);
			})
		);
	}
}
