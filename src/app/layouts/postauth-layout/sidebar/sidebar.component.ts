import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sideBarRoutes } from './sidebar.config';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public menuItems: any[] = [];

	constructor(private router: Router) {
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnInit(): void {
		this.menuItems = sideBarRoutes.filter(menuItem => menuItem.isVisible);
	}
}