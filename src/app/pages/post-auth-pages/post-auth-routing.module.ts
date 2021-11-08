import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InboxComponent } from './inbox/inbox.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { ClaimSummaryComponent } from './claim-search/claim-summary/claim-summary.component';

import { APP_ROUTES } from "../../shared/routes";

const routes: Routes = [
	{
		path: APP_ROUTES.inbox,
		component: InboxComponent,
		data: {
			title: "Inbox",
		},
	},
	{
		path: APP_ROUTES.claim,
		component: ClaimSearchComponent,
		data: {
			title: "Claim Search",
		},
	},
	{
		path: APP_ROUTES.claim + '/:id',
		component: ClaimSummaryComponent,
		data: {
			title: "Claim Summary",
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PostAuthRoutingModule { }
