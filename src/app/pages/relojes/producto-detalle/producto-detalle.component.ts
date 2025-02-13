import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Asegúrate de que esté importado correctamente

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: any;
  imagenActualIndex: number = 0;
  transicionActiva: boolean = false;
  autoSlide: any;

  productos = [
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

  constructor(private route: ActivatedRoute) {}  // Asegúrate de inyectar ActivatedRoute en el constructor

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));  // Aquí es donde usas el ActivatedRoute
    this.producto = this.productos.find(prod => prod.id === id);
    if (!this.producto) return;

    if (this.producto.imagenes && this.producto.imagenes.length > 1) {
      this.iniciarAutoSlide();
    }
  }

  cambiarImagen(direccion: number) {
    this.transicionActiva = true;
    setTimeout(() => {
      const totalImagenes = this.producto.imagenes.length;
      this.imagenActualIndex = (this.imagenActualIndex + direccion + totalImagenes) % totalImagenes;
      this.transicionActiva = false;
    }, 300);

    this.reiniciarAutoSlide();
  }

  seleccionarImagen(index: number) {
    this.transicionActiva = true;
    setTimeout(() => {
      this.imagenActualIndex = index;
      this.transicionActiva = false;
    }, 300);

    this.reiniciarAutoSlide();
  }

  iniciarAutoSlide() {
    this.autoSlide = setInterval(() => {
      this.cambiarImagen(1);
    }, 4000);
  }

  reiniciarAutoSlide() {
    clearInterval(this.autoSlide);
    setTimeout(() => this.iniciarAutoSlide(), 5000); // Reinicia después de 5s de inactividad
  }
}

