import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  correo: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.correo.trim() === '' || this.password.trim() === '') {
      this.mensajeError = 'Debe completar todos los campos.';
      return;
    }

    if (this.correo === 'admin@demo.com' && this.password === '123456') {
      const usuario = {
        nombre: 'Administrador',
        correo: this.correo,
        rol: 'Admin'
      };

      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
      this.mensajeError = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }
}