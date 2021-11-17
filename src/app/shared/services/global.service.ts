import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    reportClaimSubmit = new Subject<any>();
	reportClaimSubmit$ = this.reportClaimSubmit.asObservable();

    constructor() { }

    // report a claim proceed
	reportClaimProceed(data: boolean) {
		this.reportClaimSubmit.next(data);
	}
	// ----------------------------------------------------------
}