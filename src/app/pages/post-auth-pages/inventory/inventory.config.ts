import { rupee } from '../../../shared/utility';
import { APP_ROUTES } from '../../../shared/routes';
import { IDtHeaderConfig } from  '../../../interfaces';

export const mobileViewActions: any = {
    view: APP_ROUTES.order
}

export const dtHeaderConfig: IDtHeaderConfig = {
    add: 'Add Product',
    export: 'Export'
}

export function inventoryColumns(key: string, cellTemplate: any = {}) {
    const inventoryColumns: any = [
        {
            prop: '',
            name: 'S no.',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.sno,
            isMobileView: false,
        },
        {
            prop: 'id',
            name: 'Product Id',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            isMobileView: true,
        },
        {
            prop: 'product_name',
            name: 'Product Name',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            isMobileView: true,
        },
        {
            prop: 'brand',
            name: 'Brand',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            isMobileView: true,
        },
        {
            prop: 'quantity',
            name: 'Quantity',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            isMobileView: true,
        },
        {
            prop: 'mrp',
            name: 'MRP',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            pipe: rupee(),
            isMobileView: true,
        },
        {
            prop: 'is_outofstock',
            name: 'Out of Stock',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.status,
            isMobileView: true,
            switch: true
        },
        {
            prop: '',
            name: 'Actions',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.action,
            isMobileView: false,
        },
    ];
    return inventoryColumns;
}