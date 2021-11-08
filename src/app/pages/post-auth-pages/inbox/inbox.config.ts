export function inboxColumns(cellTemplate: any = {}) {
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
            prop: 'insured',
            name: 'INSURED',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
        {
            prop: 'claim_no',
            name: 'CLAIM #',
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
            prop: 'agenct_no',
            name: 'AGENCY #',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'created_at',
            name: 'CREATED',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
        },
        {
            prop: 'pri',
            name: 'PRI',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: '',
            cellTemplate: cellTemplate.priority
        },
        {
            prop: 'reason',
            name: 'DIARY REASON',
            sortable: true,
            draggable: false,
            canAutoResize: true,
            cellClass: 'text-clip',
        },
    ];
    return columns;
}