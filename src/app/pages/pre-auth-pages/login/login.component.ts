import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { APP_ROUTES, ApiRoutes } from '../../../shared/routes';
import { ToastService } from '../../../shared/services/toastr.service';
import { AuthService } from '../../../shared/services/auth.service';

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

	constructor(private auth: AuthService, private router: Router, private toastr: ToastService) { }

	ngOnInit(): void {
		this.intiForm();
	}

	get formData() {
		return this.form.controls;
	}

	private intiForm(): void {
		this.form = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
			password: new FormControl('', [Validators.required]),
		}, { 'updateOn': 'change' });
	}

	submit(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		// this.auth.loginViaPassword(ApiRoutes.loginViaPassword, this.form.value).subscribe((res: any) => {
		// 	if (!!res && res.access_token) {
		// 		// navigate to 
		// 		this.router.navigate([this.routes.dashboard]);
		// 	}
		// }, err => console.log(err));
	}
}