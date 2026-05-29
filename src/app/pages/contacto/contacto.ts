import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, NgIf],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;
  error = '';

  enviarMensaje() {
    if (!this.nombre || !this.correo || !this.mensaje) {
      this.error = 'Completa todos los campos antes de enviar.';
      this.enviado = false;
      return;
    }

    this.error = '';
    this.enviado = true;

    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}