import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

// Components
import { TableCardComponent } from './table-card/table-card.component';
import { DtHeaderComponent } from './dt-header/dt-header.component';

@NgModule({
	exports: [
		TableCardComponent,
		DtHeaderComponent
	],
	imports: [
		CommonModule,
	],
	declarations: [
		TableCardComponent,
		DtHeaderComponent
	],
	providers: [],
})
export class PostAuthSharedComponentsModule { }