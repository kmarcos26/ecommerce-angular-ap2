import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { NgIf } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  usuario: any = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.verificarSesion();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.verificarSesion();
      });
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