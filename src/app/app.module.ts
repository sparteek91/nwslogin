import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// libs
import { ToastrModule } from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PreauthLayoutComponent } from './layouts/preauth-layout/preauth-layout.component';
import { PostauthLayoutComponent } from './layouts/postauth-layout/postauth-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { LocalStorage } from './shared/services/storage.service';
import { RequestInterceptor, InternetInterceptor, ResponseInterceptor } from "./interceptors";
import { AuthGuard, UnAuthGuard } from './shared/guards';
import { NavbarComponent } from './layouts/postauth-layout/navbar/navbar.component';
import { SidebarComponent } from './layouts/postauth-layout/sidebar/sidebar.component';
import { FooterComponent } from './layouts/postauth-layout/footer/footer.component';
import { ToolbarComponent } from './layouts/postauth-layout/toolbar/toolbar.component';

@NgModule({
	declarations: [
		AppComponent,
		PreauthLayoutComponent,
		PostauthLayoutComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
  ToolbarComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		AppRoutingModule,
		NgbModule,
		ToastrModule.forRoot()
	],
	providers: [
		LocalStorage,
		AuthService,
		AuthGuard,
		UnAuthGuard,
		{ provide: HTTP_INTERCEPTORS, useClass: InternetInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }