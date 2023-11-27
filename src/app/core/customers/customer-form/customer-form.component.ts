import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../shared/models/customer.model';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './customer-form.component.html',
  styles: [
  ]
})
export class CustomerFormComponent {
  fb: FormBuilder = inject(FormBuilder);
  customerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    avatar: ['/assets/default.png',[Validators.required]],
    city: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    vat: ['', [Validators.required, Validators.min(0)]]
  });
  isSubmitted: boolean = false;

  @Output() addCustomer = new EventEmitter<Customer>();

  onSubmit() {
    this.isSubmitted = true;
    const newCustomer: Customer = {
      ...this.customerForm.value
    };
    this.addCustomer.emit(newCustomer);
  }
}
