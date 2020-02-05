import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbInputModule, NbCardModule, NbButtonModule, NbSelectModule } from '@nebular/theme';



@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule
  ]
})
export class IndexModule { }
