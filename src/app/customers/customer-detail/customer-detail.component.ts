import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../shared/services/customer.service';
import { Observable } from 'rxjs';
import { Customer } from '../../shared/models/customer.modeL';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customer$!: Observable<Customer>;
  constructor(private route: ActivatedRoute, private customerService: CustomerService){}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    this.customer$ = this.customerService.getCustomer(id);
  }

  toggleLoyal(customer: Customer) {
    customer.isLoyal = !customer.isLoyal;
    this.customerService.updateCustomer(customer).subscribe();

  }
}
