import { Component, OnInit } from '@angular/core';
import { VENDORROUTES } from './sidebar.config';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public menuItems: any[] = [];

	constructor() { }

	ngOnInit(): void {
		this.menuItems = VENDORROUTES.filter(menuItem => menuItem.isVisible);
	}

}
