import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { CustomerService } from '../../../shared/services/customer.service';
import { Customer } from '../../../shared/models/customer.model';
import { Observable, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [NgIf, NgClass, AsyncPipe],
  templateUrl: './customer-detail.component.html',
  styles: [
  ]
})
export class CustomerDetailComponent {
  customerService: CustomerService = inject(CustomerService);
  route: ActivatedRoute = inject(ActivatedRoute);
  // need to do smt with params
  customer$: Observable<Customer> = this.customerService.singleCustomer$.pipe(
    tap(() => console.log(this.route.snapshot.params['id']))
  );

  toggleLoyal(customer: Customer) {
    customer.isLoyal = !customer.isLoyal;
    // this.customerService.updateCustomer(customer).subscribe();
  }
}
