import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  stocksData: any = [];
  brandSelectedArray:any=[];
  isbrand:boolean;
  selectCatArray:any=[];
  isCatgory:boolean;
  userOrderDetails:any=[];
  selectedOrderData:any;
  showOrder:boolean;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getStocks();
    this.getAllOrders();
  }
  getStocks() {
    this.dataservice.getStockes().subscribe(data => {
      this.stocksData = data;
     console.log("result coming from stocks service", this.stocksData);
    }, err => {
      console.log("err coming from stocks service", err)
    })
  }
  selectBrand(value){
    this.brandSelectedArray=[];;
     for(let obj of this.stocksData){
       if(obj['brand_Name']==value){
        this.brandSelectedArray.push(obj);
       }
     }
     this.isbrand=true;
    

  }
  selectCat(selectCategory){
    this.selectCatArray=[];
    console.log("selectCategory",selectCategory);
    for(let obj of  this.brandSelectedArray){
      if(obj['category_Name']==selectCategory){
        this.selectCatArray.push(obj);
      }
    }
    this.isCatgory=true;
    console.log("this.selectCatArray",this.selectCatArray)
  }
  
  getAllOrders(){
   this.dataservice.getAllOrders().subscribe(data=>{
     this.userOrderDetails=data;
     console.log(" this.userOrderDetails", this.userOrderDetails)
   },err=>{
    console.log(" this.userOrderDetails",err)
   })
  }

  selectedOrder(value){
   this.selectedOrderData=value;
   this.showOrder=true;
   console.log(" this.selectedOrderData",this.selectedOrderData);
  }
 
}

