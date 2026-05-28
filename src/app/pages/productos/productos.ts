import { Component, OnInit } from '@angular/core';
import {
  CurrencyPipe,
  NgClass,
  NgFor,
  NgIf,
  NgStyle,
  UpperCasePipe
} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto, ProductoService } from '../../services/producto';

@Component({
  selector: 'app-productos',
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    NgClass,
    NgStyle,
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  productos: Producto[] = [];
  textoBusqueda: string = '';
  categoriaSeleccionada: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  obtenerCategorias(): string[] {
    return [...new Set(this.productos.map(producto => producto.categoria))];
  }

  productosFiltrados(): Producto[] {
    return this.productos.filter(producto => {
      const coincideTexto = producto.nombre
        .toLowerCase()
        .includes(this.textoBusqueda.toLowerCase());

      const coincideCategoria =
        this.categoriaSeleccionada === '' ||
        producto.categoria === this.categoriaSeleccionada;

      return coincideTexto && coincideCategoria;
    });
  }
}