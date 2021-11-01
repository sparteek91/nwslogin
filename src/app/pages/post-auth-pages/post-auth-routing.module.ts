import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';

import { APP_ROUTES } from "../../shared/routes";

const routes: Routes = [
	{ 
		path: APP_ROUTES.root, 
		redirectTo: APP_ROUTES.root, 
		// pathMatch: 'dashboard' 
	},
	{
		path: APP_ROUTES.root,
		component: DashboardComponent,
		data: {
			title: "Dashboard",
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PostAuthRoutingModule { }
