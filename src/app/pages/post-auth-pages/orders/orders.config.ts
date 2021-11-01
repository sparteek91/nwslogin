import { rupee, formatDate, formatTime } from '../../../shared/utility';
import { APP_ROUTES } from '../../../shared/routes';

export const mobileViewActions: any = {
    view: APP_ROUTES.order
}

export function orderColumns(key: string, cellTemplate: any = {}) {
    const orderColumns: any = [
        {
            isMobileView: false,
            prop: '',
            name: 'S No.',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.sno
        },
        {
            isMobileView: true,
            prop: 'order_ref_id',
            name: 'Booking Id',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            isMobileView: true,
            prop: 'products',
            name: 'Products',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            isMobileView: true,
            prop: 'amount_paid',
            name: 'Total Amount',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            pipe: rupee()
        },
        {
            isMobileView: true,
            prop: 'created_at',
            name: 'Date',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            pipe: formatDate()
        },
        {
            isMobileView: true,
            prop: 'created_at',
            name: 'Time',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            pipe: formatTime()
        },
        {
            isMobileView: true,
            prop: 'orderstatus',
            name: 'Order Status',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            isMobileView: false,
            prop: '',
            name: 'Actions',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.action
        },
    ];
    return orderColumns;
}