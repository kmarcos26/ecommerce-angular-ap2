import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { Producto, ProductoService } from '../../services/producto';

@Component({
  selector: 'app-dashboard',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  usuario: any = null;

  productos: Producto[] = [];
  totalProductos: number = 0;
  productosStockLimitado: number = 0;
  totalCategorias: number = 0;

  constructor(
    private router: Router,
    private productoService: ProductoService,
    private cdr: ChangeDetectorRef
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
      next: (data) => {
        console.log('Productos recibidos en dashboard:', data);

        this.productos = data;
        this.totalProductos = data.length;

        this.productosStockLimitado = data.filter(
          producto => producto.stock <= 10
        ).length;

        this.totalCategorias = new Set(
          data.map(producto => producto.categoria)
        ).size;

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar productos en dashboard:', error);
      }
    });
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/']);
  }
}