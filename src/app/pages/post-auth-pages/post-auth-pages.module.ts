import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// libs
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PostAuthRoutingModule } from './post-auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PostAuthSharedComponentsModule } from '../../shared-components/post-auth/pos-auth-shared-components.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	imports: [
		CommonModule,
		PostAuthRoutingModule,
		FormsModule,
		NgbModule,
		ReactiveFormsModule,
		NgxDatatableModule,
		SharedModule,
		PostAuthSharedComponentsModule
	],
	declarations: [
		DashboardComponent
	],
})
export class PostAuthModule { }
