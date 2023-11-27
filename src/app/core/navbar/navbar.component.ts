import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  showMenu: boolean = false;

  toggleMenu(): void{
    this.showMenu = !this.showMenu;
  }

}
