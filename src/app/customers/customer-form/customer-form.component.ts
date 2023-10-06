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
  isSubmitted: boolean = false;

  @Output() addCustomer = new EventEmitter<Customer>();

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.isSubmitted = false;
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatar: ['/assets/default.png',[Validators.required]],
      city: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.required],
      vat: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    const newCustomer: Customer = {
      ...this.customerForm.value
    };
    this.addCustomer.emit(newCustomer);
  }
}
