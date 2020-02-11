import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from "@nebular/theme";
import { NbDialogService } from '@nebular/theme';
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {

  id: number;
  prod_Name: string;
  prod_Description: string;
  prod_Smu: string;
  prod_AlternateSmu: string;
  brand_Name: string;
  status: string;
  node: string;
  master_Group: string;
  master_Node1: string;
  category_Name: string;
  category_Two: string;
  category_Three: string;
  cost_One: number;
  cost_Two: number;
  cost_Three: number;
  quantity: number;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  orderTableColumns = ["id", "prod_Name", "brand_Name", "category_Name","quantity"];
  dataSource: NbTreeGridDataSource<FSEntry>;
  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;
  stocksData: any = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  stockData:any;
  constructor(private dialogService: NbDialogService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private dataservice: DataService) { }

  ngOnInit() {
    this.getStocks();
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

  onSelectFile(event) {
    this.selectedFiles = event.target.files;
    this.currentFileUpload = this.selectedFiles.item(0);
    const formData = new FormData();
    formData.append("stockFile", this.currentFileUpload);
    this.dataservice.uploadFile(formData).subscribe(data => {
      console.log("result coming from file upload service", data);
    }, err => {
      console.log("err coming from file upload service", err);
    })
  }
  getStocks() {
    this.dataservice.getStockes().subscribe(data => {
      this.stocksData = data;
      console.log("result coming from stocks service", this.stocksData);
      const stocksDetails = new Array();
      for (const obj of this.stocksData) {
        stocksDetails.push({ data: obj });
      }
      this.dataSource = this.dataSourceBuilder.create(stocksDetails);
      console.log("result coming from stocks service", this.dataSource);
    }, err => {
      console.log("err coming from stocks service", err)
    })
  }
  selectedStocks(value) {
    this.stockData=value['data'];
  }
}
