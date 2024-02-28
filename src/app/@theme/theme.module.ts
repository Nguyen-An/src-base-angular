import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './layout/base/base.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { NavToggleComponent } from './layout/navbar/nav-toggle/nav-toggle.component';
import { NavProfileComponent } from './layout/navbar/nav-profile/nav-profile.component';
import { VerticalMenuContentComponent } from './layout/sidebar/vertical-menu-content/vertical-menu-content.component';
import { NavMenuModule } from '@shared/components/nav-menu/nav-menu.module';
import { ContentComponent } from './layout/content/content.component';
import { DropdownModule } from '@shared/components/dropdown/dropdown.module';
import { AvatarModule } from '@shared/components/avatar/avatar.module';
import { MobileNavComponent } from './layout/mobile-nav/mobile-nav.component';
import { DatetimeModule } from '@shared/pipes/datetime/datetime.module';
import { NavNotificationComponent } from './layout/navbar/nav-notification/nav-notification.component';
import { LoadingModule } from '@shared/components/loading/loading.module';
import { NgScrollbarModule } from 'ngx-scrollbar';



@NgModule({
	declarations: [
		BaseComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
		SpinnerComponent,
		NavToggleComponent,
		NavProfileComponent,
		VerticalMenuContentComponent,
		ContentComponent,
		MobileNavComponent,
		NavNotificationComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		NgScrollbarModule,
		NavMenuModule,
		DropdownModule,
		AvatarModule,
		DatetimeModule,
		LoadingModule
	],
	exports: [
		SpinnerComponent
	]
})
export class ThemeModule { }
