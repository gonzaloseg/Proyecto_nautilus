import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-contacta',
  templateUrl: './contacta.component.html',
  styleUrls: ['./contacta.component.css']
})
export class ContactaComponent {
  model: any = {};

  enviar(form: NgForm) {
    if (form.valid) {
      alert('Su mensaje se ha enviado correctamente');
      form.resetForm(); // Resetea el formulario tras envío exitoso
    }
  }
}
