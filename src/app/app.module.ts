import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerItemComponent } from './customers/customer-item/customer-item.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './customers/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerItemComponent,
    CustomerListComponent,
    NavbarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
