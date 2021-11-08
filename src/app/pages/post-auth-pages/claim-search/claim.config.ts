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
            prop: 'claim_no',
            name: 'CLAIM #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'pointer underline',
        },
        {
            prop: 'business_name',
            name: 'LAST/BUSINESS NAME',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
        {
            prop: 'loss_date',
            name: 'LOSS DATE',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'policy_no',
            name: 'POLICY #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'state',
            name: 'State',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'agency_no',
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