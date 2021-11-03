import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InboxComponent } from './inbox/inbox.component';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { InfoModalComponent } from './popups/info-modal/info-modal.component';

@NgModule({
	imports: [
		CommonModule,
		PostAuthRoutingModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		NgxDatatableModule,
		SharedModule,
	],
	declarations: [
		InboxComponent,
		ClaimSearchComponent,
  InfoModalComponent
	],
})
export class PostAuthModule { }
