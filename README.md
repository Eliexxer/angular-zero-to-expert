# Angular: De Cero a Experto 🚀

Este repositorio contiene el conjunto de aplicaciones, laboratorios prácticos y miniproyectos desarrollados a lo largo del curso **"Angular de cero a experto" de Fernando Herrera**. El objetivo principal de este espacio es consolidar el dominio del framework, aplicando las mejores prácticas de arquitectura de software, patrones de diseño y la gestión del estado moderno.

---

## 🎯 Objetivos de Aprendizaje Alcanzados

*   **Arquitectura Moderna:** Migración mental y práctica hacia el paradigma de **Standalone Components**, eliminando el uso de módulos tradicionales (`NgModule`).
*   **Reactividad Avanzada:** Gestión del estado de grano fino y rendimiento optimizado utilizando la API de **Angular Signals** (`signal`, `computed`, `effect`).
*   **Formularios Robustos:** Implementación de formularios reactivos complejos con validaciones personalizadas, síncronas y asíncronas.
*   **Ciclo de Vida de Red:** Manejo avanzado de servicios RESTful mediante el protocolo HTTP, optimización con interceptores de red y protección de rutas con Guardas de navegación (*Guards*).
*   **Maquetación y Estilos:** Integración de sistemas de estilizado modernos como **Tailwind CSS** para interfaces responsivas y modulares.

---

## 📂 Estructura del Repositorio

El proyecto está organizado de forma modular, donde cada carpeta representa una sección del curso o una aplicación funcional independiente:

*   `01-typescript-intro/` → Fundamentos avanzados de TypeScript, tipado estricto, interfaces y programación orientada a objetos.
*   `02-bases/` → Conceptos nucleares de Angular: Directivas, componentes, interpolación y comunicación unidireccional (Inputs/Outputs).
*   `03-gifs-app/` → Aplicación web de consumo de APIs externas (Giphy API) con persistencia de datos en *LocalStorage* e interceptores de red.
*   `04-country-app/` → SPA avanzada enfocada en enrutamiento dinámico, optimización de búsquedas remotas con técnicas de *Debounce* (RxJS) y estructuración de layouts.
*   `05-heroes-app/` → Desarrollo Full-Stack simulado que incluye un backend en JSON-Server, diseño UI con Angular Material/Tailwind y operaciones CRUD completas.
*   `06-forms-app/` → Control exhaustivo de formularios reactivos y validaciones dinámicas en tiempo real.

*(Nota: Puedes ir modificando o añadiendo las carpetas a medida que avances en las secciones).*

---

## ⚙️ Requisitos y Configuración Local

Para clonar y ejecutar cualquiera de estos miniproyectos en tu entorno local, asegúrate de tener instalado **Node.js** y **Angular CLI**.

1. **Clonar el repositorio:**
```bash
   git clone [https://github.com/TuUsuarioDeGitHub/angular-zero-to-expert.git](https://github.com/TuUsuarioDeGitHub/angular-zero-to-expert.git)
   cd angular-zero-to-expert

   cd 03-gifs-app
   npm install

   ng serve -o
```

## 🛠️ Stack Tecnológico Utilizado
* **Core**: Angular 19+, TypeScript, RxJS.
* **Estilos**: Tailwind CSS, Bootstrap (según la sección).
* **Herramientas y Control**: Git, Angular CLI, Antigravity, Zed.

## ✒️ Notas

Este repositorio ha sido construido de forma iterativa con fines estrictamente académicos y de crecimiento profesional. Aunque la base lógica proviene de las guías del curso, he tratado de implementar refactorizaciones propias y personalizaciones en las interfaces para llevar cada reto un paso más allá de las instrucciones del instructor.
