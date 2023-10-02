import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from '../../shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
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
