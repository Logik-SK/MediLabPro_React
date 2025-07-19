export const billingTableConfig = {
  columns: [
    { key: 'billNumber', label: 'Bill#', sortable: true, isFilterableColumn: true },
    { key: 'name', label: 'Name',sortable: true, isFilterableColumn: true },
    { key: 'mobile', label: 'Mobile', isFilterableColumn: true },
    { key: 'refDoctor', label: 'Ref Dr.', isFilterableColumn: true },
    { key: 'payable', label: 'Payable', isFilterableColumn: true },
    { key: 'paidAmt', label: 'Paid Amt', isFilterableColumn: true },
    { key: 'due', label: 'Due', isFilterableColumn: true },
    { key: 'discount', label: 'Discount', isFilterableColumn: true },
    { key: 'billDate', label: 'Bill Date', sortable: true, isFilterableColumn: true },
    { key: 'paymentStatus', label: 'Payment', isFilterableColumn: true },
    { key: 'status', label: 'Status', isFilterableColumn: true },
    { key: 'options', label: 'Options', isAction: true }
  ],

  rows: [
    {
      billNumber: '250514002',
      name: 'Tapan Patra',
      mobile: '9875500493',
      refDoctor: 'SELF',
      payable: 500,
      paidAmt: 0,
      due: 500,
      discount: 300,
      billDate: '14/05/2025',
      paymentStatus: 'Due',
      status: 'Pending'
    },
    {
      billNumber: '250514001',
      name: 'Dhruthi Sajja',
      mobile: '7993906844',
      refDoctor: 'SELF',
      payable: 1000,
      paidAmt: 1000,
      due: 0,
      discount: 200,
      billDate: '13/05/2025',
      paymentStatus: 'Paid',
      status: 'Completed'
    }
  ]
};
