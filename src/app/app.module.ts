import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app.router';
import { HomeModule } from './home/home.module';
import { IndexModule } from './index/index.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbTabsetModule, NbInputModule, NbCardModule, NbListModule, NbMenuModule, NbSearchModule, NbContextMenuModule, NbIconModule, NbSelectModule, NbTreeGridModule, NbDialogModule, NbCalendarRangeModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { config } from 'rxjs';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndexModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbSidebarModule,
    NbTabsetModule,
    FormsModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    HttpClientModule,
    NbListModule,
    NbMenuModule.forRoot(),
    NbSearchModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSelectModule,
    NbTreeGridModule,
    NbDialogModule.forRoot(),
    ReactiveFormsModul,
    Ng2SmartTableModule,
    NgxPaginationModule,
    NbCalendarRangeModule ,
    NbDatepickerModule.forRoot(),
    Ng2SearchPipeModule
    // NgTableComponent,
    // NgTableFilteringDirective,
    // NgTablePagingDirective,
    // NgTableSortingDirective
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoginGuard,
    DataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
