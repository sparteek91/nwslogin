import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent, SelectionType, TableColumn } from '@swimlane/ngx-datatable';

import { claimColumns } from './claim.config';
import { APP_ROUTES } from '../../../shared/routes';

@Component({
	selector: 'app-claim-search',
	templateUrl: './claim-search.component.html',
	styleUrls: ['./claim-search.component.scss']
})
export class ClaimSearchComponent implements OnInit {
	tempRow: any[] = [];
	rows: any[] = [];
	@ViewChild(DatatableComponent, { static: false }) table!: DatatableComponent;
	public columns: TableColumn[] = [];
	@ViewChild('checkbox', { static: false }) public checkbox!: TemplateRef<any>;
	pagePayload: any = {
		limit: 50,
		page: 1,
		offset: 0,
	};
	count!: number;
	isLoading: boolean = true;
	SelectionType = SelectionType;
	selected: any[] = [];

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.createColumns();
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
			this.claimList();
		});
	}

	/**
	 * @description: Get the claim list from BE
	 */
	private claimList(): void {
		this.isLoading = true;
		setTimeout(() => {
			this.tempRow = [
				{ claim_no: 'C863789031', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789032', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789033', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789043', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789053', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789073', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863768903', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378e903', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789803', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C863789003', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86r378903', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C8637834903', policy_no: '86G737GG74', agency_nname: 'Test Name', agency_no: '20576', loss_date: '01/29/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
			];
			this.rows = [...this.tempRow];
			this.count = this.rows.length;
			this.isLoading = false;
		}, 500);
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
		if (e.type === "click" && e.column["prop"] === "claim_no") {
			this.router.navigate([APP_ROUTES.claim, e.row.claim_no]);
		}
	}
}