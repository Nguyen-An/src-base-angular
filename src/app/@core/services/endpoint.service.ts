import { APIMethodEnum } from '../enum';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { RequestOption } from '@interfaces/general/request-option.interface';
import { environment } from '@env/environment';
import { WebHttpUrlEncodingCodec } from '@interceptors/encode-url-params-safely-interceptor';

const APPLICATION_JSON = 'application/json';
const ARRAY_BUFFER = 'arraybuffer';
const OCTET_STREAM = 'octet-stream';

@Injectable({ providedIn: 'root' })
export class EndpointService {

	API = environment.API;

	constructor(
		protected http: HttpClient
	) { }

	private removeEmptyStringsFrom(obj: any) {
		const result = Object
			.entries({ ...obj })
			.filter(([key, val]) => val !== '' && val !== null && val !== undefined)
			.reduce((prev, curr) => ({ ...prev, [curr[0]]: curr[1] }), {});
		return { ...result };
	}

	private setHeaders(contentType: string | null, skipToken?: string): HttpHeaders {
		let header = new HttpHeaders();
		if (contentType) {
			header = header.set('Content-Type', contentType);
		}
		if (skipToken) {
			header = header.set('skip', 'true');
		}
		return header;
	}

	private getURL(resource: string, subs?: string[]): string {
		let url = environment.API;
		url += `/${resource}/`;
		if (subs && subs.length > 0) {
			url += subs.join('/');
			url += '/';
		}
		return url;
	}

	private sendRequest(method: APIMethodEnum, contentType: string | null, request: RequestOption, responseType?: string): Observable<any> {
		const { resource, body, subs, reportProgress } = request;
		// const params = this.removeEmptyStringsFrom(request.params);
		const params = new HttpParams({
			encoder: new WebHttpUrlEncodingCodec(), fromObject: this.removeEmptyStringsFrom(request.params)
		});
		const url = this.getURL(resource, subs);
		const headers = this.setHeaders(contentType, request.skipToken);
		const observe = reportProgress ? 'events' : 'body';
		const options: any = { body, params, headers, reportProgress, observe };
		if (responseType) {
			options.responseType = responseType;
		}
		return this.http.request(method, url, options)
			.pipe(
				map(response => {
					return response;
				}),
				catchError(error => throwError(error)),
			);
	}

	public sendGet(request: RequestOption): Observable<any> {
		const method = APIMethodEnum.GET;
		const contentType = APPLICATION_JSON;
		return this.sendRequest(method, contentType, request);
	}

	public sendPost(request: RequestOption): Observable<any> {
		const method = APIMethodEnum.POST;
		const contentType = APPLICATION_JSON;
		return this.sendRequest(method, contentType, request);
	}

	public sendDelete(request: RequestOption): Observable<any> {
		const method = APIMethodEnum.DELETE;
		const contentType = APPLICATION_JSON;
		return this.sendRequest(method, contentType, request);
	}

	public sendPut(request: RequestOption): Observable<any> {
		const method = APIMethodEnum.PUT;
		const contentType = APPLICATION_JSON;
		return this.sendRequest(method, contentType, request);
	}

	public sendFile(request: RequestOption): Observable<any> {
		const method = APIMethodEnum.POST;
		const contentType = null;
		return this.sendRequest(method, contentType, request);
	}

	public sendDownload(request: RequestOption) {
		const method = APIMethodEnum.GET;
		const contentType = OCTET_STREAM;
		const responseType = ARRAY_BUFFER;
		return this.sendRequest(method, contentType, request, responseType);
	}

}
