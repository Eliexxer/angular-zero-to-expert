# MapsApp 🗺️ (Angular + MapLibre GL)

Este proyecto es una aplicación web interactiva desarrollada para demostrar la integración de sistemas de mapas de alto rendimiento (**MapLibre GL JS** / **OpenStreetMap**) dentro del ecosistema moderno de **Angular** (v21+). 

🔗 **Demo en vivo:** [Ver despliegue en Vercel](https://vercel.com/eliexxers-projects/maps-app/7z5agNdFJbCZC1F55gQewqca8FKp) 

Está diseñado específicamente como un portafolio técnico para reclutadores, destacando buenas prácticas en desarrollo frontend, arquitectura de componentes reutilizables, y el uso del nuevo sistema reactivo de Angular.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Mapa a Pantalla Completa (Fullscreen Map)**:
   * Renderizado optimizado de mapas interactivos a pantalla completa adaptándose dinámicamente al Viewport mediante cálculos CSS para evitar desbordamientos de barra de desplazamiento.
   * Uso de capas base gratuitas de **OpenStreetMap** sin dependencias de API keys externas.

2. **Gestión Dinámica de Marcadores (Markers Page)**:
   * Colocación de marcadores personalizados con colores aleatorios mediante clics interactivos sobre el mapa.
   * Marcadores con propiedad de arrastre (`draggable`) y seguimiento en tiempo real de nuevas coordenadas.
   * Menú lateral reactivo que enlista todos los marcadores creados.
   * **Animaciones de Cámara (`flyTo`)**: Al hacer clic en cualquier marcador de la lista, la cámara del mapa se desplaza suavemente realizando una animación zoom hacia sus coordenadas exactas.
   * **Formateo de Precisión**: Las coordenadas en la lista se formatean usando tuberías (`DecimalPipe`) para mostrar exactamente 5 decimales, mientras que al pasar el cursor (hover) se muestra un tooltip nativo con la coordenada cruda completa para no comprometer la legibilidad de la UI.

3. **Mini Mapas Reutilizables (Houses Page)**:
   * Listado de propiedades inmobiliarias donde cada tarjeta de propiedad encapsula e inicializa su propio mapa miniatura interactivo e independiente.
   * Creación del componente reutilizable `<mini-maps>` que recibe coordenadas de entrada dinámicas y monta el mapa de forma aislada.

---

## 🛠️ Tecnologías y Conceptos Reforzados

### 1. Angular Moderno (v17 - v21)
* **Signals & State Management**: Gestión reactiva del estado de los marcadores utilizando señales (`signal<libreMarker[]>`) y actualizaciones reactivas con `.update()`.
* **Signal Inputs**: Uso de la nueva sintaxis `input()` en componentes reutilizables para recibir flujos de datos de coordenadas.
* **Signal Queries (`viewChild`)**: Acceso seguro a referencias de elementos del DOM (`ElementRef`) tras la inicialización de la vista (`ngAfterViewInit`) para acoplar lienzos de mapas WebGL.
* **Nuevo Control Flow**: Implementación de las directivas semánticas modernas `@for`, `@empty` y `@if` para una renderización de plantillas más rápida y legible.
* **Estilos Encapsulados y Tailwind v4**: Coordinación de directivas de diseño de Tailwind CSS con el encapsulamiento de estilos por componente (`ViewEncapsulation.Emulated`) para evitar colisiones de tamaño.

### 2. Integración de Mapas Interactivos (MapLibre GL JS)
* Manejo del ciclo de vida de mapas basados en WebGL dentro de componentes SPA.
* Manipulación y transformación de coordenadas geográficas en formato `[Longitud, Latitud]`.
* Personalización y escucha de eventos de mapas (`on('click')`, `on('dragend')`, etc.).
* Manejo y optimización del **Web Worker** de MapLibre dentro de entornos de desarrollo basados en **Vite**.

### 3. Configuración de Construcción (Build Optimization)
* Configuración de presupuestos de empaquetado inicial (**Budgets**) en `angular.json` incrementados para acomodar librerías de mapeo pesado sin comprometer la compilación de producción.
* Optimización de hojas de estilos globales importando recursos de paquetes npm directamente en `styles.css`.

---

## 📦 Instalación y Ejecución Local

1. Clonar el repositorio y acceder a la carpeta del proyecto:
   ```bash
   cd Proyectos/maps-app
   ```

2. Instalar las dependencias de Node:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo local:
   ```bash
   npm run start
   ```
   *Accede a [http://localhost:4200](http://localhost:4200) en tu navegador.*

4. Compilar para producción (con optimizaciones completas):
   ```bash
   npm run build
   ```
