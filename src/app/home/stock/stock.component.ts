import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  stocksData: any = [];
  selectedFiles: FileList;
  currentFileUpload: File;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
  
  }

  
  onSelectFile(event) {
    this.selectedFiles = event.target.files;
   this.currentFileUpload = this.selectedFiles.item(0);
   const formData = new FormData();
   formData.append("stockFile", this.currentFileUpload);
   this.dataservice.uploadFile(formData).subscribe(data=>{
    console.log("result coming from file upload service", data);
   },err=>{
    console.log("err coming from file upload service", err);
   })
  }

}
