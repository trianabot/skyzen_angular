import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  productsList: any = [];
  productsListSearch: any = [];

  url: any = 'http://15.206.93.48';

  placeholderfilter: any = '../../../../assets/filter-icon-vector-21679622.jpg'

  searchword: FormControl = new FormControl();

  showGrid: boolean;
  showList: boolean;
  categories: any = [];
  productnames: any = [];

  constructor(private router: Router, private products: AuthService) { }

  ngOnInit() {
    this.showGrid = true;
    this.showList = false;
    this.getProducts();
    // this.productsList = [
    //   {
    //     productname: 'Acoustic Bloc Screens',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Alice adventure in wonderland',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Apple In-ear Headphones',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Apple wireless keyboard',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Basic Membership',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Bolt',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Bose Mini Bluetooth Speaker',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Cabinet With Doors',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Cable Management Box',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Computer Case',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Computer',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Conference Chair',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Corner Desk Black',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Corner Desk White',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Corner Desk Green',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Customizable Desk',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Deposit',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Desk Combination',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/4.jpg',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   },
    //   {
    //     productname: 'Desk Stand With Screen',
    //     price: '2950.00 $',
    //     units: "16 No's",
    //     icon: 'https://www.gstatic.com/webp/gallery/5.webp',
    //     brand: 'Skyzen',
    //     category: 'Coolers',
    //     status: 'Active'
    //   }
    // ]

    this.productsListSearch = this.productsList;

    this.searchword.valueChanges
                  .subscribe((data) => {
                    if(data!=''){
                      let results = [];
                       console.log(data);
                      this.productsListSearch.forEach(it => {
                        if (it.Name.toLowerCase().includes(data)) {
                          results.push(it);
                        }
                      });
                      this.productsListSearch = results;
                    }else{
                      this.productsListSearch = this.productsList;
                    }
                    
                  });
  }

  productdetail(item) {
    // console.log(item);
    this.router.navigate(['/product-details'], {queryParams: {item: JSON.stringify(item)}});
  }

  showgrid() {
    this.showGrid = true;
    this.showList = false;
  }

  showlist() {
    this.showGrid = false;
    this.showList = true;
  }

  getProducts() {
    this.products.getProducts().subscribe(data => {
      // console.log(data);
      this.productsList = data;
      this.productsListSearch = this.productsList;
      this.categories = this.productsListSearch.reduce((a,d) => {
              if(a.indexOf(d['category_one']['Name'])===-1) {
                a.push(d['category_one']['Name']);
              }
              return a;
      },[])
      this.productnames = this.productsListSearch.reduce((a,d) => {
        if(a.indexOf(d['Name'])===-1) {
          a.push(d['Name']);
        }
        return a;
},[])
      // console.log(this.categories);
    });
  }

  categoryChange(event) {
      //  console.log(event);
       if(event!=''){
        if(event=='All') {
          // console.log(event);
          // console.log(this.productsList);
          this.productsListSearch = this.productsList;
          return
        }
        let results = [];
        //  console.log(items);
        this.productsList.forEach(it => {
          if (it.category_one.Name.toUpperCase().includes(event)) {
            results.push(it);
          }
        });
        this.productsListSearch = results;
      }
      else{
        this.productsListSearch = this.productsList;
      }
  }

}
