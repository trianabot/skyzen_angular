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

  public onSubmit() {
    this.authservice.login(this.loginForm.value).subscribe(data => {

      console.log("login responce",data);
      sessionStorage.setItem("userId",data['id']);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log("error while login", err)
    });
  }

}
