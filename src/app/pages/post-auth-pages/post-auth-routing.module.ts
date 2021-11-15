import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InboxComponent } from './inbox/inbox.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { ClaimSummaryComponent } from './claim-search/claim-summary/claim-summary.component';
import { CreateTaskComponent } from './claim-search/create-task/create-task.component';
import { RepotClaimComponent } from './repot-claim/repot-claim.component';

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
	},
	{
		path: APP_ROUTES.createTask,
		component: CreateTaskComponent,
		data: {
			title: "Create Task",
		},
	},
	{
		path: APP_ROUTES.reportClaim,
		component: RepotClaimComponent,
		data: {
			title: "Report a Claim",
		},
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PostAuthRoutingModule { }
