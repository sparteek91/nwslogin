import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent, SelectionType, TableColumn } from '@swimlane/ngx-datatable';

import { claimFileCloumns } from '../claim.config';

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
	isLoading: boolean = true;
	SelectionType = SelectionType;
	fileSelected: any[] = [];

	ngOnInit(): void {
		this.createColumns();
	}

	/**
	 * @param row 
	 * @returns id of the row
	 */
	getFileId(row: any) {
		return row.item;
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
	 * @description: Get the claim list from BE
	 */
	private fileList(): void {
		this.isLoading = true;
		setTimeout(() => {
			this.fileTempRow = [
				{ item: 'PROPERTY FIRST REPORT', CLMT: '86G737GG74', description: 'WILLIAM R. BLAKE 01/01/2021 - 03/08/2021', date: '29/01/2021' },
				{ item: 'DIAGRAM', CLMT: '86G737GG74', description: 'WILLIAM R. BLAKE', date: '29/01/2021' },
			];
			this.fileRows = [...this.fileTempRow];
			this.fileCount = this.fileRows.length;
			this.isLoading = false;
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

	onFileSelect(row: any) {
		console.log(row)
	}

	/**
	 * @description: Change event of data table limit
	 * @param limit limit value
	 */
	limitChangeAction(limit: number): void {
		console.log(limit)
	}
}