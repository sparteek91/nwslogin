import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-table-card',
	templateUrl: './table-card.component.html',
	styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent implements OnInit {
	@Input() mobileViewColumns: any;
	@Input() rows: any;
	@Input() rowIndex!: number;
	@Input() mobileViewActions: any;
	@Output() action: EventEmitter<any> = new EventEmitter();
	
	constructor() { }

	ngOnInit(): void {
		// console.log(this.rowIndex);
		// console.log(this.rows)
	}

	ngOnChanges(changes: SimpleChanges): void {
		for (const propName in changes) {
			const change = changes[propName];
			// const prevVal = change.previousValue;
			const curVal = change.currentValue;
			if (curVal.length) {
				this.mobileViewColumns = curVal;
				// console.log(this.mobileViewColumns)
			}
		}
	}

	actionHandler(actionType: string, item: any): void {
		this.action.emit({ flag: actionType, item: item })
	}
}