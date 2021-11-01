import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
// import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from "@angular/router";

import { ApiRoutes, APP_ROUTES } from "../routes";
import { LocalStorage } from "./storage.service";

@Injectable()
export class AuthService {
	private authToken: string = '';
	private authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private initialDataFromStorage: string[] = ["nws-token"];

	constructor(private http: HttpClient, private ls: LocalStorage, private router: Router) {
		this.initialDataFromStorage.forEach((value: any) => {
			// this[value] = this.ls.getItem(value);
			if (value === "nws-token") {
				const data: any = this.ls.getItem(value);
				if (data) {
					this.token = 'random-token';
					this.authToken = 'random-token';
				}
			}
		});
	}

	public login(payload: any) {
		// return this.http.post<any>(url, payload).pipe(map((data: any) => {
		//     if (!!data && data.access_token) {
		//         this.token = data.access_token;
		// 		this.ls.setItem('nws-token', JSON.stringify(data));
		//     }
		//     return data;
		// }));
		if (!!payload) {
			this.token = 'random-token';
			this.ls.setItem('nws-token', this.token);
			this.router.navigate([APP_ROUTES.inbox]);
		}
	}

	/**
	 * Login action
	 * @param token is JWT token
	 */
	public set token(token: string) {
		this.authToken = token;
		this.changeAuthState = !!token;
	}

	//* get auth token */
	public get token(): string {
		return this.authToken ? this.authToken : "";
	}

	/**
	 * Change auth state of a user
	 * @param newState of the user
	 */
	public set changeAuthState(newState: boolean) {
		this.authState.next(newState);
	}

	//** Method to check if user logged in */
	public isAuthenticated(): boolean {
		return !!this.token;
	}

	//** Logiut action */
	public logout(): void {
		this.ls.clear();
		this.token = null!;
		this.changeAuthState = !!this.token;
		// this.router.navigate([APP_ROUTES.login]);
		window.location.reload();
	}
}