import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

import { APP_ROUTES } from '../../../shared/routes';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	title: string;
	activatedRoute!: ActivatedRouteSnapshot;
	routes: any = APP_ROUTES;

	constructor(private route: ActivatedRoute, private router: Router, private gs: GlobalService) {
		this.router.events
			.pipe(
				filter(event => event instanceof NavigationEnd),
				map(() => this.route.snapshot),
				map(route => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				})
			)
			.subscribe((route: ActivatedRouteSnapshot) => {
				// console.log(route);
				this.activatedRoute = route;
				this.title = route.data.title
			});
	}

	ngOnInit(): void {}

	navigate(path: string): void {
		this.router.navigate([path]);
	}

	validateForm(): void {
		this.gs.reportClaimProceed(true);
	}
}