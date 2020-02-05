import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;

  constructor( private fb :FormBuilder, private authservice: AuthService, private router : Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname : ['', Validators.required],
      lastname : ['', Validators.required],
      mobilenumber : ['', Validators.required],
      gender : ['', ],
    });
  }
  get f() {
    return this.signupForm.controls;
  }

  public signin() {
    let obj = {
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      firstname: this.signupForm.value.firstname,
      lastname: this.signupForm.value.lastname,
      mobilenumber: this.signupForm.value.mobilenumber,
      gender: this.signupForm.value.gender
    }
    console.log("this.signupForm.value",this.signupForm.value)
    this.authservice.login(obj).subscribe(data => {
      console.log("sign success",data);
      this.router.navigate(['/login']);
    }, err => {
      console.log("error while login", err)
    })


  }


}
