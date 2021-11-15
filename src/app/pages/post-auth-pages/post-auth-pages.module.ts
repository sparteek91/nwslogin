import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InboxComponent } from './inbox/inbox.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { ClaimSummaryComponent } from './claim-search/claim-summary/claim-summary.component';
import { InfoModalComponent } from './popups/info-modal/info-modal.component';
import { DtLimitComponent } from './components/dt-limit/dt-limit.component';
import { CreateTaskComponent } from './claim-search/create-task/create-task.component';
import { RepotClaimComponent } from './repot-claim/repot-claim.component';

@NgModule({
	imports: [
		CommonModule,
		PostAuthRoutingModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		NgxDatatableModule,
		SharedModule,
		NgxMaterialTimepickerModule
	],
	declarations: [
		InboxComponent,
		ClaimSearchComponent,
		InfoModalComponent,
		DtLimitComponent,
		ClaimSummaryComponent,
		CreateTaskComponent,
  RepotClaimComponent
	],
})
export class PostAuthModule { }
