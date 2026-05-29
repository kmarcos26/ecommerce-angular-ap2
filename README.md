# UrbanPet Wear

UrbanPet Wear es una aplicación web tipo e-commerce desarrollada con Angular. El proyecto simula una tienda online de ropa y accesorios funcionales para perros y gatos, permitiendo visualizar productos dinámicos, filtrar por categorías, iniciar sesión de forma simulada y acceder a un dashboard protegido.

## Descripción del proyecto

La aplicación fue desarrollada como parte del AP2 del curso JavaScript Avanzado. El objetivo principal es aplicar conceptos de Angular como componentes, navegación, formularios, directivas, pipes, consumo de servicios REST y despliegue de aplicaciones web.

## Tecnologías utilizadas

* Angular
* TypeScript
* HTML
* CSS
* Bootstrap
* Bootstrap Icons
* JSON Server
* LocalStorage
* Git y GitHub

## Funcionalidades principales

* Navbar reutilizable.
* Footer reutilizable.
* Arquitectura basada en componentes.
* Navegación entre páginas mediante Angular Routing.
* Página Home.
* Página Productos.
* Página Ofertas.
* Página Tienda.
* Página Contacto.
* Página Mi Cuenta.
* Página Login.
* Dashboard protegido.
* Página 404 personalizada.
* Login simulado con validaciones básicas.
* Almacenamiento de sesión en LocalStorage.
* Opción de cerrar sesión.
* Consumo de productos desde `db.json` usando JSON Server.
* Servicio Angular para consumir la API REST.
* Renderizado dinámico de productos.
* Buscador de productos.
* Filtro por categorías.
* Cards responsive para productos.
* Uso de directivas estructurales y de atributos.
* Uso de pipes para formato de datos.
* Diseño responsive para desktop y mobile.

## Requisitos aplicados de Angular

### Data Binding

Se aplicaron los siguientes tipos de data binding:

* Interpolación `{{ }}`
* Property Binding `[src]`, `[alt]`, `[disabled]`
* Event Binding `(click)`, `(ngSubmit)`
* Two-Way Data Binding `[(ngModel)]`

### Directivas estructurales

* `*ngFor`: usado para recorrer y mostrar la lista de productos.
* `*ngIf`: usado para mostrar mensajes condicionales, validar sesión y controlar estados visuales.

### Directivas de atributos

* `[ngClass]`: usado para cambiar clases según el stock o estado del formulario.
* `[ngStyle]`: usado para modificar estilos dinámicos según la disponibilidad del producto.

### Pipes

* `CurrencyPipe`: usado para mostrar precios en formato de moneda.
* `UpperCasePipe`: usado para mostrar nombres de productos en mayúsculas.

## Páginas del sistema

| Página    | Descripción                                                 |
| --------- | ----------------------------------------------------------- |
| Home      | Presenta la tienda y sus principales secciones.             |
| Productos | Muestra el catálogo dinámico consumido desde JSON Server.   |
| Ofertas   | Presenta promociones y descuentos.                          |
| Tienda    | Organiza las principales categorías de productos.           |
| Contacto  | Formulario para consultas del usuario.                      |
| Mi Cuenta | Perfil editable con datos guardados localmente.             |
| Login     | Inicio de sesión simulado con validaciones.                 |
| Dashboard | Panel protegido con información del usuario y estadísticas. |
| 404       | Página personalizada para rutas inexistentes.               |

## Credenciales de prueba

Para ingresar al sistema se pueden utilizar las siguientes credenciales:

```txt
Correo: admin@urbanpet.com
Contraseña: 123456
```

## Base de datos simulada

El proyecto utiliza un archivo `db.json` como base de datos simulada.
Cada producto contiene los siguientes campos:

```json
{
  "id": 1,
  "nombre": "Hoodie Verde Canino",
  "imagen": "https://...",
  "categoria": "Perros",
  "precio": 59.90,
  "stock": 15
}
```

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/kmarcos26/ecommerce-angular-ap2.git
```

### 2. Entrar a la carpeta del proyecto

```bash
cd ecommerce-angular-ap2
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar Angular

```bash
npm start
```

La aplicación estará disponible en:

```txt
http://localhost:4200/
```

### 5. Ejecutar JSON Server

En otra terminal, ejecutar:

```bash
npm run api
```

La API local estará disponible en:

```txt
http://localhost:3000/productos
```

## Scripts disponibles

```bash
npm start
```

Ejecuta el servidor de desarrollo de Angular.

```bash
npm run api
```

Ejecuta JSON Server usando el archivo `db.json`.

```bash
npm run build
```

Genera la versión compilada del proyecto.

## Estructura general del proyecto

```txt
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   └── footer/
│   ├── guards/
│   │   └── auth-guard.ts
│   ├── pages/
│   │   ├── home/
│   │   ├── productos/
│   │   ├── ofertas/
│   │   ├── tienda/
│   │   ├── contacto/
│   │   ├── mi-cuenta/
│   │   ├── login/
│   │   ├── dashboard/
│   │   └── not-found/
│   ├── services/
│   │   └── producto.ts
│   ├── app.routes.ts
│   └── app.html
├── styles.css
db.json
README.md
package.json
angular.json
```

## Dashboard protegido

El Dashboard está protegido mediante una validación de sesión con LocalStorage.
Si el usuario intenta ingresar directamente a `/dashboard` sin iniciar sesión, será redirigido al Home.

## Despliegue

El proyecto puede desplegarse en plataformas como:

* Vercel
* Netlify
* Firebase Hosting
* GitHub Pages

Link del proyecto desplegado:

```txt
Colocar aquí el enlace del despliegue
```

## Repositorio

```txt
https://github.com/kmarcos26/ecommerce-angular-ap2
```

## Integrantes

* Kevin Marcos - kmarcos26
* Fernando Lagos - fvlm-hub

## Observaciones

Para visualizar correctamente los productos dinámicos, es necesario ejecutar JSON Server con el comando:

```bash
npm run api
```

Esto permite que Angular consuma la información desde:

```txt
http://localhost:3000/productos
```
