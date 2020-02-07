import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status: boolean;

  constructor(private sidebarService: NbSidebarService, private themeService: NbThemeService) {
    this.themeService.onThemeChange()
      .subscribe((theme: any) => {
        console.log(`Theme changed to ${theme.name}`);
      });
  }

  ngOnInit() {
   
  }
  theem(theamName){
    // console.log(theamName);
    // alert(theamName.target.value);
    let theamName_:string = theamName.target.value;
    this.themeService.changeTheme(theamName_);
  }
  item = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  items = [
    {
      icon: "smartphone-outline",
      title: 'products',
      expanded: false,
      children: [
        {
          icon: 'eye-outline',
          title: 'Overview',
          link: [], // goes into angular `routerLink`                         
        },
        {
          icon: 'link-2-outline',
          title: 'Product Settings',
          expanded: false,
          children: [
            {
              icon: 'person-outline',
              title: 'Brand',
              link: ['/products'],
            },
            {
              icon: 'person-outline',
              title: 'Category',
              link: ['/settings'],
            },
            {
              icon: 'person-outline',
              title: 'Sub Category',
              link: ['/dashboard'],
            },
            {
              icon: 'person-outline',
              title: 'Products HSN',
              link: [],
            },
          ],
        },
        {
          icon: 'person-outline',
          title: 'Products List',
          link: [],
        },
      ],

    },
    {
      icon: "shopping-cart-outline",
      title: 'Stock',
      expanded: false,
      children: [
        {
          icon: 'eye-outline',
          title: 'Overview',
          link: ['/stock'], // goes into angular `routerLink`
        },
        {
          icon: 'link-2-outline',
          title: 'Manufacture Stock',
          expanded: false,
          children: [
            {
              icon: 'person-outline',
              title: 'Products',
              link: [],
            },
            {
              icon: 'person-outline',
              title: 'Parts',
              link: [],
            },
          ]
        },
        {
          icon: 'person-outline',
          title: 'At Distributer',
          link: [],
        },
        {
          icon: 'person-outline',
          title: 'At Retailer',
          link: [],
        },
        {
          icon: 'person-outline',
          title: 'At Asp',
          link: [],
        },
      ],
    },
    {
      icon: 'plus-outline',
      title: 'Orders',
      expanded: false,
      children: [
        {
          icon: 'eye-outline',
          title: 'Overview',
          link: [], // goes into angular `routerLink`
        },
        {
          icon: 'link-2-outline',
          title: 'Orders History',
          expanded: false,
          children: [
            {
              icon: 'person-outline',
              title: 'Distributers',
              link: [],
            },
            {
              icon: 'person-outline',
              title: 'Retailrs',
              link: [],
            },
          ]
        },
        {
          icon: 'link-2-outline',
          title: 'New Orders',
          expanded: false,
          children: [
            {
              icon: 'person-outline',
              title: 'Distributers',
              link: [],
            },
            {
              icon: 'person-outline',
              title: 'Retailrs',
              link: [],
            },
          ]
        },
        {
          icon: 'link-2-outline',
          title: 'Shipment',
          link: [],
        }
      ],
    },
    {
      icon: 'person-done-outline',
      title: 'Marketing',
      link: [],
    },
    {
      icon: 'bar-chart-2-outline',
      title: 'Sales',
      link: [],
    },
    {
      icon: 'clipboard-outline',
      title: 'Purchase',
      link: [],
    },
    {
      icon: 'alert-triangle-outline',
      title: 'Finance',
      link: [],
    },
    {
      icon: 'settings-2-outline',
      title: 'CRM',
      link: [],
    },
    {
      icon: 'settings-2-outline',
      title: 'Buliding',
      link: [],
    },
    {
      icon: 'people-outline',
      title: 'Employees',
      link: [],
    },
    {
      icon: 'cube-outline',
      title: 'Expences',
      link: [],
    },
    {
      icon: 'settings-outline',
      title: 'plant',
      link: [],
    },
    {
      icon: 'settings-outline',
      title: 'Schemas',
      link: [],
    },
  ];
  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

}
