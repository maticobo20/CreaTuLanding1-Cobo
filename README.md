# MËLEꓘ - E-commerce React

Aplicación web de e-commerce para la marca MËLEꓘ, desarrollada con React, Vite y Firebase. Permite navegar productos, ver detalles, agregar al carrito y realizar compras con integración a Firestore.

## Tabla de contenidos
- [Instalación](#instalación)
- [Librerías utilizadas](#librerías-utilizadas)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Funcionalidades principales](#funcionalidades-principales)
- [Configuración de Firebase](#configuración-de-firebase)

---

## Instalación

1. Clona el repositorio:
	```bash
	git clone https://github.com/maticobo20/CreaTuLanding1-Cobo.git
	cd CreaTuLanding1-Cobo
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```
4. Accede a la app en [http://localhost:5173](http://localhost:5173)

## Librerías utilizadas

- **React**: ^19.1.0
- **React DOM**: ^19.1.0
- **React Router DOM**: ^7.8.1
- **Firebase**: ^12.2.1
- **Vite**: ^7.0.4
- **ESLint**: ^9.30.1

## Estructura del proyecto

```
├── public/
│   └── [imágenes de productos y logo]
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── CartWidget.jsx
│   │   ├── Checkout.jsx
│   │   ├── Item.jsx
│   │   ├── ItemCount.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── LoaderComponent.jsx
│   │   └── NavBar.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── css/
│   │   └── [estilos de componentes]
│   ├── mock/
│   │   └── AsyncMock.js
│   ├── service/
│   │   └── firebase.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Uso

1. Navega por las categorías y productos.
2. Visualiza detalles de cada producto.
3. Agrega productos al carrito.
4. Accede al carrito y finaliza la compra completando el formulario.
5. La orden se guarda en Firebase Firestore y se muestra el ID de compra.

## Funcionalidades principales

- Catálogo de productos con imágenes, descripción y stock.
- Filtro por categorías.
- Detalle de producto.
- Carrito de compras persistente.
- Formulario de checkout con validación.
- Integración con Firebase Firestore para guardar órdenes.
- Mensajes visuales de éxito y error.
- Navegación con React Router.
- Estilos personalizados en CSS.

## Configuración de Firebase

La app utiliza Firebase Firestore para almacenar las órdenes. Configura tu propio proyecto en `src/service/firebase.jsx` si deseas usar otras credenciales.

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

