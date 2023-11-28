import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  api: string = 'api/customers';
  http: HttpClient = inject(HttpClient);
  
  allCustomers$: Observable<Customer[]> = this.http.get<Customer[]>(this.api);

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>('api/customers/' + id);
  }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>('/api/customers', customer);
  }

  updateCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>('/api/customers/' + customer.id, customer);
  }
}
