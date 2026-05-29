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
  textoBusqueda = '';
  categoriaSeleccionada = '';
  cargando = true;
  errorCarga = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        this.errorCarga = 'No se pudieron cargar los productos. Verifica que JSON Server esté activo.';
        this.cargando = false;
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

  limpiarFiltros() {
    this.textoBusqueda = '';
    this.categoriaSeleccionada = '';
  }

  estadoStock(producto: Producto): string {
    return producto.stock > 10 ? 'Disponible' : 'Stock limitado';
  }
}