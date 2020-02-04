import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/app.router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  public onSubmit(){
    if (this.loginForm.invalid) {
      return;
  }
    alert(JSON.stringify(this.loginForm.value));
    
    this.router.navigate(['/dashboard']);
  }

}
