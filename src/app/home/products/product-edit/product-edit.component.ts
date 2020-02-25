import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  selected: any = 1
  paramdata: any;
  productedit: FormGroup;

  constructor(private route: ActivatedRoute, private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const data:string = this.route.snapshot.queryParamMap.get('item');
    // console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
    this.productedit = this.formBuilder.group({
      name: [''],
      category: [''],
      srno: [''],
      sku: [''],
      hsn_code: [''],
      short_name: [''],
      cost: [''],
      currency: [''],
      parent_type: ['']
  });
    if(data) {
      this.productedit.controls.name.setValue(this.paramdata['name']);
      this.productedit.controls.category.setValue(this.paramdata['category']['cat_name']);
      this.productedit.controls.srno.setValue(this.paramdata['srno']);
      this.productedit.controls.sku.setValue(this.paramdata['sku']);
      this.productedit.controls.hsn_code.setValue(this.paramdata['hsn_code']);
      this.productedit.controls.short_name.setValue(this.paramdata['short_name']);
      this.productedit.controls.cost.setValue(this.paramdata['cost']);
      this.productedit.controls.currency.setValue(this.paramdata['currency']);
      this.productedit.controls.parent_type.setValue(this.paramdata['brand']['name']);
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
      let obj = {
        id:this.paramdata['id'],
        name: this.productedit.value.name,
        srno: this.productedit.value.srno,
        sku: this.productedit.value.sku,
        hsn_code: this.productedit.value.hsn_code,
        short_name: this.productedit.value.short_name,
        cost: this.productedit.value.cost,
        currency: this.productedit.value.currency,
        item_type: this.paramdata['item_type'],
        parent_type: this.paramdata['parent_type'],
        brand: this.paramdata['brand'],
        category: this.paramdata['category'],
        created_at: this.paramdata['created_at'],
        updated_at: this.paramdata['updated_at'],
        logo: this.paramdata['logo']
      }
      this.auth.updateProducts(obj, this.paramdata['id']).subscribe(data => {
        console.log(data);
      })
 }
 discard() {
  this.router.navigate(['/product-details'], {queryParams: {item: JSON.stringify(this.paramdata)}});
 }

}
