import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent, SelectionType, TableColumn } from '@swimlane/ngx-datatable';

import { claimColumns } from './claim.config';
import { APP_ROUTES, ApiRoutes } from '../../../shared/routes';
import { fromEvent } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ToastService } from 'src/app/shared/services/toastr.service';

@Component({
	selector: 'app-claim-search',
	templateUrl: './claim-search.component.html',
	styleUrls: ['./claim-search.component.scss']
})
export class ClaimSearchComponent implements OnInit {
	tempRow: any[] = [];
	rows: any[] = [];
	@ViewChild('claimSearch') claimSearch: ElementRef;
	@ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
	public columns: TableColumn[] = [];
	@ViewChild('checkbox', { static: false }) public checkbox!: TemplateRef<any>;
	pagePayload: any = {
		limit: 50,
		page: 1,
		offset: 0,
	};
	count!: number;
	isLoading: boolean = false;
	SelectionType = SelectionType;
	selected: any[] = [];

	constructor(private router: Router, private ds: DataService, private toastr: ToastService) { }

	ngOnInit(): void {
		this.createColumns();
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			const searchEvt = fromEvent(this.claimSearch.nativeElement, "keyup").pipe(debounceTime(750), distinctUntilChanged()).subscribe((data: any) => {
				this.claimList(this.claimSearch.nativeElement.value)
			});
		});
	}

	/**
	 * @param row 
	 * @returns id of the row
	 */
	getId(row: any) {
		return row.claim_no;
	}

	/**
	 * @description: Create the columns for data table
	 */
	private createColumns(): void {
		setTimeout(() => {
			const cellTemplate: any = {
				checkbox: this.checkbox
			};
			this.columns = [];
			this.columns = claimColumns(cellTemplate);
		});
	}

	/**
	 * @description: Get the claim list from BE
	 */
	private claimList(searchText: string): void {
		if (!searchText) {
			return;
		}
		this.isLoading = true;
		const url: string = ApiRoutes.claim + searchText;
		// this.tempRow = [
		// 	{ CLAIM_NUMBER: 'C2066577', NAME1:'test name', LOSS_DATE: '01-28-2021', POLICY_NUMBER: 'uyuy7', STATE_CD: 'MA', AGENCY_NAME: 'jhgjhg', AGENCY_NUMBER: 'uguyg67' }
		// ];
		// this.rows = [...this.tempRow];
		// this.count = 1;
		// this.isLoading = false;
		this.tempRow = [];
		this.rows = [];
		this.count = 0;
		this.ds.get(url).subscribe(res => {
			if (!!res && res.REF_CUR_ARG) {
				this.tempRow = res.REF_CUR_ARG;
				this.rows = [...this.tempRow];
				this.count = this.rows.length;
			} 
			// else if (res['E-001']) {
			// 	this.toastr.error(res['E-001'], 'Error');
			// }
			this.isLoading = false;
		}, err => {
			console.log(err)
			this.isLoading = false;
		});
	}

	/**
	 * @description: Event that is triggered on the page change of data table
	 * @param e: page change event
	 */
	onPageChange(e: any): void {
		this.pagePayload.offset = e.offset * 10;
		// this.inboxList();
	}

	onSelect(row: any) {
		console.log(row)
	}

	/**
	 * @description: Change event of data table limit
	 * @param limit limit value
	 */
	limitChangeAction(limit: number): void {
		console.log(limit)
	}

	/**
	 * @description Row activate action handler
	 * @param e row event
	 */
	onActivate(e: any): void {
		if (e.type === "click" && e.column["prop"] === "CLAIM_NUMBER") {
			this.router.navigate([APP_ROUTES.claim, e.row.CLAIM_NUMBER]);
		}
	}
}