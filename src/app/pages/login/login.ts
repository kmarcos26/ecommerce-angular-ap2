import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  correo: string = '';
  password: string = '';
  mensajeError: string = '';
  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');

    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
    }
  }

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
      this.usuario = usuario;
      this.mensajeError = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.usuario = null;
    this.correo = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}