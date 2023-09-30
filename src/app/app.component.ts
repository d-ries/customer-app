import { Component, OnInit } from '@angular/core';
import { Customer } from './shared/models/customer.modeL';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab';

  ngOnInit(): void {

  }
}
