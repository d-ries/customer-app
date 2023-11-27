import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Filter } from '../../../shared/models/filter.model';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent {
  filter: Filter = { name: '', city: '', vat: undefined };

  @Output() filterChanged = new EventEmitter<any>();

  onSubmit(form: any) {
    if (form.valid) {
      this.filter.name = this.filter.name.toLowerCase();
      this.filter.city = this.filter.city.toLowerCase();
      this.filterChanged.emit(this.filter);
    }
  }

}
