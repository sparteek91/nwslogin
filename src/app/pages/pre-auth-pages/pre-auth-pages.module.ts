import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CarouselModule } from 'ngx-owl-carousel-o';

import { PreAuthRoutingModule } from './pre-auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
	imports: [
		CommonModule,
		PreAuthRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule,
		CarouselModule
	],
	declarations: [
		LoginComponent,
		// ForgotPasswordComponent,
	],
})
export class PreAuthModule { }
