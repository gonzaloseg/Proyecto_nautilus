import { Component } from '@angular/core';

@Component({
  selector: 'app-clasicos',
  templateUrl: './clasicos.component.html',
  styleUrl: './clasicos.component.css'
})
export class ClasicosComponent {
  productos = [
    { id: 5, nombre: 'FLK3453', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 120619.png'},
    { id: 6, nombre: 'AMR4528', precio: 1000, imagen: '/imagenes/Captura de pantalla 2025-02-13 114434.png'},
    { id: 7, nombre: 'BFG2445', precio: 1200, imagen: '/imagenes/Captura de pantalla 2025-02-13 114447.png'},
    { id: 8, nombre: 'FLK3453', precio: 500, imagen: '/imagenes/Captura de pantalla 2025-02-13 114508.png'},
    { id: 9, nombre: 'FLK3453', precio: 600, imagen: '/imagenes/Captura de pantalla 2025-02-13 114525.png'},
    { id: 10, nombre: 'FLK3453', precio: 1420, imagen: '/imagenes/Captura de pantalla 2025-02-13 114705.png'}
  ];
}
