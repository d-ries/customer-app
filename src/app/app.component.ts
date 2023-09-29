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
      const c1: Customer = new Customer('Dries Swinnen', 'dries.swinnen@pxl.be', 'Pelt', 'Stationstraat 3', 34, 'management');
      const c2: Customer = new Customer('John Doe', 'johndoe@gmail.com', 'Hasselt', 'Walenstraat 94', 35);
      console.log(c1);
      console.log(c2);

  }
}
