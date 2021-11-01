import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-info-popup',
	templateUrl: './info-popup.component.html',
	styleUrls: ['./info-popup.component.scss']
})
export class InfoPopupComponent implements OnInit {
	@Input() data: any;

	constructor(public activeModal: NgbActiveModal, private ds: DataService) { }

	ngOnInit(): void {
		console.log(this.data);
	}

	okAction(): void {
		this.ds.post(this.data.url, this.data.payload).subscribe((data: any) => {
			if (data.data.is_accepted || data.data.is_rejected) {
				this.activeModal.close(true);
			}
		}, err => console.log(err));
	}
}
