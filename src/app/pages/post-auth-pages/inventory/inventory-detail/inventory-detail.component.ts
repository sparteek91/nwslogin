import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiRoutes, APP_ROUTES } from '../../../../shared/routes';
import { DataService } from '../../../../shared/services/data.service';
import { IProduct } from '../../../../interfaces';
import { ToastService } from '../../../../shared/services/toastr.service';

@Component({
	selector: 'app-inventory-detail',
	templateUrl: './inventory-detail.component.html',
	styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent implements OnInit {
	routes: any = APP_ROUTES;
	isEdit: boolean = false;
	productDetails: IProduct;
	productForm: FormGroup = new FormGroup({});
	numbersOnly: true;
	isSubmitting: boolean = false;
	selectedDocName: string;
	selectedDoc: any;
	productID: number;
	dummyImage: string = '../../../../../assets/img/oneTab-upload_icon.svg';

	constructor(private ds: DataService, public route: ActivatedRoute, private toastr: ToastService, public router: Router) { }

	ngOnInit(): void {
		let param: any = this.route.snapshot.paramMap.get('id')!;
		param === 'add' ? param : Number(param);
		if (param !== 'add') {
			this.productID = param;
			this.getProductDetail();
		} else {
			this.editView();
			this.isEdit = true;
		}
	}

	get productFormControl() { return this.productForm.controls };

	getProductDetail() {
		const url: string = this.ds.formUrlParam(ApiRoutes.productDetail, { product_id: this.productID })
		this.ds.get(url).subscribe((res: any) => {
			if (!!res && res.id) {
				this.isEdit = false;
				this.productDetails = res;
			}
		}, error => console.log(error));
	}

	editView(): void {
		this.productForm = new FormGroup({
			productName: new FormControl(this.productID ? this.productDetails.product_name : '', [Validators.required]),
			quantity: new FormControl(this.productID ? this.productDetails.quantity : '', [Validators.required]),
			image: new FormControl(this.productID ? this.productDetails.image : this.dummyImage, [Validators.required]),
			brand: new FormControl(this.productID ? this.productDetails.brand : '', [Validators.required]),
			mrp: new FormControl(this.productID ? this.productDetails.mrp : '', [Validators.required]),
			discount: new FormControl(this.productID ? this.productDetails.discount : ''),
			gst: new FormControl(this.productID ? this.productDetails.gst : '', [Validators.required]),
			returnAble: new FormControl(this.productID ? this.productDetails.is_returnable : '', [Validators.required]),
		}, { 'updateOn': 'change' });
	}

	submitHandler(): void {
		if (this.productForm.invalid) {
			this.isSubmitting = true;
			return;
		}
		if (!!this.productDetails && this.productDetails['id']) {
			// update Product
			this.ds.put(ApiRoutes.updateProduct, this.payload()).subscribe((res) => {
				if (!!res && !!res.id) {
					this.toastr.success('Product updated Successfully.');
					this.getProductDetail();
				}
			}, error => { console.log(error); })
		} else {
			// Add Product
			this.ds.post(ApiRoutes.addProduct, this.payload()).subscribe((res) => {
				if (!!res && !!res.id) {
					this.toastr.success('Product added Successfully.');
					this.router.navigate([APP_ROUTES.slash + APP_ROUTES.inventory]);
				}
			}, error => { console.log(error); })
		}

	}

	onFileChanged(event: any): void {
		if (event.target.files && event.target.files[0]) {
			this.selectedDoc = event.target.files[0];
			this.selectedDocName = event.target.files[0].name;
			var reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]); // read file as data url
			reader.onload = (e: any) => { // called once readAsDataURL is completed
				this.productForm.get('image')?.setValue(e.target.result);
				this.productForm.markAsDirty();
			}
		}
	}

	cancel() {
		if (!!this.productDetails && this.productDetails['id']) {
			this.isEdit = false;
		} else {
			this.router.navigate([APP_ROUTES.slash + APP_ROUTES.inventory]);
		}
	}

	payload() {
		const formdata = new FormData();
		if (!!this.productDetails && this.productDetails['id']) {
			formdata.append('id', this.productDetails.id.toString());
		}
		formdata.append('product_name', this.productForm.get('productName')?.value);
		formdata.append('quantity', this.productForm.get('quantity')?.value);
		formdata.append('brand', this.productForm.get('brand')?.value);
		formdata.append('mrp', this.productForm.get('mrp')?.value);
		formdata.append('discount', this.productForm.get('discount')?.value);
		formdata.append('gst', this.productForm.get('gst')?.value);
		formdata.append('is_returnable', this.productForm.get('returnAble')?.value);
		formdata.append('is_outofstock', this.productDetails?.is_outofstock.toString() ? this.productDetails?.is_outofstock.toString() : 'true');
		if (!!this.selectedDoc && this.selectedDocName) {
			formdata.append('image', this.selectedDoc);
		}
		return formdata;
	}
}