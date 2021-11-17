import { environment } from "../../../environments/environment";

export class ApiRoutes {
	public static apiBaseUrl: string = environment.apiBaseUrl;

	// pre auth
	public static get login(): string {
		return this.apiBaseUrl + ":8010/v1/ax/login";
	}

	public static get claim(): string {
		return this.apiBaseUrl + ":8080/claimSearch/";
	}
}