// Importación del decorador Injectable desde Angular Core.
// Esto permite que la clase pueda ser inyectada como una dependencia en otros componentes o servicios.
import { Injectable } from '@angular/core';

// El decorador @Injectable indica que esta clase puede ser inyectada en cualquier componente o servicio.
// 'providedIn: root' hace que el servicio sea un singleton accesible en toda la aplicación.
@Injectable({
  providedIn: 'root' // Esto asegura que el servicio esté disponible de manera global.
})
export class CestaService {
  // Definición de una propiedad privada 'cesta' que es un arreglo para almacenar productos.
  private cesta: any[] = [];

  // Constructor vacío, no realiza ninguna acción al instanciar el servicio.
  constructor() {}

  // Método para agregar un producto a la cesta.
  // Recibe un objeto 'producto' y lo añade al arreglo.
  agregarProducto(producto: any) {
    this.cesta.push(producto);
    console.log('Producto agregado:', producto); // Muestra el producto agregado en la consola.
  }

  // Método para obtener el contenido actual de la cesta.
  obtenerCesta() {
    return this.cesta; // Devuelve el arreglo con los productos.
  }
}
