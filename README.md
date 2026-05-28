Ecommerce Angular AP2

Proyecto web tipo e-commerce desarrollado con Angular, TypeScript, Bootstrap, HTML, CSS y JSON Server como base de datos simulada.

Este proyecto fue realizado para el curso de JavaScript Avanzado - AP2.

Descripción del proyecto

La aplicación simula una tienda online donde se muestran productos dinámicamente desde un archivo db.json. Además, cuenta con navegación entre páginas, login simulado, dashboard protegido y una estructura basada en componentes reutilizables.

Tecnologías utilizadas
Angular
TypeScript
HTML
CSS
Bootstrap
JSON Server
LocalStorage
Páginas implementadas
Home
Productos
Ofertas
Tienda
Contacto
Mi Cuenta
Login
Dashboard
Página 404 personalizada
Funcionalidades principales
Navbar reutilizable
Footer reutilizable
Routing entre páginas
Página 404 para rutas inexistentes
Login simulado con LocalStorage
Protección del Dashboard
Consumo de productos desde db.json
Visualización dinámica de productos
Uso de componentes Angular
Uso de directivas *ngFor, *ngIf, [ngClass] y [ngStyle]
Uso de pipes de Angular
Diseño responsive con Bootstrap
Instalación del proyecto

Primero instalar las dependencias:

npm install
Ejecutar Angular

Para levantar el proyecto Angular:

ng serve

Luego abrir en el navegador:

http://localhost:4200/
Ejecutar JSON Server

Para levantar la base de datos simulada:

npx json-server --watch db.json --port 3000

La API local estará disponible en:

http://localhost:3000/productos
Estructura principal
src/
 └── app/
     ├── components/
     │   ├── navbar/
     │   └── footer/
     ├── pages/
     │   ├── home/
     │   ├── productos/
     │   ├── ofertas/
     │   ├── tienda/
     │   ├── contacto/
     │   ├── mi-cuenta/
     │   ├── login/
     │   ├── dashboard/
     │   └── not-found/
     └── services/
         └── producto.ts
Repositorio

Repositorio GitHub:

https://github.com/kmarcos26/ecommerce-angular-ap2
Autor

Kevin Marcos - kmarcos26