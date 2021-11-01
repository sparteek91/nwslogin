import { environment } from "../../../environments/environment";

export class ApiRoutes {
	public static apiBaseUrl: string = environment.apiBaseUrl;

	// pre auth
	public static get register(): string {
		return this.apiBaseUrl + "user/register/";
	}

	public static get verifyRegister(): string {
		return this.apiBaseUrl + "user/verify-registration/";
	}

	public static get loginViaPassword(): string {
		return this.apiBaseUrl + "user/login/";
	}

	public static get getOTPForlogin(): string {
		return this.apiBaseUrl + "user/verify-request/";
	}

	public static get loginViaOTP(): string {
		return this.apiBaseUrl + "user/verify/";
	}
	 
	public static get forgotPasswordOTP(): string {
		return this.apiBaseUrl + "user/password-reset-otp/";
	}
	
	public static get verifyForgotPasswordOTP(): string {
		return this.apiBaseUrl + "user/validate-reset-otp/";
	}

	public static get resetPassword(): string {
		return this.apiBaseUrl + "user/reset-password/";
	}

	// post auth profile
	public static get getVendorInfo(): string {
		return this.apiBaseUrl + "user/profile-update/";
	}

	public static get getAddressFromPincode(): string {
		return this.apiBaseUrl + "master/pincode/";
	}

	// order
	public static get newOrder(): string {
		return this.apiBaseUrl + "vendor/new-order/";
	}

	public static get completedOrder(): string {
		return this.apiBaseUrl + "vendor/accepted-order/";
	}

	public static get holdOrder(): string {
		return this.apiBaseUrl + "vendor/hold-order/";
	}

	public static get orderDetail(): string {
		return this.apiBaseUrl + "vendor/order-detail/";
	}

	public static get acceptOrder(): string {
		return this.apiBaseUrl + "vendor/accept-order/";
	}

	public static get rejectOrder(): string {
		return this.apiBaseUrl + "vendor/reject-order/";
	}

	public static get uploadInvoice(): string {
		return this.apiBaseUrl + "vendor/upload-invoice/";
	}

	public static get verifyPackage(): string {
		return this.apiBaseUrl + "vendor/package-verify/";
	}

	public static get dispatchPackage(): string {
		return this.apiBaseUrl + "vendor/ready-to-dispatch/";
	}

	public static get getShippinglabel(): string {
		return this.apiBaseUrl + "vendor/shippinglabel/";
	}

	public static get emailShippinglabel(): string {
		return this.apiBaseUrl + "vendor/email-shipping-invoice/";
	}

	public static get holOrderCreate(): string {
		return this.apiBaseUrl + "vendor/hold-order-create/";
	}

	// inventory
	public static get allProducts(): string {
		return this.apiBaseUrl + "inventory/product-list/";
	}

	public static get updateProduct(): string {
		return this.apiBaseUrl + "inventory/update-product/";
	}

	public static get productDetail(): string {
		return this.apiBaseUrl + "inventory/product-details/";
	}

	public static get addProduct(): string {
		return this.apiBaseUrl + "inventory/add-product/";
	}

	public static get exportProducts(): string {
		return this.apiBaseUrl+ "inventory/export-product/";
	}
}