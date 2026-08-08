# Frontend Mentor - Solución Product List with Cart

Esta es mi solución al desafío **Product List with Cart** de Frontend Mentor. Este proyecto se centra en construir una interfaz moderna y totalmente responsive para mostrar una lista de postres y un carrito de compras que se adapta perfectamente a dispositivos de escritorio, tabletas y móviles.

El desafío fue una excelente oportunidad para practicar arquitectura de componentes en React, componentes reutilizables, React Hooks, manejo de estado, props, renderizado condicional, renderizado dinámico de listas, diseños responsive con Tailwind CSS v4, Flexbox, estados interactivos de la interfaz, animaciones con Motion y despliegue de una aplicación lista para producción utilizando Vite y GitHub Pages.

---

## Tabla de contenidos

* [Descripción general](#descripción-general)
* [El desafío](#el-desafío)
* [Diseño](#diseño)
* [Enlaces](#enlaces)
* [Mi proceso](#mi-proceso)
* [Construido con](#construido-con)
* [Lo que aprendí](#lo-que-aprendí)

---

## Descripción general

Este proyecto es una aplicación responsive de una lista de productos de repostería que permite a los usuarios explorar diferentes postres, agregar productos al carrito de compras, modificar cantidades, eliminar productos y confirmar su pedido.

La interfaz fue desarrollada siguiendo un enfoque **mobile-first** utilizando React y Tailwind CSS v4. El diseño se adapta a dispositivos móviles, tabletas y computadoras de escritorio, manteniendo una jerarquía visual y una experiencia de usuario consistente.

La aplicación está organizada en componentes React reutilizables agrupados por funcionalidad, lo que facilita el mantenimiento y la ampliación del proyecto.

La aplicación también incluye transiciones animadas para el carrito de compras y el modal de confirmación del pedido utilizando Motion.

---

## El desafío

Los usuarios deben poder:

* Visualizar el diseño óptimo dependiendo del tamaño de pantalla de su dispositivo.
* Visualizar una lista de postres disponibles.
* Agregar postres al carrito de compras.
* Aumentar la cantidad de productos en el carrito.
* Disminuir la cantidad de productos en el carrito.
* Eliminar productos del carrito de compras.
* Visualizar la cantidad total de productos en el carrito.
* Visualizar el precio total del pedido.
* Visualizar un estado de carrito vacío cuando no se hayan agregado productos.
* Visualizar un mensaje de entrega con emisiones neutras de carbono.
* Confirmar un pedido.
* Visualizar un modal de confirmación con los productos seleccionados.
* Iniciar un nuevo pedido y reiniciar el carrito de compras.
* Experimentar un diseño responsive en dispositivos móviles, tabletas y computadoras de escritorio.
* Interactuar con los elementos de la interfaz mediante componentes React reutilizables.
* Experimentar animaciones sutiles cuando cambian los estados del carrito y de la confirmación del pedido.

---

## Diseño

### Diseño de escritorio

### Estados activos

### Diseño de escritorio con productos seleccionados

### Confirmación del pedido en escritorio

### Diseño móvil

### Diseño móvil con productos seleccionados

### Confirmación del pedido

---

## Enlaces

* URL de la solución: [Repositorio de GitHub](https://github.com/mlopezl/product-list-with-card)
* URL del sitio: [Demo en vivo](https://mlopezl.github.io/product-list-with-card/)

---

## Mi proceso

* Estructuré la aplicación utilizando componentes funcionales reutilizables de React.

* Organicé el proyecto mediante carpetas de componentes basadas en funcionalidades, incluyendo:

  * Cards
  * Cart
  * Order

* Seguí un enfoque **mobile-first** para garantizar una experiencia responsive en diferentes tamaños de pantalla.

* Construí diseños responsive utilizando Flexbox y las clases utilitarias de Tailwind CSS.

* Implementé puntos de quiebre responsive.

* Creé componentes reutilizables para las tarjetas de productos, elementos del carrito, botones, información del pedido y el modal de confirmación.

* Utilicé props de React para pasar datos de productos, información del carrito, funciones callback y valores calculados entre los componentes padre e hijo.

* Gestioné el estado del carrito de compras utilizando el Hook `useState` de React.

* Creé un estado `cart` basado en un array para almacenar los postres seleccionados y sus cantidades.

* Implementé la funcionalidad para agregar productos al carrito.

* Comprobé si un producto ya existe en el carrito antes de agregarlo.

* Aumenté la cantidad del producto cuando se agrega nuevamente un producto que ya existe en el carrito.

* Implementé la funcionalidad para disminuir la cantidad de productos en el carrito.

* Eliminé automáticamente un producto del carrito cuando su cantidad llega a uno y el usuario la disminuye.

* Implementé la funcionalidad para eliminar completamente productos del carrito de compras.

* Calculé dinámicamente el total del pedido utilizando el método `.reduce()`.

* Rendericé dinámicamente las tarjetas de productos y los elementos del carrito utilizando el método `.map()`.

* Utilicé props `key` únicas al renderizar listas dinámicas.

* Implementé renderizado condicional para mostrar diferentes estados del carrito dependiendo de si se han agregado productos.

* Creé una interfaz de carrito vacío que se muestra cuando el carrito no contiene productos.

* Creé una interfaz de carrito lleno que muestra:

  * Productos seleccionados
  * Cantidades de productos
  * Precios individuales de los productos
  * Precio total del pedido
  * Mensaje de entrega con emisiones neutras de carbono
  * Botón para confirmar el pedido

* Creé un componente independiente para la confirmación del pedido.

* Pasé los datos del carrito y el total calculado al componente de confirmación mediante props de React.

* Implementé un estado para controlar la finalización del pedido utilizando `useState`.

* Mostré condicionalmente el modal de confirmación del pedido cuando se completa un pedido.

* Utilicé `AnimatePresence` de Motion para gestionar las animaciones de montaje y desmontaje de los componentes.

* Añadí animaciones sutiles de opacidad y escala al modal de confirmación del pedido.

* Añadí una capa de fondo cuando se muestra el modal de confirmación.

* Utilicé el Hook `useEffect` para desplazar automáticamente la página hacia la parte superior cuando cambia el estado de confirmación del pedido.

* Implementé una acción **"Start New Order"** que reinicia el estado de confirmación y limpia el carrito de compras.

* Utilicé fuentes de imágenes responsive proporcionadas por los datos del proyecto para diferentes tamaños de pantalla.

* Almacené la información de los postres en un archivo independiente `data.json`, manteniendo los datos de los productos separados de los componentes React.

* Utilicé las clases utilitarias de Tailwind CSS v4 para crear el diseño responsive y los estilos visuales.

* Utilicé clases utilitarias personalizadas de Tailwind para colores, espaciado, tipografía, bordes y sombras.

* Utilicé recursos SVG para elementos interactivos de la interfaz, como los controles del carrito y de cantidad.

* Construí y optimicé el proyecto utilizando Vite.

* Utilicé PNPM como administrador de paquetes.

* Generé una compilación de producción con:

```bash
pnpm run build
```

* Desplegué la compilación de producción en GitHub Pages.

---

## Construido con

* React
* JSX
* JavaScript (ES6+)
* React Hooks
* `useState`
* `useEffect`
* React Props
* Composición de componentes
* Tailwind CSS v4
* Flexbox
* Principios de diseño responsive
* Enfoque Mobile-first
* HTML semántico
* Renderizado condicional
* Renderizado dinámico de listas
* Métodos de arrays
* `.map()`
* `.find()`
* `.filter()`
* `.reduce()`
* Manejo de eventos
* Manejo de estado
* Lógica de carrito de compras
* Datos JSON
* Imágenes responsive
* Recursos SVG
* Motion
* `AnimatePresence`
* `motion.div`
* Vite
* PNPM
* ESLint
* GitHub Pages

---

## Lo que aprendí

* Construir interfaces responsive utilizando React y Tailwind CSS.
* Crear componentes React reutilizables con una separación clara de responsabilidades.
* Organizar componentes utilizando una estructura de carpetas basada en funcionalidades.
* Pasar datos y funciones callback entre componentes utilizando props.
* Gestionar el estado de la aplicación mediante el Hook `useState`.
* Gestionar arrays de objetos dentro del estado de React.
* Actualizar el estado de forma inmutable utilizando el operador spread.
* Agregar y actualizar productos dentro de un carrito de compras.
* Utilizar `.find()` para buscar productos existentes.
* Utilizar `.map()` para actualizar objetos específicos dentro de un array.
* Utilizar `.filter()` para eliminar productos de un array.
* Utilizar `.reduce()` para calcular el precio total del pedido.
* Crear una funcionalidad dinámica de carrito de compras utilizando el estado de React.
* Utilizar renderizado condicional para mostrar diferentes estados de la interfaz.
* Renderizar contenido dinámico a partir de arrays de JavaScript.
* Comprender la importancia de utilizar props `key` únicas al renderizar listas en React.
* Separar los datos de la aplicación de la lógica de presentación utilizando un archivo JSON.
* Pasar valores calculados entre componentes mediante props.
* Crear una interfaz reutilizable para la confirmación de pedidos.
* Gestionar la visibilidad de un modal utilizando el estado de React.
* Crear animaciones utilizando Motion y `AnimatePresence`.
* Utilizar animaciones de opacidad y escala para crear transiciones sutiles en la interfaz.
* Utilizar `useEffect` para realizar efectos secundarios cuando cambia el estado de la aplicación.
* Utilizar Tailwind CSS v4 para crear diseños responsive y patrones de estilos reutilizables.
* Construir interfaces responsive para dispositivos móviles, tabletas y computadoras de escritorio.
* Utilizar Vite para el desarrollo y las compilaciones de producción de aplicaciones React.
* Generar bundles de producción optimizados utilizando Vite.
* Desplegar una aplicación React en GitHub Pages.
