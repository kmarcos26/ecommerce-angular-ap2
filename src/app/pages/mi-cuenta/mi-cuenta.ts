import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

interface PerfilUsuario {
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  mascotaPreferida: string;
  instagram: string;
  whatsapp: string;
  notificaciones: boolean;
}

@Component({
  selector: 'app-mi-cuenta',
  imports: [FormsModule, NgIf, NgClass, RouterLink],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta implements OnInit {
  usuarioLogueado: any = null;
  editando = false;
  mensaje = '';

  perfil: PerfilUsuario = {
    nombre: 'Cliente UrbanPet',
    correo: 'cliente@urbanpet.com',
    telefono: '999 888 777',
    direccion: 'Lima, Perú',
    mascotaPreferida: 'Perros y gatos',
    instagram: '@urbanpetwear',
    whatsapp: '999 888 777',
    notificaciones: true
  };

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    const perfilGuardado = localStorage.getItem('perfilUrbanPet');

    this.usuarioLogueado = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

    if (this.usuarioLogueado) {
      this.perfil.nombre = this.usuarioLogueado.nombre;
      this.perfil.correo = this.usuarioLogueado.correo;
    }

    if (perfilGuardado) {
      this.perfil = JSON.parse(perfilGuardado);
    }
  }

  activarEdicion() {
    this.editando = true;
    this.mensaje = '';
  }

  guardarCambios() {
    if (!this.perfil.nombre || !this.perfil.correo || !this.perfil.telefono) {
      this.mensaje = 'Completa nombre, correo y teléfono antes de guardar.';
      return;
    }

    localStorage.setItem('perfilUrbanPet', JSON.stringify(this.perfil));
    this.editando = false;
    this.mensaje = 'Información actualizada correctamente.';
  }

  cancelarEdicion() {
    const perfilGuardado = localStorage.getItem('perfilUrbanPet');

    if (perfilGuardado) {
      this.perfil = JSON.parse(perfilGuardado);
    }

    this.editando = false;
    this.mensaje = '';
  }

  cambiarNotificaciones() {
    this.perfil.notificaciones = !this.perfil.notificaciones;
  }
}