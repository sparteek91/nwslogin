import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../shared/services/data.service';
import { GlobalService } from '../../shared/services/global.service';
import { ApiRoutes, APP_ROUTES } from '../../shared/routes';
import { InfoPopupComponent } from '../../shared/modals/info-popup/info-popup.component';

@Component({
	selector: 'app-postauth-layout',
	templateUrl: './postauth-layout.component.html',
	styleUrls: ['./postauth-layout.component.scss']
})
export class PostauthLayoutComponent implements OnInit {

	constructor(private ds: DataService, public gs: GlobalService, private router: Router, private modalService: NgbModal) { }

	ngOnInit(): void {
		this.getVendorInfo();
	}

	private getVendorInfo(): void {
		this.ds.get(ApiRoutes.getVendorInfo).subscribe((res: any) => {
			if (!!res) {
				if (res.user.name) {
					res.user.name = res.user.name.split(',').join('');
				}
				this.gs.vendorInfo = res;
				if (!this.gs.vendorInfo.drug_license) {
					this.router.navigate([APP_ROUTES.profile]);
				} else if (this.gs.vendorInfo.vendor_status === 2) {
					this.openModal();
				}
			}
		}, err => console.log(err));
	}

	private openModal(): void {
		let ngbModalOptions: NgbModalOptions = {
			backdrop: 'static',
			keyboard: false,
			centered: true
		};
		const modalRef = this.modalService.open(InfoPopupComponent, ngbModalOptions);
		modalRef.componentInstance.data = {
			msg: 'Please contact support to get your account activated!',
			imgsrc: 'assets/img/onetablogo_mobile.svg',
			imgClass: 'text-center',
			headingTxt: '',
			msgClass: 'p-4 text-center text-bold',
			headingClass: '',
			isBtnGrp: false,
			okBtn: '',
			okBtnClass: '',
			cancelBtn: '',
			cancelBtnClass: '',
		};
	}

}
