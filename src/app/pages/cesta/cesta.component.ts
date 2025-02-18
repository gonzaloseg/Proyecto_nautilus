import { Component } from '@angular/core';
import { CestaService } from '../../services/cesta.servicio/cesta.service';
@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  cesta: any[] = [];

  constructor(private cestaService: CestaService) {}

  ngOnInit() {
    this.cesta = this.cestaService.obtenerCesta();
  }
}