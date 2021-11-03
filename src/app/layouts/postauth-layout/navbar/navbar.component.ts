import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { sideBarRoutes } from '../sidebar/sidebar.config';
import { AuthService } from '../../../shared/services/auth.service';
import { APP_ROUTES } from '../../../shared/routes';
import { InfoModalComponent } from '../../../pages/post-auth-pages/popups/info-modal/info-modal.component';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	routes: any = APP_ROUTES;
	isCollapsed: boolean = true;
	listTitles: any[] = [];
	private toggleButton: any;
	private sidebarVisible: boolean = false;

	constructor(private auth: AuthService, public element: ElementRef, private router: Router, private modalService: NgbModal) {

	}

	ngOnInit(): void {
		this.listTitles = sideBarRoutes.filter(listTitle => listTitle);
		const navbar: HTMLElement = this.element.nativeElement;
		this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
		this.router.events.subscribe((event: any) => {
			this.sidebarClose();
		});
	}

	logoutUser(): void {
		this.auth.logout();
	}

	sidebarToggle() {
		this.sidebarVisible === false ? this.sidebarOpen() : this.sidebarClose();
		// if (this.sidebarVisible === false) {
		// 	this.sidebarOpen();
		// } else {
		// 	this.sidebarClose();
		// }
	}

	sidebarOpen() {
		const toggleButton = this.toggleButton;
		const html = document.getElementsByTagName('html')[0];
		const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
		setTimeout(() => {
			toggleButton.classList.add('toggled');
		}, 500);

		html.classList.add('nav-open');
		if (window.innerWidth < 991) {
			mainPanel.style.position = 'fixed';
		}
		this.sidebarVisible = true;
	}

	sidebarClose() {
		const html = document.getElementsByTagName('html')[0];
		const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
		if (window.innerWidth < 991) {
			setTimeout(() => {
				mainPanel.style.position = '';
			}, 500);
		}
		this.toggleButton.classList.remove('toggled');
		this.sidebarVisible = false;
		html.classList.remove('nav-open');
	}

	collapse() {
		this.isCollapsed = !this.isCollapsed;
		const navbar = document.getElementsByTagName('nav')[0];
		if (!this.isCollapsed) {
			navbar.classList.remove('navbar-transparent');
			navbar.classList.add('bg-white');
		} else {
			navbar.classList.add('navbar-transparent');
			navbar.classList.remove('bg-white');
		}
	}

	logout(): void {
		const ngbModalOptions: NgbModalOptions = {
			backdrop: 'static',
			keyboard: false,
			size: 'sm',
		}
		const modalRef: any = this.modalService.open(InfoModalComponent, ngbModalOptions);
		const centerStyle = 'display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-align: center; -ms-flex-align: center; align-items: center; min-height: calc(100% - (.5rem * 2));';
		modalRef._windowCmptRef.instance._elRef.nativeElement.children[0].setAttribute('style', centerStyle);
		modalRef.componentInstance.payload = {
			title: '',
			msg: 'Are you sure you want to log out?',
			cancelBtn: 'Cancel',
			okBtn: 'Yes, log out'
		};
		modalRef.componentInstance.action.subscribe((data: any) => {
			if (data) {
				this.auth.logout();
			}
		});
	}
}