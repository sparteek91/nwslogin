import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent, SelectionType, TableColumn } from '@swimlane/ngx-datatable';

import { claimFileCloumns, claimantsCloumns } from '../claim.config';

@Component({
	selector: 'app-claim-summary',
	templateUrl: './claim-summary.component.html',
	styleUrls: ['./claim-summary.component.scss']
})
export class ClaimSummaryComponent implements OnInit {
	fileTempRow: any[] = [];
	fileRows: any[] = [];
	@ViewChild(DatatableComponent, { static: false }) fileTable!: DatatableComponent;
	public fileColumns: TableColumn[] = [];
	@ViewChild('fileCheckbox', { static: false }) public fileCheckbox!: TemplateRef<any>;
	@ViewChild('fileAction', { static: false }) public fileAction!: TemplateRef<any>;
	filePagePayload: any = {
		limit: 10,
		page: 1,
		offset: 0,
	};
	fileCount!: number;
	fileSelected: any[] = [];
	isLoadingFile: boolean = true;

	claimantTempRow: any[] = [];
	claimantRows: any[] = [];
	@ViewChild(DatatableComponent, { static: false }) claimantTable!: DatatableComponent;
	public claimantColumns: TableColumn[] = [];
	@ViewChild('claimantCheckbox', { static: false }) public claimantCheckbox!: TemplateRef<any>;
	// @ViewChild('claimantAction', { static: false }) public claimantAction!: TemplateRef<any>;
	claimantPagePayload: any = {
		limit: 10,
		page: 1,
		offset: 0,
	};
	claimantCount!: number;
	claimantSelected: any[] = [];
	isLoadingClaimant: boolean = true;

	SelectionType = SelectionType;

	ngOnInit(): void {
		this.createColumns();
		this.createClaimantsColumn();
	}

	/**
	 * @param row 
	 * @returns id of the row
	 */
	getFileId(row: any) {
		return row.item;
	}

	getclaimantId(row: any) {
		return row.id;
	}

	/**
	 * @description: Create the columns for data table
	 */
	private createColumns(): void {
		setTimeout(() => {
			const cellTemplate: any = {
				checkbox: this.fileCheckbox,
				action: this.fileAction
			};
			this.fileColumns = [];
			this.fileColumns = claimFileCloumns(cellTemplate);
			console.log(this.fileColumns)
			this.fileList();
		});
	}

	/**
	 * @description: Create the columns for data table
	 */
	private createClaimantsColumn(): void {
		setTimeout(() => {
			const cellTemplate: any = {
				checkbox: this.claimantCheckbox
			};
			this.claimantColumns = [];
			this.claimantColumns = claimantsCloumns(cellTemplate);
			this.claimantList();
		});
	}

	/**
	 * @description: Get the claim list from BE
	 */
	private fileList(): void {
		this.isLoadingFile = true;
		setTimeout(() => {
			this.fileTempRow = [
				{ item: 'PROPERTY FIRST REPORT', CLMT: '86G737GG74', description: 'WILLIAM R. BLAKE 01/01/2021 - 03/08/2021', date: '29/01/2021' },
				{ item: 'DIAGRAM', CLMT: '86G737GG74', description: 'WILLIAM R. BLAKE', date: '29/01/2021' },
			];
			this.fileRows = [...this.fileTempRow];
			this.fileCount = this.fileRows.length;
			this.isLoadingFile = false;
		}, 500);
	}
	
	private claimantList(): void {
		this.isLoadingClaimant = true;
		setTimeout(() => {
			this.claimantTempRow = [
				{ id: 1, claimant: '001 TARJA LAMBERT', cms: '-', line: 'HQ', item: '001', cov: 'COV A', exam: 'WLAMB', reserve: '$3000.00', paid: '$19767.00', status: 'OPEN', expense: '-', recovery: '-' },
			];
			this.claimantRows = [...this.claimantTempRow];
			this.claimantCount = this.claimantRows.length;
			this.isLoadingClaimant = false;
		}, 500);
	}

	/**
	 * @description: Event that is triggered on the page change of data table
	 * @param e: page change event
	 */
	onFilePageChange(e: any): void {
		this.filePagePayload.offset = e.offset * 10;
		// this.fileList();
	}

	/**
	 * @description: Event that is triggered on the page change of data table
	 * @param e: page change event
	 */
	onClaimantPageChange(e: any): void {
		this.claimantPagePayload.offset = e.offset * 10;
	}

	onFileSelect(row: any) {
		console.log(row)
	}

	onclaimantSelect(row: any): void {
		console.log(row);
	}

	/**
	 * @description: Change event of data table limit
	 * @param limit limit value
	 */
	limitChangeAction(limit: number): void {
		console.log(limit)
	}
}