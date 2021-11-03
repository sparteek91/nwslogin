import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent, TableColumn } from '@swimlane/ngx-datatable';

import { inboxColumns } from './inbox.config';

@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
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
			this.columns = inboxColumns(cellTemplate);
			this.inboxList();
		});
	}

	/**
	 * @description: Get the inbox list from BE
	 */
	private inboxList(): void {
		this.isLoading = true;
		setTimeout(() => {
			this.tempRow = [
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST REPORT', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
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