import { Component } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  productos = [
    { id: 1, nombre: 'BLF2213', precio: 1100, imagen: '/imagenes/Captura de pantalla 2025-02-13 124418.png'},
    { id: 2, nombre: 'HDY8766', precio: 2000, imagen: '/imagenes/Captura de pantalla 2025-02-13 124428.png'},
    { id: 3, nombre: 'PSK113', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 124444.png'},
    { id: 4, nombre: 'TFG9785', precio: 900, imagen: '/imagenes/Captura de pantalla 2025-02-13 124502.png'},
    { id: 11, nombre: 'HGJ5534', precio: 1600, imagen: '/imagenes/Captura de pantalla 2025-02-13 124752.png'},
    { id: 12, nombre: 'WXB7946', precio: 420, imagen: '/imagenes/Captura de pantalla 2025-02-13 124733.png'}
  ];
}
