import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerItemComponent } from './customers/customer-item/customer-item.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './customers/filter/filter.component';
import { InmemoryDataService } from './shared/services/inmemorydata.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerItemComponent,
    CustomerListComponent,
    NavbarComponent,
    FilterComponent,
    CustomerFormComponent,
    AddCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InmemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
