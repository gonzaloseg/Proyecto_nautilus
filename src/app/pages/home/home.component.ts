import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  menuVisible: boolean = false;

  // Método para alternar la visibilidad del menú
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;
  }
}
