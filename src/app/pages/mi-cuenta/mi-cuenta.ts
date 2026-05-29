import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mi-cuenta',
  imports: [NgIf, RouterLink],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css'
})
export class MiCuenta implements OnInit {
  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');

    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.usuario = null;
    this.router.navigate(['/']);
  }
}