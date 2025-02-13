import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  productos = [
    { id: 1, nombre: 'Reloj Deportivo A', categoria: 'Deportivos' },
    { id: 2, nombre: 'Reloj Clásico B', categoria: 'Clásicos' },
    { id: 3, nombre: 'Reloj Deportivo C', categoria: 'Deportivos' },
    { id: 4, nombre: 'Reloj Clásico D', categoria: 'Clásicos' },
    { id: 5, nombre: 'Reloj Moderno E', categoria: 'Todos' }
  ];
}
