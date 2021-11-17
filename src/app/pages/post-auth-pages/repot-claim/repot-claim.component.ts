import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APP_ROUTES } from 'src/app/shared/routes';

import { GlobalService } from '../../../shared/services/global.service';

@Component({
	selector: 'app-repot-claim',
	templateUrl: './repot-claim.component.html',
	styleUrls: ['./repot-claim.component.scss']
})
export class RepotClaimComponent implements OnInit {
	isSubmitting: boolean = false;
	form!: FormGroup;
	subs: Subscription = new Subscription();

	constructor(private gs: GlobalService, private router: Router) {
		const submitListener = this.gs.reportClaimSubmit$.subscribe((data: boolean) => {
			if (data) {
				this.submit();
			}
		});
		this.subs.add(submitListener);
	}

	ngOnInit(): void {
		this.intiForm();
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
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
		this.form = new FormGroup({
			policy_number: new FormControl('', [Validators.required]),
			loss_date: new FormControl('', [Validators.required]),
		}, { 'updateOn': 'change' });
	}

	/**
	 * @description: submit action handler
	 */
	 submit(): void {
		if (this.form.invalid) {
			this.isSubmitting = true;
			return;
		}
		this.isSubmitting = false;
		this.router.navigate([APP_ROUTES.reportClaim, this.form.get('policy_number')?.value])
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