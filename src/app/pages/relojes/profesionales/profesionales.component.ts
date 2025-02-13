import { Component } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrl: './profesionales.component.css'
})
export class ProfesionalesComponent {
  productos = [
    { id: 1, nombre: 'Producto A', precio:"",imagen:"" },
    { id: 2, nombre: 'Producto B',  precio:"",imagen:"" },
    { id: 3, nombre: 'Producto C', precio:"",imagen:"" },
  ];
}
