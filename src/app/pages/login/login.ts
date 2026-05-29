import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface UsuarioDemo {
  nombre: string;
  correo: string;
  rol: string;
}

@Component({
  selector: 'app-login',
  imports: [NgIf, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  correo = '';
  password = '';
  mensajeError = '';
  usuario: UsuarioDemo | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    this.usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  }

  iniciarSesion() {
    if (this.correo.trim() === '' || this.password.trim() === '') {
      this.mensajeError = 'Completa todos los campos.';
      return;
    }

    if (this.correo === 'admin@urbanpet.com' && this.password === '123456') {
      const usuario: UsuarioDemo = {
        nombre: 'Administrador UrbanPet',
        correo: this.correo,
        rol: 'Admin'
      };

      localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
      this.usuario = usuario;
      this.mensajeError = '';
      this.router.navigate(['/dashboard']);
      return;
    }

    this.mensajeError = 'Correo o contraseña incorrectos.';
  }

  usarDemo() {
    this.correo = 'admin@urbanpet.com';
    this.password = '123456';
    this.mensajeError = '';
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.usuario = null;
    this.correo = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}