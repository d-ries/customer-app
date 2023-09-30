import { Component, EventEmitter, Output } from '@angular/core';
import { Filter } from '../../shared/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  filter: Filter = { name: '', city: '', vat: 0 };

  @Output() filterChanged = new EventEmitter<any>();

  onSubmit(form: any) {
    if (form.valid) {
      this.filterChanged.emit(this.filter);
    }
  }
}
