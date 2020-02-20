import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  selected: any = 1
  paramdata: any;
  productedit: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const data:string = this.route.snapshot.queryParamMap.get('item');
    console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
    this.productedit = this.formBuilder.group({
      productType: [''],
      productCategory: [''],
      internalReference: [''],
      barCode: [''],
      HSNSACcode: [''],
      HSNSACDescription: [''],
      salesPrice: [''],
      customerTaxes: [''],
      cost: [''],
      company: ['']
  });
    if(data) {
      this.productedit.controls.productType.setValue(this.paramdata['Name']);
      this.productedit.controls.productCategory.setValue(this.paramdata['category_one']['Name']);
      this.productedit.controls.internalReference.setValue('');
      this.productedit.controls.barCode.setValue('');
      this.productedit.controls.HSNSACcode.setValue('');
      this.productedit.controls.HSNSACDescription.setValue('');
      this.productedit.controls.salesPrice.setValue(this.paramdata['CostOne']);
      this.productedit.controls.customerTaxes.setValue('');
      this.productedit.controls.cost.setValue('');
      this.productedit.controls.company.setValue(this.paramdata['brands']['Brandname']);
    }
  }

  isActive(item) {
    return this.selected == item;
 }

 active(item) {
    this.selected = item;
 }

 save() {
      console.log(this.productedit.value);
 }
 discard() {
  this.router.navigate(['/product-details'], {queryParams: {item: JSON.stringify(this.paramdata)}});
 }

}
