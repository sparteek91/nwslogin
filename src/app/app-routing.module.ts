import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PreauthLayoutComponent } from './layouts/preauth-layout/preauth-layout.component';
import { PostauthLayoutComponent } from './layouts/postauth-layout/postauth-layout.component';
import { POST_AUTH_ROUTES, APP_ROUTES, PRE_AUTH_ROUTES } from "./shared/routes";
import { AuthGuard } from './shared/guards';

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
    	children: PRE_AUTH_ROUTES 
    },
	{ 
		path: APP_ROUTES.dashboard, 
		component: PostauthLayoutComponent, 
		data: { title: 'Post Auth Views' }, 
		children: POST_AUTH_ROUTES, 
		// canActivate: [AuthGuard]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
