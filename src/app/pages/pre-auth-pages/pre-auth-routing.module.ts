import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from './login/login.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UnAuthGuard } from "../../shared/guards";

import { APP_ROUTES } from "../../shared/routes";

const routes: Routes = [
	{
		path: APP_ROUTES.login,
		component: LoginComponent,
		data: {
			title: "Login",
		},
		canActivate: [UnAuthGuard],
	},
	// {
	// 	path: APP_ROUTES.forgotPassword,
	// 	component: ForgotPasswordComponent,
	// 	data: {
	// 		title: "Forgot Password"
	// 	},
	// 	canActivate: [UnAuthGuard],
	// }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PreAuthRoutingModule { }
