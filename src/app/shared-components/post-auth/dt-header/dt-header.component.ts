import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDtHeaderConfig } from '../../../interfaces'

@Component({
	selector: 'app-dt-header',
	templateUrl: './dt-header.component.html',
	styleUrls: ['./dt-header.component.scss']
})
export class DtHeaderComponent implements OnInit {
	@Input() dtHeaderConfig: IDtHeaderConfig;
	@Output() action: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
		console.log(this.dtHeaderConfig)
	}

	actionHandler(actionType: string, data?: any): void {
		this.action.emit({ actionType: actionType, data: data });
	}

}
