import { APP_ROUTES } from "../../../shared/routes";

export interface RouteInfo {
    id?: string;
    path: string;
    friendlyPath?: string;
    title: string;
    icon: string;
    imageUrl: string;
    activeImageUrl: string;
    class: string;
    children?: any;
    isVisible?: boolean;
}

export const sideBarRoutes: RouteInfo[] = [
    {
        id: 'inboxID',
        path: APP_ROUTES.inbox,
        friendlyPath: APP_ROUTES.slash + APP_ROUTES.inbox,
        title: '',
        icon: '',
        imageUrl: 'assets/img/sidebar/inbox.png',
        activeImageUrl: 'assets/img/sidebar/inbox-active.png',
        class: '',
        children: [],
        isVisible: true
    },
    {
        id: 'claimSearchID',
        path: APP_ROUTES.claim,
        friendlyPath: APP_ROUTES.slash + APP_ROUTES.claim,
        title: '',
        icon: '',
        imageUrl: 'assets/img/sidebar/search.png',
        activeImageUrl: 'assets/img/sidebar/search-active.png',
        class: '',
        children: [],
        isVisible: true
    },
    // {
    //     id: 'profileID',
    //     path: APP_ROUTES.profile,
    //     friendlyPath: APP_ROUTES.slash + APP_ROUTES.profile,
    //     title: 'Profile',
    //     icon: '',
    //     imageUrl: '',
    //     class: '',
    //     children: [],
    //     isVisible: false
    // },
];