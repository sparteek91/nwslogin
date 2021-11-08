import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent, SelectionType, TableColumn } from '@swimlane/ngx-datatable';

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
	@ViewChild('priority', { static: false }) public priority!: TemplateRef<any>;
	pagePayload: any = {
		limit: 10,
		page: 1,
		offset: 0,
	};
	count!: number;
	isLoading: boolean = true;
	SelectionType = SelectionType;
	selected: any[] = [];

	constructor() { }

	ngOnInit(): void {
		this.createColumns();
	}

	/**
	 * @param row 
	 * @returns id of the row
	 */
	getId(row: any) {
		return row.item;
	}

	/**
	 * @description: Create the columns for data table
	 */
	private createColumns(): void {
		setTimeout(() => {
			const cellTemplate: any = {
				checkbox: this.checkbox,
				priority: this.priority
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
				{ item: 'CAT FIRST 1', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 2', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 3', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 3', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 4', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'MEDIUM', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 5', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'MEDIUM', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 6', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'MEDIUM', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 7', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'LOW', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 8', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'LOW', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 9', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'LOW', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 10', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'LOW', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 11', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 12', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 13', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 14', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
				{ item: 'CAT FIRST 15', insured: 'Sutherland,Kiefer', claim_no: 'C86378903', policy_no: '86G737GG74', agenct_no: '10/12/2021', created_at: '29/01/2021', pri: 'TOP', reason: 'The client call to inquierd some random long text reason' },
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
		// this.pagePayload.limit = limit;
	} 
}