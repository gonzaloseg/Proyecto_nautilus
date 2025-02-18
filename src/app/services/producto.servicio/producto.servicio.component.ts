import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
    
})
export class productoservicio {
  private productos = [
    { id: 1, nombre: 'BLF2213', precio: 1100, imagen: '/imagenes/Captura de pantalla 2025-02-13 124418.png', descripcion: 'Reloj deportivo con cronómetro y resistencia al agua hasta 50m, ideal para el día a día.' },
    { id: 2, nombre: 'HDY8766', precio: 2000, imagen: '/imagenes/Captura de pantalla 2025-02-13 124428.png', descripcion: 'Reloj automático de lujo con caja de acero inoxidable y correa de cuero genuino.' },
    { id: 3, nombre: 'PSK113', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 124444.png', descripcion: 'Reloj minimalista con diseño ultradelgado y movimiento de cuarzo de alta precisión.' },
    { id: 4, nombre: 'TFG9785', precio: 900, imagen: '/imagenes/Captura de pantalla 2025-02-13 124502.png', descripcion: 'Reloj analógico clásico con esfera luminosa y correa de acero inoxidable resistente.' },
    { id: 5, nombre: 'FLK3453', precio: 700, imagen: '/imagenes/Captura de pantalla 2025-02-13 120619.png', descripcion: 'Reloj casual con correa de silicona y resistencia a salpicaduras, ideal para el uso diario.' },
    { id: 6, nombre: 'AMR4528', precio: 1000, imagen: '/imagenes/Captura de pantalla 2025-02-13 114434.png', descripcion: 'Smartwatch con monitor de frecuencia cardíaca, notificaciones y múltiples modos deportivos.' },
    { id: 7, nombre: 'BFG2445', precio: 1200, imagen: '/imagenes/Captura de pantalla 2025-02-13 114447.png', descripcion: 'Reloj de buceo profesional con resistencia al agua hasta 200m y bisel giratorio.' },
    { id: 8, nombre: 'AMG2334', precio: 500, imagen: '/imagenes/Captura de pantalla 2025-02-13 114508.png', descripcion: 'Reloj digital con alarma, luz LED y cronómetro, perfecto para actividades deportivas.' },
    { id: 9, nombre: 'GSX1000', precio: 600, imagen: '/imagenes/Captura de pantalla 2025-02-13 114525.png', descripcion: 'Reloj elegante con caja dorada, calendario y movimiento de cuarzo japonés.' },
    { id: 10, nombre: 'GTR3435', precio: 1420, imagen: '/imagenes/Captura de pantalla 2025-02-13 114705.png', descripcion: 'Reloj cronógrafo con múltiples esferas, correa de cuero y diseño sofisticado.' },
    { id: 11, nombre: 'HGJ5534', precio: 1600, imagen: '/imagenes/Captura de pantalla 2025-02-13 124752.png', descripcion: 'Reloj suizo de alta gama con cristal de zafiro y mecanismo automático de precisión.' },
    { id: 12, nombre: 'WXB7946', precio: 420, imagen: '/imagenes/Captura de pantalla 2025-02-13 124733.png', descripcion: 'Reloj juvenil con correa de nylon y diseño moderno, ideal para cualquier ocasión.' }
  ];


      
      private productoSeleccionado: any = null;

  constructor() {}

  obtenerProductos() {
    return this.productos;
  }

  obtenerProductoPorId(id: number) {
    return this.productos.find(prod => prod.id === id);
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  obtenerProductoSeleccionado() {
    return this.productoSeleccionado;
 }
      
}