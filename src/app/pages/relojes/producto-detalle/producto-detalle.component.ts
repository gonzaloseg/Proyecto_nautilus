import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  productoId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productoId = this.route.snapshot.paramMap.get('id') || ''; // Obtiene el ID del producto desde la URL
  }
}
