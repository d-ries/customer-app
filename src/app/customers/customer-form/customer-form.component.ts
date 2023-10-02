import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/shared/models/customer.modeL';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerForm!: FormGroup;
  @Output() addCustomer = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      vat: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    const newCustomer: Customer = {
      ...this.customerForm.value
    };
    this.addCustomer.emit(newCustomer);
  }
}
