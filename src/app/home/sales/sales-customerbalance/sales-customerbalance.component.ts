import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-customerbalance',
  templateUrl: './sales-customerbalance.component.html',
  styleUrls: ['./sales-customerbalance.component.scss']
})
export class SalesCustomerbalanceComponent implements OnInit {

  customerbalance: any = [];
  constructor() { }

  ngOnInit() {

    this.customerbalance = [
      {
        id: 1,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 2,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 3,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 4,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 5,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 6,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 7,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 8,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 9,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 10,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 11,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 12,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 13,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 14,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 15,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 16,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 17,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 18,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 19,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      },
      {
        id: 20,
        billingdate: '10/02/2020',
        invoicenumber: 'SI-SOO 117',
        partyname: 'Maheswari Marketing',
        town: 'Jodhpur',
        amount: '730950.00',
        pendingamount: '730950.00',
        creditperiod: 1,
        duedate: '11/02/2020',
        aeigin: 0
      }
    ]

  }

}
