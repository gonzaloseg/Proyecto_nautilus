import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Asegúrate de que esté importado correctamente
import { RelojesComponent } from '../relojes.component';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto: any;

  constructor(
    private relojes: RelojesComponent,

    private route: ActivatedRoute,
 
    private router: Router,
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto=this.relojes.productos
  }
   
  
}

