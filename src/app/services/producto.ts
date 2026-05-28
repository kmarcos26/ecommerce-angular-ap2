import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}