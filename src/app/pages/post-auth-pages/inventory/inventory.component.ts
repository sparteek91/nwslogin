import { Component, OnInit, TemplateRef, ViewChild, ChangeDetectorRef, HostListener } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

import { DataService } from '../../../shared/services/data.service';
import { IProduct } from '../../../interfaces';
import { ApiRoutes, APP_ROUTES } from '../../../shared/routes';
import { inventoryColumns, mobileViewActions, dtHeaderConfig } from './inventory.config';
import { ToastService } from '../../../shared/services/toastr.service';

@Component({
	selector: 'app-inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
	dtHeaderConfig = dtHeaderConfig;
	active: number = 1;
	tempRow: IProduct[] = [];
	rows: IProduct[] = [];
	public columns: TableColumn[] = [];
	@ViewChild("actionR", { static: false }) public actionR: TemplateRef<any>;
	@ViewChild("snoR", { static: false }) public snoR: TemplateRef<any>;
	@ViewChild("statusR", { static: false }) public statusR: TemplateRef<any>;
	pagePayload: any = {
		limit: 20,
		page: 1
	};
	count: number;
	isDataLoaded: boolean = false;
	isMobileViewPrepared: boolean = false;
	mobileViewColumns: TableColumn[] = [];
	mobileViewActions: any = mobileViewActions;

	constructor(private ds: DataService, private router: Router, private toastr: ToastService, private cdr: ChangeDetectorRef) { }

	@HostListener('window:resize', ['$event'])
	getScreenSize(event?: any) {
		if (window.innerWidth <= 576 && !this.isMobileViewPrepared) {
			this.isMobileViewPrepared = true;
			this.prepareMobileView()
		} else if (window.innerWidth > 576 && this.isMobileViewPrepared){
			this.isMobileViewPrepared = false
		}
	}

	ngOnInit(): void {
		this.createColumns();
	}

	getId(row: any) {
		return row.id;
	}

	createColumns(): void {
		setTimeout(() => {
			const cellTemplate: any = {
				action: this.actionR,
				sno: this.snoR,
				status: this.statusR
			};
			this.columns = [];
			this.columns = inventoryColumns('inventoryColumns', cellTemplate);
			this.getScreenSize();
			this.getInventoryList();
		});
	}

	tabChange(e: any): void {
		if (this.active === 2) {
			this.pagePayload.is_active = 'True';
		} else if (this.active === 3) {
			this.pagePayload.is_active = 'False';
		} else {
			delete this.pagePayload.is_active;
		}
		this.count = 0;
		this.tempRow = [];
		this.rows = [];
		this.getInventoryList();
	}

	private getInventoryList(): void {
		this.isDataLoaded = false;
		const url: string = this.ds.formUrlParam(ApiRoutes.allProducts, this.pagePayload);
		this.ds.get(url).subscribe((data: any) => {
			if (data.count) {
				this.count = data.count;
				this.tempRow = data.results;
				this.rows = [...this.tempRow];
			}
			this.isDataLoaded = true;
		}, err => console.log(err));
	}

	childActionHandler(e: any): void {
		this.rowAction(e.flag, e.item);
	}

	rowAction(flag: string, product: IProduct): void {
		if (flag === 'view') {
			this.router.navigate([APP_ROUTES.inventory + APP_ROUTES.slash + product.id]);
		}
	}

	onPageChange(e: any): void {
		this.pagePayload.page = e.offset > -1 ? e.offset + 1 : e.page;
		this.getInventoryList();
	}

	statusChange(e: any, row: IProduct, index: number) {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append('id', String(row.id));
		formdata.append('is_outofstock', String(!row.is_outofstock));
		this.ds.patch(ApiRoutes.updateProduct, formdata).subscribe((data: any) => {
			if (data.id) {
				this.tempRow[index].is_outofstock = data.is_outofstock;
				this.toastr.success('Product updated Successfully.');
			}
			this.cdr.markForCheck();
		}, err => console.log(err));
	}

	private prepareMobileView(): void {
		const a: any = [...this.columns];
		const columns: any[] = a.filter((i: any) => i.isMobileView);
		this.mobileViewColumns = columns;
	}

	dtActionHandler(e: any): void {
		if (e.actionType === 'add') {
			this.router.navigate([APP_ROUTES.inventory + APP_ROUTES.slash + APP_ROUTES.add]);
		} else if (e.actionType === 'export') {
			this.export();
		}
	}

	private export(): void {
		let fileName : string = 'products';
		this.ds.downloadDocumentBlob(ApiRoutes.exportProducts,fileName, '.xls', 'application/json').subscribe((res: any) => {
			if (!!res && res.status === 200) {
				console.log(res);
				this.toastr.success('Products export successfully.');
			}
		}, err => console.log(err));
	}
}