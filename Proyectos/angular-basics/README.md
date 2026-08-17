# AngularBasics 🚀 (Bases de Angular)

Este proyecto es una aplicación web introductoria desarrollada para sentar las bases fundamentales de **Angular** (v21+), explorando el ciclo de vida de los datos, la vinculación del DOM y la comunicación elemental entre componentes.

Está diseñado como una guía conceptual para demostrar el entendimiento de la arquitectura de Angular a futuros reclutadores.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Contador Interactivo (Counter Component)**:
   * Demostración básica de enlace de eventos (`(click)`) y enlace de propiedades (`[property]`).
   * Manejo elemental del estado local del componente sin efectos secundarios.

2. **Página de Héroes (Hero Page)**:
   * Uso de interpolación para inyectar variables en la plantilla.
   * Uso de directivas estructurales y condicionales.
   * Implementación de métodos tipo `get` para computar cadenas de caracteres complejas dinámicamente basadas en el estado del componente.
   * Vinculación dinámica de clases CSS y estilos.

3. **Sección de Dragonball (Componentes Anidados y Data Binding)**:
   * Renderizado de listas complejas y formularios para inserción de nuevos guerreros.
   * **Comunicación Padre-Hijo**: Demostración de flujos de datos ascendentes y descendentes (flujo unidireccional de datos).
   * Migración práctica al uso moderno de **Signals** (`signal()`, `computed()`) para una reactividad más ligera y eficiente.

---

## 🛠️ Conceptos y Tecnologías Reforzadas

* **Enlace de datos (Data Binding)**: Enlace unidireccional (One-way binding), enlace bidireccional mediante señales y vinculación de eventos del usuario.
* **Componentes Standalone**: Modularidad moderna sin necesidad de archivos `NgModule` heredados.
* **Signals de Angular**: Creación y actualización de estados mediante `signal` y variables reactivas dependientes mediante `computed`.
* **Organización del Proyecto**: Estructura limpia separando `components`, `pages`, e `interfaces`.

---

## 📦 Instalación y Ejecución Local

1. Instalar las dependencias de Node:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run start
   ```
   *Accede a [http://localhost:4200](http://localhost:4200) en tu navegador.*
