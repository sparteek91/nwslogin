import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';


import { APP_ROUTES, ApiRoutes } from '../../../shared/routes';
import { ToastService } from '../../../shared/services/toastr.service';
import { AuthService } from '../../../shared/services/auth.service';
import { DataService } from '../../../shared/services/data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	routes = APP_ROUTES;
	isSubmitting: boolean = false;
	form!: FormGroup;
	carousalOptions: OwlOptions = {
		loop: true,
		margin: 0,
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 800000000,
		autoplayHoverPause: false,
		navSpeed: 1500,
		lazyLoad: true,
		lazyLoadEager: 2,
		navText: [],
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			740: {
				items: 1
			},
			940: {
				items: 1
			},
		},
		nav: false
	}

	constructor(private ds: DataService, private auth: AuthService, private router: Router, private toastr: ToastService) { }

	ngOnInit(): void {
		this.intiForm();
	}

	/**
	 * @description: Returns the form controls
	 */
	get formData() {
		return this.form.controls;
	}

	/**
	 * @description: Init the login form
	 */
	private intiForm(): void {
		// Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
		this.form = new FormGroup({
			userid: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required]),
			// userid: new FormControl('mdeepthimahanti', [Validators.required]),
			// password: new FormControl('!MDw3Lc0m32N&D2021!', [Validators.required]),
			old_ticket: new FormControl(Math.floor(100000 + Math.random() * 900000)),
		}, { 'updateOn': 'change' });
	}

	/**
	 * @description: Login submit action handler
	 */
	submit(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		const url: string = this.ds.formUrlParam(ApiRoutes.login, this.form.value);
		this.auth.login(url, this.form.value);
		// console.log(url);
		// this.auth.login(url).subscribe((res: any) => {
		// 	console.log(res);
		// 	// if (!!res && res.access_token) {
		// 	// 	// navigate to 
		// 	// 	// this.router.navigate([this.routes.inbox]);
		// 	// }
		// }, (err: any) => console.log(err));
	}
}