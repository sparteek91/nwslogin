import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';

import { claimColumns } from './claim.config';

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
		limit: 10,
		page: 1,
		offset: 0,
	};
	count!: number;
	isLoading: boolean = true;

	constructor() { }

	ngOnInit(): void {
		this.createColumns();
	}

	/**
	 * @param row 
	 * @returns id of the row
	 */
	getId(row: any) {
		return row.id;
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
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
				{ claim_no: 'C86378903', policy_no: '86G737GG74', agency_no: '10/12/2021', loss_date: '29/01/2021', business_name: 'ALBERT, SALVATORE J JR', state: 'MA' },
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
}