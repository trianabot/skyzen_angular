import { Route } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginGuard } from '../guards/login.guard';

export const IndexRoutes:Route[] = [
    {
        path:'', 
        component:IndexComponent,
        // canActivate: [LoginGuard],
        children:[
            {
                path:'', redirectTo:'/login', pathMatch:'full'
            },
            {
                path:'login', component:LoginComponent
            },
            {
                path:'signup', component:SignupComponent
            },
            {
                path:'forgout', component:ForgotComponent
            }
        ]
    }
];