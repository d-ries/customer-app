import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.modeL';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent {
  @Input() customer!: Customer;

}
