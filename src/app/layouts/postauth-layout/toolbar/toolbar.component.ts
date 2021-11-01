import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
	title: string;

	constructor(private route: ActivatedRoute, private router: Router) {
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
				// console.log(route.data.title);
				this.title = route.data.title
			});
	}

	ngOnInit(): void { }
}
