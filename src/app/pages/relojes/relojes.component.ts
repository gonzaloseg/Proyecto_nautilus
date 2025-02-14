import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { productoservicio } from '../../services/producto.servicio/producto.servicio.component';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent {
  productos: any[] = []; // Lista de productos
  
    /**
     * Constructor que inyecta los servicios necesarios.
     * @param productoServicio Servicio para gestionar productos
     * @param router Servicio de navegación
     */
    constructor(private productoservicio: productoservicio, private router: Router) {}
  
    /**
     * Inicializa los productos al cargar el componente.
     */
    ngOnInit() {
      this.productos = this.productoservicio.obtenerProductos();
    }
  
    /**
     * Navega a la página de detalles del producto seleccionado.
     * @param producto Producto seleccionado
     */
    verDetalles(producto: any) {
      this.productoservicio.seleccionarProducto(producto);
      this.router.navigate(['/producto', producto.id]);
   }
}
