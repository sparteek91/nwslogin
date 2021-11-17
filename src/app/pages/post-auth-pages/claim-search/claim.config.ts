import { formatDate } from '../../../shared/utility';

export function claimColumns(cellTemplate: any = {}) {
    const columns: any = [
        {
            prop: '',
            name: '',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            width: 50,
            cellClass: '',
            headerCheckboxable: true,
            checkboxable: true,
            cellTemplate: cellTemplate.checkbox
        },
        {
            prop: 'CLAIM_NUMBER',
            name: 'CLAIM #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'pointer underline',
        },
        {
            prop: 'NAME1',
            name: 'LAST/BUSINESS NAME',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
        {
            prop: 'LOSS_DATE',
            name: 'LOSS DATE',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            pipe: formatDate('MM-dd-yyyy')
        },
        {
            prop: 'POLICY_NUMBER',
            name: 'POLICY #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'STATE_CD',
            name: 'State',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'AGENCY_NAME',
            name: 'AGENCY Name',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'AGENCY_NUMBER',
            name: 'AGENCY #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
    ];
    return columns;
}

export function claimFileCloumns(cellTemplate: any = {}) {
    const columns: any = [
        {
            prop: '',
            name: '',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            width: 50,
            cellClass: '',
            headerCheckboxable: true,
            checkboxable: true,
            cellTemplate: cellTemplate.checkbox
        },
        {
            prop: 'item',
            name: 'ITEM',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'pointer underline',
        },
        {
            prop: 'CLMT',
            name: 'CLMT#',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
        {
            prop: 'description',
            name: 'DESCRIPTION',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'date',
            name: 'CREATED ON',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: '',
            name: '',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.action
        },
    ];
    return columns;
}

export function claimantsCloumns(cellTemplate: any = {}) {
    const columns: any = [
        {
            prop: '',
            name: '',
            sortable: false,
            draggable: false,
            canAutoResize: true,
            width: 50,
            cellClass: '',
            headerCheckboxable: true,
            checkboxable: true,
            cellTemplate: cellTemplate.checkbox
        },
        {
            prop: 'claimant',
            name: 'CLAIMANT',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'pointer underline',
        },
        {
            prop: 'cms',
            name: 'CMS',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
        {
            prop: 'line',
            name: 'LINE',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'item',
            name: 'ITEM',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'cov',
            name: 'COV',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'exam',
            name: 'EXAM',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'reserve',
            name: 'RESERVE',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'paid',
            name: 'PAID',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'status',
            name: 'STATUS',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'expense',
            name: 'EXPENSE',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'recovery',
            name: 'RECOVERY',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        }
    ];
    return columns;
}