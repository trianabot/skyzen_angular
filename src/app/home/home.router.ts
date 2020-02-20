import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../guards/auth.guard';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';
import { ProductOverviewComponent } from './products/product-overview/product-overview.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserOverviewComponent } from './products/user-overview/user-overview.component';
import { UserEditComponent } from './products/user-edit/user-edit.component';

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
            },
            {
                path:'order', component:OrderComponent
            },
            {
                path:'product-overview', component:ProductOverviewComponent
            },
            {
                path:'product-details', component:ProductDetailsComponent
            },
            {
                path:'product-edit', component:ProductEditComponent
            },
            {
                path:'user-overview', component:UserOverviewComponent
            },
            {
                path:'user-edit', component:UserEditComponent
            }
        ]
    }
];