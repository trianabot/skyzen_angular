import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: any;
  collection = { count: 60, data: [] };
 
  constructor() {
 
    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
 
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }
 
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }

}
