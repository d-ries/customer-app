import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.modeL';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList!: Customer[];

  ngOnInit(): void {
      this.customerList = [
        new Customer('Dries Swinnen', 'dries.swinnen@lab.be', 'Pelt', 'Stationstraat', 3),
        new Customer('Niek Vandael', 'niek.vandael@lab.be', 'Hasselt', 'Elfde linie 123', 21, 'assets/alp.png'),
        new Customer('John Doe', 'john.doe@lab.be', 'Genk', 'Kapelstraat 4', 6, 'assets/john.png')
      ];
  }
}
