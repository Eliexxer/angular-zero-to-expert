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

El contenido de este curso está centralizado y estructurado en dos grandes bloques lógicos para facilitar su navegación:

*   **`Bases de TypeScript/`** → Laboratorios, ejercicios y asignaciones teórica-prácticas enfocadas en dominar el tipado estricto, interfaces, módulos, clases, genéricos y programación orientada a objetos (POO).
*   **`Proyectos/`** → Aplicaciones web completas y modulares desarrolladas a lo largo del curso. Cada subcarpeta representa un proyecto independiente (ej. *GifsApp*, *CountryApp*, *HeroesApp*) diseñado para resolver problemas del mundo real consumiendo APIs y aplicando reactividad moderna.


---

## ⚙️ Requisitos y Configuración Local

Para clonar y ejecutar cualquiera de estos miniproyectos en tu entorno local, asegúrate de tener instalado **Node.js** y **Angular CLI**.

1. **Clonar el repositorio:**
```bash
   git clone [https://github.com/Eliexxer/angular-zero-to-expert.git](https://github.com/Eliexxer/angular-zero-to-expert.git)
   cd angular-zero-to-expert
```

2. **Ingresar a una aplicación específica e instalar dependencias**
```bash
   cd Proyectos/nombre-proyecto
   npm install
```

3. **Levantar el servidor de Desarrollo**
```bash
   ng serve -o
```

## 🛠️ Stack Tecnológico Utilizado
* **Core**: Angular 19+, TypeScript, RxJS.
* **Estilos**: Tailwind CSS, Bootstrap (según la sección).
* **Herramientas y Control**: Git, Angular CLI, Antigravity, Zed.

## ✒️ Notas

Este repositorio ha sido construido de forma iterativa con fines estrictamente académicos y de crecimiento profesional. Aunque la base lógica proviene de las guías del curso, he tratado de implementar refactorizaciones propias y personalizaciones en las interfaces para llevar cada reto un paso más allá de las instrucciones del instructor.
