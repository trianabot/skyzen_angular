import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  paramdata: any;
  selected: any = 1;
  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const data:string = this.route.snapshot.queryParamMap.get('item');
    console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
  }

  isActive(item) {
     return this.selected == item;
  }

  active(item) {
     this.selected = item;
  }

  editproduct() {
    this.router.navigate(['/product-edit'], {queryParams: {item: JSON.stringify(this.paramdata)}});
  }

}
