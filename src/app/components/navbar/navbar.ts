import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  usuario: { nombre: string; correo: string; rol: string } | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.verificarSesion();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.verificarSesion());
  }

  verificarSesion() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    this.usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.usuario = null;
    this.router.navigate(['/']);
  }
}