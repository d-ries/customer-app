import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from 'src/app/customers/customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from 'src/app/customers/add-customer/add-customer.component';
import { CustomerDetailComponent } from 'src/app/customer-detail/customer-detail.component';

const routes: Routes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'add', component: AddCustomerComponent},
  {path: 'customer/:id', component: CustomerDetailComponent},
  {path: '', redirectTo: 'customers', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
