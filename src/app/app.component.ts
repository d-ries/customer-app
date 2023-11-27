import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InmemoryDataService } from './shared/services/inmemory.data.service';

HttpClientInMemoryWebApiModule.forRoot(InmemoryDataService)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
