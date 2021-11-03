import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-info-modal',
	templateUrl: './info-modal.component.html',
	styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
	@Input() payload: any;
	@Output() action: EventEmitter<boolean> = new EventEmitter<boolean>(false);

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit(): void {
		console.log(this.payload);
	}
	
	confirm(): void {
		this.action.emit(true);
		this.activeModal.close(true)
	}
}
