import { Component, OnInit } from '@angular/core';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Producto, ProductoService } from '../../services/producto';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  usuario: any = null;
  totalProductos = 0;
  totalStock = 0;
  categorias = 0;
  valorInventario = 0;

  constructor(
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');

    if (!usuarioGuardado) {
      this.router.navigate(['/']);
      return;
    }

    this.usuario = JSON.parse(usuarioGuardado);
    this.cargarEstadisticas();
  }

  cargarEstadisticas() {
    this.productoService.obtenerProductos().subscribe({
      next: (data: Producto[]) => {
        this.totalProductos = data.length;
        this.totalStock = data.reduce((acc, producto) => acc + producto.stock, 0);
        this.categorias = new Set(data.map(producto => producto.categoria)).size;
        this.valorInventario = data.reduce((acc, producto) => acc + (producto.precio * producto.stock), 0);
      }
    });
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/']);
  }
}