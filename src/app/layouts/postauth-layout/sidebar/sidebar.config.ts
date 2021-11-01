import { APP_ROUTES } from "../../../shared/routes";

export interface RouteInfo {
    id?: string;
    path: string;
    friendlyPath?: string;
    title: string;
    icon: string;
    imageUrl: string;
    class: string;
    children?: any;
    isVisible?: boolean;
}

export const VENDORROUTES: RouteInfo[] = [
    {
        id: 'dashboardID',
        path: APP_ROUTES.dashboard,
        friendlyPath: APP_ROUTES.slash + APP_ROUTES.dashboard,
        title: 'Dashboard',
        icon: 'nc-bank',
        imageUrl: 'assets/img/sidebar/dashboard.svg',
        class: '',
        children: [],
        isVisible: true
    },
    {
        id: 'profileID',
        path: APP_ROUTES.profile,
        friendlyPath: APP_ROUTES.slash + APP_ROUTES.profile,
        title: 'Profile',
        icon: '',
        imageUrl: '',
        class: '',
        children: [],
        isVisible: false
    },
];