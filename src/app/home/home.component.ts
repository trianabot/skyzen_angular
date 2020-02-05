import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  status : boolean;

  constructor() { }

  ngOnInit() {
  }
  items = [
    {
      title: 'products',
      expanded: false,
      children: [
        {
          title: 'Overview',
          link: [], // goes into angular `routerLink`                         
        },
        {
          title: 'Product Settings',
          expanded : false,
          children : [
            {
              title : 'Brand',
              link :['/products'],
            },
            {
              title : 'Category',
              link :['/settings'],
            },
            {
              title : 'Sub Category',
              link :['/dashboard'],
            },
            {
              title : 'Products HSN',
              link :[],
            },
          ],
        },
        {
          title: 'Products List',
          link: [],
        },
      ],
      
    },
    {
      title: 'Stock',
      expanded: false,
      children: [
        {
          title: 'Overview',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Manufacture Stock',
          expanded : false,
          children : [
            {
              title : 'Products',
              link : [],
            },
            {
              title : 'Parts',
              link : [],
            },
          ]
        },
        {
          title: 'At Distributer',
          link: [],
        },
        {
          title: 'At Retailer',
          link: [],
        },
        {
          title: 'At Asp',
          link: [],
        },
      ],
    },
    {
      title: 'Orders',
      expanded: false,
      children: [
        {
          title: 'Overview',
          link: [], // goes into angular `routerLink`
        },
        {
          title: 'Orders History',
          expanded : false,
          children : [
            {
              title : 'Distributers',
              link : [],
            },
            {
              title : 'Retailrs',
              link : [],
            },
          ]
        },
        {
          title: 'New Orders',
          expanded : false,
          children : [
            {
              title : 'Distributers',
              link : [],
            },
            {
              title : 'Retailrs',
              link : [],
            },
          ]
        },
        {
          title : 'Shipment',
          link : [],
        }
      ],
    },
    {
      title: 'Marketing',
      link: [],
    },
    {
      title: 'Sales',
      link: [],
    },
    {
      title: 'Purchase',
      link: [],
    },
    {
      title: 'Finance',
      link: [],
    },
    {
      title: 'CRM',
      link: [],
    },
    {
      title: 'Buliding',
      link: [],
    },
    {
      title: 'Employees',
      link: [],
    },
    {
      title: 'Expences',
      link: [],
    },
    {
      title: 'plant',
      link: [],
    },
    {
      title: 'Schemas',
      link: [],
    },
  ];

}
