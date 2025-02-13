import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relojes',
  templateUrl: './relojes.component.html',
  styleUrls: ['./relojes.component.css']
})
export class RelojesComponent {
  constructor(private router: Router) {}

  irACategoria(categoria: string) {
    this.router.navigate([`/relojes/${categoria}`]);
  }
}
