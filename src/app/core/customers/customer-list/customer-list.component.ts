import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { CustomerItemComponent } from '../customer-item/customer-item.component';
import { Filter } from '../../../shared/models/filter.model';
import { Observable, map, tap } from 'rxjs';
import { Customer } from '../../../shared/models/customer.model';
import { CustomerService } from '../../../shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [FilterComponent, CustomerItemComponent, NgFor, AsyncPipe],
  templateUrl: './customer-list.component.html',
  styles: [
  ]
})
export class CustomerListComponent {
  customerService: CustomerService = inject(CustomerService);
  customerList$: Observable<Customer[]> = this.customerService.allCustomers$.pipe(
    tap((data) => console.log(data))
  );

  handleFilter(filter: Filter){
    this.customerList$ = this.customerList$.pipe(
      map((data: Customer[]) => {
          return data.filter(customer=>this.isCustomerMatchingFilter(customer, filter))
      })
    )
  }

  private isCustomerMatchingFilter(customer: Customer, filter: Filter): boolean {
    const matchesName = customer.name.toLowerCase().includes(filter.name.toLowerCase());
    const matchesCity = customer.city.toLowerCase().includes(filter.city.toLowerCase());
    const matchesVat = filter.vat ? customer.vat === filter.vat : true;

    return matchesName && matchesCity && matchesVat;
  }

}
