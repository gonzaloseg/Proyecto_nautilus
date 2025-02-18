import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CestaService } from '../../services/cesta.servicio/cesta.service';
import { productoservicio } from '../../services/producto.servicio/producto.servicio.component';


@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: any;// Variable donde guardaremos el producto encontrado

  constructor(
    private productoservicio: productoservicio, // Inyectamos el servicio que contiene el array de productos
    private cestaService: CestaService, // Servicio para la cesta de compras
    private route: ActivatedRoute, // Para obtener parámetros de la URL
    private router: Router // Para navegar si es necesario
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Obtener ID de la URL
    this.producto = this.productoservicio.obtenerProductoPorId(id); // Buscar el producto en el servicio
    
  }

  agregarACesta() {
   
      this.cestaService.agregarProducto(this.producto);
      alert(`${this.producto.nombre} agregado al carrito`);
    
  }
}
