import { Component, ViewChild, inject } from '@angular/core';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerService } from '../../../shared/services/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [CustomerFormComponent],
  template: `
    <app-customer-form (addCustomer)="handleSubmit($event)"></app-customer-form>
  `,
  styles: [
  ]
})
export class AddCustomerComponent {
    @ViewChild(CustomerFormComponent) formComponent!: CustomerFormComponent;
    customerService: CustomerService = inject(CustomerService);
    router: Router = inject(Router);

    handleSubmit(customer: Customer){
      // this.customerService.addCustomer(customer).subscribe(() => {
      //   this.router.navigate(['']);
      // });
      console.log(customer);
    }
    
}
