import { CanDeactivateFn } from '@angular/router';
import { AddCustomerComponent } from 'src/app/customers/add-customer/add-customer.component';

export const confirmLeaveGuard: CanDeactivateFn<AddCustomerComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.formComponent.customerForm.dirty && !component.formComponent.isSubmitted){
    return window.confirm("Are you sure you want to leave this page?");
  }else{
    return true;
  }

};
