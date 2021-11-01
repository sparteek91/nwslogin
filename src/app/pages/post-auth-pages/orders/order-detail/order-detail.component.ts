import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../../../shared/services/data.service';
import { ApiRoutes, APP_ROUTES } from '../../../../shared/routes';
import { InfoPopupComponent } from '../../../../shared/modals/info-popup/info-popup.component';
import { ActionFlowPopupsComponent } from '../action-flow-popups/action-flow-popups.component';
import { ToastService } from '../../../../shared/services/toastr.service';

@Component({
	selector: 'app-order-detail',
	templateUrl: './order-detail.component.html',
	styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
	routes: any = APP_ROUTES;
	orderDetail: any;
	
	constructor(private ds: DataService, public route: ActivatedRoute, private modalService: NgbModal, private ts: ToastService) { }

	ngOnInit(): void {
		const orderID: string = this.route.snapshot.paramMap.get('id')!;
		this.getOrderDetail(orderID);
	}

	private getOrderDetail(orderID: string, nextPopUps: boolean = false): void {
		const url: string = this.ds.formUrlParam(ApiRoutes.orderDetail, { order: orderID })
		this.ds.get(url).subscribe((res: any) => {
			if (!!res.data && res.data.id) {
				this.orderDetail = res.data;
				if (nextPopUps) {
					this.orderActionFlowPopup(nextPopUps);
				}
			}
		});
	}

	actionAcceptReject(action: string): void {
		let modalData: any = {
			action: action,
			imgClass: 'text-center',
			imgsrc: 'assets/img/cancel-order.png',
			headingTxt: action === 'accept' ? 'Accept Sales Order' : 'Reject Sales Order',
			headingClass: 'mt-2 mb-1 text-center',
			msg: 'Are you sure, you want to ' + action +' sales order',
			msgClass: 'mb-0 text-center text-muted',
			footerWrapperClass: 'justify-content-center',
			isBtnGrp: true,
			okBtn: action === 'accept' ? 'Yes, Accept Order' : 'Yes, Reject Order',
			okBtnClass: 'btn admin_btn_primary px-3 py-2',
			cancelBtn: 'Cancel',
			cancelBtnClass: 'btn admin_btn_tirtiary_outline px-3 py-2',
			url: action === 'accept' ? ApiRoutes.acceptOrder : ApiRoutes.rejectOrder,
			payload: { order_id: this.orderDetail.id }
		};
		this.openModal(modalData, action);
	}

	openModal(modalData: any, action: string): void {
		let ngbModalOptions: NgbModalOptions = {
			backdrop: 'static',
			keyboard: false,
			centered: true,
		};
		const modalRef = this.modalService.open(InfoPopupComponent, ngbModalOptions);
		modalRef.componentInstance.data = modalData;
		modalRef.result.then((data: any) => {
			if (data) {
				this.getOrderDetail(this.orderDetail.id, action === 'accept' ? true : false);
			}
		});
	}

	orderActionFlowPopup(showPreviousStepSuccess: boolean = false): void {
		let ngbModalOptions: NgbModalOptions = {
			backdrop: 'static',
			keyboard: false,
			centered: true,
		};
		const modalRef = this.modalService.open(ActionFlowPopupsComponent, ngbModalOptions);
		modalRef.componentInstance.data = {
			order: this.orderDetail,
			showPreviousStepSuccess: showPreviousStepSuccess,
		};
		modalRef.result.then((data: any) => {
			console.log(data)
			if (data) {
				// call get shipment label
				this.getOrderDetail(this.orderDetail.id);
			}
		});
	}

	downloadShippingLabel(): void {
		const url: string = this.ds.formUrlParam(ApiRoutes.getShippinglabel, {order: this.orderDetail.id});
		const fileName: string = 'shippinglabel' + this.orderDetail.id;
		this.ds.downloadDocumentBlob(url, fileName, '.pdf', 'application/json').subscribe((res: any) => {
			if (!!res && res.status === 200) {
			}
		}, err => {
			console.log(err)
		});
	}

	emailShippingLabel(): void {
		const url: string = this.ds.formUrlParam(ApiRoutes.emailShippinglabel, {order: this.orderDetail.id});
		this.ds.get(url).subscribe((res: any) => {
			if (!!res && res.message) {
				this.ts.success(res.message);
			}
		}, err => console.log(err));
	}
}
