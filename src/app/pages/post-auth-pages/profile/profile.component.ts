import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IVendorInfo } from '../../../interfaces';
import { GlobalService } from '../../../shared/services/global.service';
import { DataService } from '../../../shared/services/data.service';
import { ToastService } from '../../../shared/services/toastr.service';
import { ApiRoutes } from 'src/app/shared/routes';
import { InfoPopupComponent } from '../../../shared/modals/info-popup/info-popup.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	active: number = 1;
	form1: FormGroup = new FormGroup({});
	form2: FormGroup = new FormGroup({});
	isNext: boolean = false;
	isSubmitting: boolean = false;
	vendorInfo: IVendorInfo = this.gs.vendorInfo;
	private subs: Subscription = new Subscription();

	constructor(private gs: GlobalService, private ds: DataService, private modalService: NgbModal, private toastr: ToastService) { }

	ngOnInit(): void {
		this.intiForm();
	}

	get formData1() { return this.form1.controls }

	get formData2() { return this.form2.controls }

	private intiForm(): void {
		this.form1 = new FormGroup({
			name: new FormControl({ value: this.vendorInfo.user?.name, disabled: true }, [Validators.required]),
			email: new FormControl({ value: this.vendorInfo.user?.email, disabled: true }, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			phone_no: new FormControl({ value: this.vendorInfo.user?.phone_no, disabled: true }, [Validators.required]),
			primary_contact_name: new FormControl(this.vendorInfo.primary_contact_name),
			primary_contact_no: new FormControl(this.vendorInfo.primary_contact_no),
			address_line: new FormControl(this.vendorInfo.address?.address_line, [Validators.required]),
		}, { 'updateOn': 'change' });

		this.form2 = new FormGroup({
			pincode: new FormControl(this.vendorInfo.address?.pincode, [Validators.required]),
			city: new FormControl(this.vendorInfo.address?.city, [Validators.required]),
			state: new FormControl(this.vendorInfo.address?.state, [Validators.required]),
			country: new FormControl({value: 'India', disabled: true}, [Validators.required]),
			gstin: new FormControl(this.vendorInfo?.gstin, [Validators.required]),
			pan: new FormControl(this.vendorInfo?.pan, [Validators.required]),
			aadhar: new FormControl(''),
			drug_license: new FormControl(this.vendorInfo?.drug_license, [Validators.required]),
		}, { 'updateOn': 'change' });

		const pinCodeChange: any = this.form2.get('pincode')?.valueChanges.subscribe((data: string) => {
			if (data.length === 6) {
				this.getAddressFromPincode(data);

			}
		});
		this.subs.add(pinCodeChange);
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	next(): void {
		if (this.form1.invalid) {
			this.isNext = true;
			return;
		}
		this.isNext = false;
		this.active = 2;
	}

	private getAddressFromPincode(pincode: string): void {
		const payload: any = {
			pincode: pincode
		};
		const url: string = this.ds.formUrlParam(ApiRoutes.getAddressFromPincode, payload);
		this.ds.get(url).subscribe((res: any) => {
			if (!!res) {
				this.form2.get('country')?.setValue(res.country);
				this.form2.get('state')?.setValue(res.state);
			}
		}, err => console.log(err));
	}

	submitHandler(): void {
		if (this.form1.invalid || this.form2.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		this.ds.put(ApiRoutes.getVendorInfo, this.payload()).subscribe((res: any) => {
			if (!!res && !!res.id) {
				this.gs.vendorInfo = res;
				this.active = 1;
				if (res.vendor_status === 2) {
					this.openModal();
				}
				this.toastr.success('Profile updated successfully!')
			}
		}, err => console.log(err));
	}

	cancel(): void {
		this.active = 1;
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
			primaryInfoTextClass: 'text-center'
		};
	}

	private payload = (): any => {
		return {
			address: {
				address_line: this.form1.get('address_line')?.value,
				city: this.form2.get('city')?.value,
				state: this.form2.get('state')?.value,
				country: this.form2.get('country')?.value,
				pincode: this.form2.get('pincode')?.value
			},
			primary_contact_name: this.form1.get('primary_contact_name')?.value,
			primary_contact_no: this.form1.get('primary_contact_no')?.value,
			aadhar: this.form2.get('aadhar')?.value,
			pan: this.form2.get('pan')?.value,
			gstin: this.form2.get('gstin')?.value,
			drug_license: this.form2.get('drug_license')?.value,
		}
	}
}