import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { AppConfigState } from './store/app-config/app-config.state';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, EndpointService } from '@services/index';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '@interceptors/jwt-interceptor';
import { ErrorInterceptor } from '@interceptors/error-interceptor';
import { ThemeModule } from './@theme/theme.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ThemeModule,
    HotToastModule,
    NgScrollbarModule,
    HttpClientModule,
    NgxsModule.forRoot([
			AppConfigState
		]),
    NgxGpAutocompleteModule.forRoot({ 
      loaderOptions: { 
            apiKey: 'AIzaSyC2OM5qoz6u3jJIhRuYbtU8uLw2qHHGx6U',
            libraries: ['places']
      } 
    }),
  ],
  providers: [CookieService, AuthService, EndpointService, ErrorHandler,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
