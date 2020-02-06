import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../guards/auth.guard';
import { StockComponent } from './stock/stock.component';
export const HomeRouters:Route[] = [
    {
        path:'', 
        component:HomeComponent,
        // canActivate:[AuthGuard],
        children:[
            {
                path:'dashboard', component:DashboardComponent
            },
            {
                path:'products', component:ProductsComponent
            },
            {
                path:'settings', component:SettingsComponent
            },
            {
                path:'stock', component:StockComponent
            }
        ]
    }
];