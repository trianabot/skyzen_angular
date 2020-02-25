import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  paramdata: any = [];
  selected: any;

  constructor(private route: ActivatedRoute, private dialogService: NbDialogService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    const data:string = this.route.snapshot.queryParamMap.get('item');
    // console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
  }

  isActive(item) {
    return this.selected == item;
 }

 active(item) {
    this.selected = item;
 }

  edit() {
    this.router.navigate(['/user-edit'], {queryParams: {item: JSON.stringify(this.paramdata)}});
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: 'The record has been modified, your changes will be discarded.Do you want to proceed?' });
  }

  cancel() {
      this.router.navigate(['/user-overview']);
  }

}
