import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
})
export class CestaService {
  private cesta: any[] = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.cesta.push(producto);
    console.log('Producto agregado:', producto);
  }

  obtenerCesta() {
    return this.cesta;
  }
}
