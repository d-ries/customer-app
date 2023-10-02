import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.modeL';
import { Filter } from 'src/app/shared/models/filter.model';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList$!: Observable<Customer[]>;

  constructor(private customerService: CustomerService){}

  ngOnInit(): void {
      /*this.customerList = [
        new Customer('Dries Swinnen', 'dries.swinnen@lab.be', 'Pelt', 'Stationstraat', 3),
        new Customer('Niek Vandael', 'niek.vandael@lab.be', 'Hasselt', 'Elfde linie 123', 21, 'assets/alp.png'),
        new Customer('John Doe', 'john.doe@lab.be', 'Genk', 'Kapelstraat 4', 6, 'assets/john.png')
      ];
      */
     this.customerList$ = this.customerService.getAllCustomers();

  }

  handleFilter(filter: Filter){
    console.log(filter);
      this.customerList$ = this.customerList$.pipe(
        map((data: Customer[]) => {
            return data.filter(customer=>{
              const matchesName = customer.name.toLowerCase().includes(filter.name.toLowerCase());
              const matchesCity = customer.city.toLowerCase().includes(filter.city.toLowerCase());
              const matchesVat = filter.vat ? customer.vat == filter.vat : true;

              return matchesName && matchesCity && matchesVat;
            })
        })
      )
  }

}
