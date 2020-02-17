import { Component, OnInit, TemplateRef } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from "@nebular/theme";
import { NbDialogService } from '@nebular/theme';
import { NbCalendarRange, NbDateService } from '@nebular/theme';
import * as moment from 'moment';
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  orderId: number;
  generatedTo: string;
  date: string;
  totalPrice?: number;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  selectedItem: string = null;
  selectedCategory: string = null;
  selectedCity:any;
  range: NbCalendarRange<Date>;

  // orderTableColumnsuser = ["Order Id", "Party Name", "Date", "City", "Total Price", "Devision", "Executive", "Status"];
  // orderTableColumns = ["Order Id", "Party Name", "Date", "City", "Total Price", "Devision", "Executive", "Status"];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  stocksData: any = [];
  brandSelectedArray: any = [];
  isbrand: boolean;
  selectCatArray: any = [];
  isCatgory: boolean;
  userOrderDetails: any = [];
  userData: any = [];
  selectedOrderData: any;
  showOrder: boolean;
  inputvalue: number;
  userRole: any;
  p: number = 1;
  constructor(protected dateService: NbDateService<Date>,private dialogService: NbDialogService, private dataservice: DataService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
   // console.log("this.range",this.range)
  }

  ngOnInit() {
    this.userRole = sessionStorage.getItem("userRole");
    this.getAllOrders();
  }
  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
  handleRangeChange(value){
    var dateArray = [];
    var currentDate = moment(value['start']);
    var stopDate = moment(value['end']);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
        currentDate = moment(currentDate).add(1, 'days');
    }
    console.log("dateArray",dateArray)
    var selecteFromToData=[];
    for(let obj of this.userData){
      for(let dates of dateArray){
     if(moment(obj['date']).format('YYYY-MM-DD')==dates){
        selecteFromToData.push(obj)
      }
      }
    }
    this.userOrderDetails=selecteFromToData;
    console.log("this.userOrderDetails",this.userOrderDetails)
   
  }

 

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'this is some additional data passed to dialog' });
  }
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  getStocks() {
    this.dataservice.getStockes().subscribe(data => {
      this.stocksData = data;
      // console.log("result coming from stocks service", this.stocksData);
    }, err => {
      console.log("err coming from stocks service", err)
    })
  }
  selectBrand(selectedItem) {
    this.brandSelectedArray = [];;
    for (let obj of this.stocksData) {
      if (obj["brand_Name"] == selectedItem) {
        this.brandSelectedArray.push(obj);
      }
    }
    this.isbrand = true;
  }
  selectCat(selectCategory) {
    this.selectCatArray = [];
    for (let obj of this.brandSelectedArray) {
      if (obj["category_Name"] == selectCategory) {
        this.selectCatArray.push(obj);
      }
    }
    this.isCatgory = true;
  }

  getAllOrders() {
    this.dataservice.getAllOrders().subscribe((data: any[]) => {
      this.userOrderDetails = data;
      this.userData = data.slice(0);
      // console.log("  this.userOrderDetails", this.userOrderDetails);
      // const orderDetails = new Array();
      // for (const obj of data) {

      //   let object = {
      //     "Order Id": obj['orderId'],
      //     "Party Name": obj['generatedToUser']['userdeptName'],
      //     "City": obj['generatedToUser']['userCity'],
      //     "Email": obj['generatedToUser']['email'],
      //     "Date": obj['date'],
      //     "Total Price": obj['totalPrice'],
      //     "parts": obj['parts'],
      //     "products": obj['products'],
      //     "Devision": "Devision",
      //     "Executive":"Executive",
      //     "Status":"Pending"
      //   };
      //   orderDetails.push({ data: object });
      // }
      // this.dataSource = this.dataSourceBuilder.create(orderDetails);
      // console.log("  this.dataSource this.userRole", this.dataSource, this.userRole);
    }, err => {
      console.log(" this.userOrderDetails", err)
    })
  }

  selectedOrder(value) {
    this.selectedOrderData = value;
    this.showOrder = true;
  }

  onSelectCaT(value){
    var selecteCityData=[];
   for(let obj of this.userData){
     if(obj.generatedToUser.userCity==value){
      selecteCityData.push(obj)
     }
   }
   this.userOrderDetails=selecteCityData;
   console.log("this.userOrderDetails",this.userOrderDetails)
  }
}



