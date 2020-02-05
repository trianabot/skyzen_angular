import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/app.router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authservice: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public login() {
    let obj = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }
    this.authservice.login(obj).subscribe(data => {
      console.log("login success",data);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log("error while login", err)
    })


  }

}
