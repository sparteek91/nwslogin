import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-dt-limit',
	templateUrl: './dt-limit.component.html',
	styleUrls: ['./dt-limit.component.scss']
})
export class DtLimitComponent implements OnInit {
	@Input() limit!: number;
	@Output() limitChangeAction: EventEmitter<any> = new EventEmitter();
	limitValue!: number;

	constructor() { }

	ngOnInit(): void {
		this.limitValue = this.limit;
	}

	/**
	 * @description: Change event of data table limit
	 * @param e change event
	 */
	onLimitChange(e: any): void {
		this.limitChangeAction.emit(+e.target.value);
	}
}