import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreauthLayoutComponent } from './layouts/preauth-layout/preauth-layout.component';
import { PostauthLayoutComponent } from './layouts/postauth-layout/postauth-layout.component';
import { POST_AUTH_ROUTES, APP_ROUTES, PRE_AUTH_ROUTES } from "./shared/routes";
import { AuthGuard, UnAuthGuard } from './shared/guards';

const appRoutes: Routes = [
	{
		path: APP_ROUTES.root,
		redirectTo: APP_ROUTES.login,
		pathMatch: 'full'
	},
	{
		path: APP_ROUTES.root,
		component: PreauthLayoutComponent,
		data: { title: 'Pre Auth Views' },
		children: PRE_AUTH_ROUTES,
		canActivate: [UnAuthGuard]
	},
	{
		path: APP_ROUTES.root,
		component: PostauthLayoutComponent,
		data: { title: 'Post Auth Views' },
		children: POST_AUTH_ROUTES,
		canActivate: [AuthGuard]
	}
];

const routeOptions: any = {
	scrollPositionRestoration: 'enabled',
	initialNavigation: 'enabled',
	paramsInheritanceStrategy: 'always'
}

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, routeOptions)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
