import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  paramdata: any;
  useredit: FormGroup;
  selected: any = 1;

  constructor(private route: ActivatedRoute, private dialogService: NbDialogService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const data:string = this.route.snapshot.queryParamMap.get('item');
    console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
    this.useredit = this.formBuilder.group({
      employeename: [''],
      workphone: [''],
      workemail: [''],
      company: [''],
      worklocation: [''],
      department: [''],
      jobposition: [''],
      manager: ['']
    });

    this.useredit.controls.employeename.setValue(this.paramdata['employeename']);
    this.useredit.controls.workphone.setValue(this.paramdata['workphone']);
    this.useredit.controls.workemail.setValue(this.paramdata['workemail']);
    this.useredit.controls.company.setValue(this.paramdata['company']);
    this.useredit.controls.worklocation.setValue('');
    this.useredit.controls.department.setValue(this.paramdata['department']);
    this.useredit.controls.jobposition.setValue(this.paramdata['jobposition']);
    this.useredit.controls.manager.setValue(this.paramdata['manager']);
  }

  isActive(item) {
    return this.selected == item;
 }

 active(item) {
    this.selected = item;
 }

 open(dialog: TemplateRef<any>) {
  this.dialogService.open(dialog, { context: 'The record has been modified, your changes will be discarded.Do you want to proceed?' });
}

ok(dialog: TemplateRef<any>) {
  this.router.navigate(['/user-overview']);
}

}
