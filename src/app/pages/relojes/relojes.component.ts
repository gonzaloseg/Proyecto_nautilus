import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent {
  productos: any[] = [];

  constructor() {}

  ngOnInit() {
    // Definir los productos de ambas categorías dentro del componente
    const productosCategoria = [
      { id: 1, nombre: 'BLF2213', precio: 1100, imagen: '/imagenes/Captura de pantalla 2025-02-13 124418.png'},
    { id: 2, nombre: 'HDY8766', precio: 2000, imagen: '/imagenes/Captura de pantalla 2025-02-13 124428.png'},
    { id: 3, nombre: 'PSK113', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 124444.png'},
    { id: 4, nombre: 'TFG9785', precio: 900, imagen: '/imagenes/Captura de pantalla 2025-02-13 124502.png'},
    { id: 5, nombre: 'FLK3453', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 120619.png'},
    { id: 6, nombre: 'AMR4528', precio: 1000, imagen: '/imagenes/Captura de pantalla 2025-02-13 114434.png'},
    { id: 7, nombre: 'BFG2445', precio: 1200, imagen: '/imagenes/Captura de pantalla 2025-02-13 114447.png'},
    { id: 8, nombre: 'FLK3453', precio: 500, imagen: '/imagenes/Captura de pantalla 2025-02-13 114508.png'},
    { id: 9, nombre: 'FLK3453', precio: 600, imagen: '/imagenes/Captura de pantalla 2025-02-13 114525.png'},
    { id: 10, nombre: 'FLK3453', precio: 1420, imagen: '/imagenes/Captura de pantalla 2025-02-13 114705.png'},
    { id: 11, nombre: 'HGJ5534', precio: 1600, imagen: '/imagenes/Captura de pantalla 2025-02-13 124752.png'},
    { id: 12, nombre: 'WXB7946', precio: 420, imagen: '/imagenes/Captura de pantalla 2025-02-13 124733.png'}
    ];

    this.productos = [...productosCategoria ];
  }
}
