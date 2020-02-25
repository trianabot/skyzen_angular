import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  paramdata: any;
  useredit: FormGroup;
  selected: any;

  constructor(private route: ActivatedRoute, private auth: AuthService, private dialogService: NbDialogService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const data:string = this.route.snapshot.queryParamMap.get('item');
    // console.log(JSON.parse(data));
    this.paramdata = JSON.parse(data);
    this.useredit = this.formBuilder.group({
      username: [''],
      email: [''],
      role: [''],
      Firstname: [''],
      Lastname: [''],
      Country: [''],
      State: [''],
      City: [''],
      Address: [''],
      Latitude: [''],
      Logintude: [''],
      Pincode: [''],
      Mobilenumber: [''],
      Phonenumber: ['']
    });

    this.useredit.controls.username.setValue(this.paramdata['username']);
    this.useredit.controls.Mobilenumber.setValue(this.paramdata['Mobilenumber']);
    this.useredit.controls.email.setValue(this.paramdata['email']);
    this.useredit.controls.Address.setValue(this.paramdata['City'] + ',' + this.paramdata['State'] + ',' + this.paramdata['Country'] + ',' + this.paramdata['Pincode']);
    this.useredit.controls.City.setValue(this.paramdata['City']);
    this.useredit.controls.Latitude.setValue(this.paramdata['Latitude']);
    this.useredit.controls.Logintude.setValue(this.paramdata['Logintude']);
    this.useredit.controls.role.setValue(this.paramdata['role']['name']);
    this.useredit.controls.Firstname.setValue(this.paramdata['Firstname']);
    this.useredit.controls.Lastname.setValue(this.paramdata['Lastname']);
    this.useredit.controls.Country.setValue(this.paramdata['Country']);
    this.useredit.controls.State.setValue(this.paramdata['State']);
    this.useredit.controls.Pincode.setValue(this.paramdata['Pincode']);
    this.useredit.controls.Phonenumber.setValue(this.paramdata['Phonenumber']);
    
  }

  isActive(item) {
    return this.selected == item;
 }

 active(item) {
    this.selected = item;
 }

 open(dialog: TemplateRef<any>) {
  this.dialogService.open(dialog, { context: 'The record has been modified, your changes will be discarded.Do you want to proceed?' }).onClose.subscribe(data => {
    // console.log(data);
    if(data == 'ok') {
      this.router.navigate(['/user-details'], {queryParams: {item: JSON.stringify(this.paramdata)}});
    }
  });
}

ok(dialog: TemplateRef<any>) {
  this.router.navigate(['/user-details']);
}

save() {
  console.log(this.useredit.value);
  this.auth.updateUser(this.useredit.value, this.paramdata['id']).subscribe(data => {
    console.log(data);
  });
}

}
