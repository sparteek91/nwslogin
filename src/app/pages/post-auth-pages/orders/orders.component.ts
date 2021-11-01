import { Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumn } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

import { orderColumns, mobileViewActions } from './orders.config';
import { DataService } from '../../../shared/services/data.service';
import { ApiRoutes, APP_ROUTES } from '../../../shared/routes';
import { IOrder } from '../../../interfaces';

@Component({
	selector: 'app-orders',
	templateUrl: './orders.component.html',
	styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
	active: number = 1;
	tempRow: IOrder[] = [];
	rows: IOrder[] = [];
	public columns: TableColumn[] = [];
	@ViewChild("actionR", { static: false }) public actionR: TemplateRef<any>;
	@ViewChild("snoR", { static: false }) public snoR: TemplateRef<any>;
	pagePayload: any = {
		limit: 20,
		page: 1
	};
	count: number;
	isDataLoaded: boolean = false;
	isMobileViewPrepared: boolean = false;
	mobileViewColumns: TableColumn[] = [];
	mobileViewActions: any = mobileViewActions;

	constructor(private ds: DataService, private router: Router) {}

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
				sno: this.snoR
			};
			this.columns = [];
			this.columns = orderColumns('orders', cellTemplate);
			this.getScreenSize();
			this.getOrders();
		});
	}

	tabChange(e: any): void {
		this.count = 0;
		this.tempRow = [];
		this.rows = [];
		this.getOrders();
	}

	get listEndPoint(): string {
		let url!: string;
		switch (this.active) {
			case 1:
				url = this.ds.formUrlParam(ApiRoutes.newOrder, this.pagePayload);
				break;
			case 2:
				url = this.ds.formUrlParam(ApiRoutes.completedOrder, this.pagePayload);
				break;
			case 3:
				url = this.ds.formUrlParam(ApiRoutes.holdOrder, this.pagePayload);
				break;
		}
		return url;
	}

	private getOrders(): void {
		this.isDataLoaded = false;
		this.ds.get(this.listEndPoint).subscribe((data: any) => {
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

	rowAction(flag: string, order: IOrder): void {
		if (flag === 'view') {
			this.router.navigate([APP_ROUTES.order + APP_ROUTES.slash + order.id]);
		}
	}

	onPageChange(e: any): void {
		this.pagePayload.page = e.offset > -1 ? e.offset + 1 : e.page;
		this.getOrders();
	}

	private prepareMobileView(): void {
		const a: any = [...this.columns];
		const columns: any[] = a.filter((i: any) => i.isMobileView);
		this.mobileViewColumns = columns;
	}
}