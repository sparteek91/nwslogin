import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../../../shared/services/data.service';
import { ApiRoutes } from '../../../../shared/routes';

@Component({
	selector: 'app-action-flow-popups',
	templateUrl: './action-flow-popups.component.html',
	styleUrls: ['./action-flow-popups.component.scss']
})
export class ActionFlowPopupsComponent implements OnInit {
	@Input() data: any;
	selectedDocName: string;
	selectedDoc: any;
	invoiceForm: FormGroup = new FormGroup({});
	isInvoiceSubmit: boolean = false;
	invoiceScreen: number = 1;
	
	packageScreen: number = 1;
	selectedPackageDoc1: any;
	selectedPackageDoc2: any;
	selectedPackageDoc3: any;
	selectedPackageDocName1: any;
	selectedPackageDocName2: any;
	selectedPackageDocName3: any;
	packageImgPreview1: string;
	packageImgPreview2: string;
	packageImgPreview3: string;
	isPackageSubmit: boolean = false;

	// dispatchScreen: number = 1;

	constructor(public activeModal: NgbActiveModal, private ds: DataService) { }

	ngOnInit(): void {
		console.log(this.data);
		if (this.data?.order.vendor_order_status.is_accepted && !this.data?.order.vendor_order_status.invoice_uploaded) {
			this.initInvoiceForm();
		}
	}

	private initInvoiceForm(): void {
		this.invoiceForm = new FormGroup({
			invoice_no: new FormControl('', [Validators.required]),
			invoice: new FormControl('', [Validators.required]),
			total_amount: new FormControl({value: this.data?.order.amount_paid, disabled: false}, [Validators.required]),
			med_order_id: new FormControl(this.data?.order.id),
		}, { 'updateOn': 'change' });
	}

	get invoiceFormControls() {
		return this.invoiceForm.controls;
	}

	onFileChanged(event: any): void {
		if (event.target.files && event.target.files[0]) {
			this.selectedDoc = event.target.files[0];
			this.selectedDocName = event.target.files[0].name;
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]); // read file as data url
			reader.onload = (e: any) => { // called once readAsDataURL is completed
				this.invoiceForm.get('invoice')?.setValue(e.target.result);
				this.invoiceForm.markAsDirty();
			}
		}
	}

	onPackageFileChanged(event: any, index: number): void {
		if (event.target.files && event.target.files[0]) {
			if (index === 1) {
				this.selectedPackageDoc1 = event.target.files[0];
				this.selectedPackageDocName1 = event.target.files[0].name;
			} else if (index === 2) {
				this.selectedPackageDoc2 = event.target.files[0];
				this.selectedPackageDocName2 = event.target.files[0].name;
			} else {
				this.selectedPackageDoc3 = event.target.files[0];
				this.selectedPackageDocName3 = event.target.files[0].name;
			}
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]); // read file as data url
			reader.onload = (e: any) => {
				if (index === 1) {
					this.packageImgPreview1 = e.target.result;
				} else if (index === 2) {
					this.packageImgPreview2 = e.target.result;
				} else {
					this.packageImgPreview3 = e.target.result;
				}
			}
		}
	}

	uploadInvoice(): void {
		if (this.invoiceForm.invalid) {
			this.isInvoiceSubmit = true;
			return;
		}
		this.isInvoiceSubmit = false;
		const formdata = new FormData();
		formdata.append('invoice', this.selectedDoc);
		formdata.append('invoice_no', this.invoiceForm.get('invoice_no')?.value);
		formdata.append('total_amount', this.invoiceForm.get('total_amount')?.value);
		formdata.append('med_order_id', this.invoiceForm.get('med_order_id')?.value);
		this.ds.post(ApiRoutes.uploadInvoice, formdata).subscribe((res: any) => {
			if (!!res && res.id) {
				this.data.showPreviousStepSuccess = true;
				this.invoiceForm.get('invoice')?.setValue(res.invoice);
				this.data.order.vendor_order_status.invoice_uploaded = true;
			}
		}, err => {
			if (err.error.errors.non_field_errors.raw_message[0].toLocaleLowerCase() === 'invoice amount mismatched') {
				this.invoiceScreen = 2;
			}
		});
	}

	putOnHold(): void {
		this.ds.post(ApiRoutes.holOrderCreate, {order: this.data.order.id}).subscribe((res: any) => {
			this.activeModal.close(true);
		}, err => console.log(err));
	}

	proceedPackageFlow(): void {
		if (this.packageScreen === 1) {
			this.packageScreen = 2;
			return;
		}
		if (!this.selectedPackageDoc1 && !this.selectedPackageDoc2 && !this.selectedPackageDoc3) {
			this.isPackageSubmit = true;
			return;
		}
		this.isPackageSubmit = false;
		const formdata = new FormData();
		formdata.append('med_order_id', this.data?.order.id);
		formdata.append('file_1', this.selectedPackageDoc1 ? this.selectedPackageDoc1 : '');
		formdata.append('file_2', this.selectedPackageDoc2 ? this.selectedPackageDoc2 : '');
		formdata.append('file_3', this.selectedPackageDoc3 ? this.selectedPackageDoc3 : '');
		this.ds.post(ApiRoutes.verifyPackage, formdata).subscribe((res: any) => {
			if (!!res && res.id) {
				this.selectedPackageDoc1 = res.file_1;
				this.selectedPackageDoc2 = res.file_2;
				this.selectedPackageDoc3 = res.file_3;
				this.data.order.vendor_order_status.package_verify = true;
			}
		}, err => console.log(err));
	}

	dispatch(): void {
		const payload: any = { order: this.data.order.id };
		this.ds.post(ApiRoutes.dispatchPackage, payload).subscribe((res: any) => {
			this.activeModal.close(true);
		}, err => console.log(err));
	}
}
