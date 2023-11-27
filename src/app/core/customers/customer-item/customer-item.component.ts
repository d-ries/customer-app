import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Customer } from '../../../shared/models/customer.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-item',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './customer-item.component.html',
  styles: [
  ]
})
export class CustomerItemComponent {
  @Input() customer!: Customer;

}
