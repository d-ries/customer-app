import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/shared/models/customer.modeL';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  @ViewChild(CustomerFormComponent) formComponent!: CustomerFormComponent;
  constructor(private customerService: CustomerService, private router: Router){}

  handleSubmit(customer: Customer){
    this.customerService.addCustomer(customer).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
