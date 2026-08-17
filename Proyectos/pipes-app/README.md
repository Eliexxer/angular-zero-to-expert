# PipesApp 🛠️ (Uso de Pipes Nativos y Creación de Pipes Personalizados)

Este proyecto es una aplicación web interactiva desarrollada con **Angular** (v21+), **Tailwind CSS v4** y **DaisyUI** que recopila casos de uso avanzados para la transformación visual de datos en las plantillas mediante el uso de **Pipes** (tanto los nativos del framework como pipes creados a medida).

Demuestra la capacidad de crear filtros de ordenamiento, traducción y formateo eficientes directamente en las vistas de la aplicación.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Pipes Nativos de Angular**:
   * **Básicos**: Formateo de fechas (`DatePipe`), manipulación de texto (`UpperCasePipe`, `LowerCasePipe`, `TitleCasePipe`).
   * **Numéricos**: Control y formateo localizado de decimales (`DecimalPipe`), porcentajes (`PercentPipe`) y monedas nacionales (`CurrencyPipe`).
   * **Poco Comunes**: Uso práctico de `KeyValuePipe` (para recorrer objetos literales), `JsonPipe` (diagnóstico de estado), `SlicePipe` (recorte de colecciones), e internacionalización dinámica mediante `I18nSelectPipe` e `I18nPluralPipe`.

2. **Pipes Personalizados a Medida (Custom Pipes)**:
   * **`ToggleCasePipe`**: Convierte texto entre mayúsculas y minúsculas dinámicamente al presionar un botón.
   * **`CanFlyPipe`**: Transforma valores booleanos en respuestas claras y visuales (e.g. `true` -> "Vuela", `false` -> "No vuela").
   * **`HeroColorPipe` y `HeroTextColorPipe`**: Mapean valores numéricos de enums de colores a nombres de clases utilitarias de Tailwind CSS para colorear insignias dinámicamente.
   * **`HeroSortPipe`**: Ordena dinámicamente colecciones de datos (objetos de tipo Héroe) según la propiedad elegida por el usuario (nombre, capacidad de volar o color) al hacer clic en las cabeceras de una tabla.
   * **`HeroFilterPipe`**: Realiza búsquedas y filtrados de elementos de una lista en tiempo real.

---

## 🛠️ Tecnologías y Conceptos Reforzados

* **Angular Pipes (Arquitectura)**: Comprensión y creación de transformaciones de datos puras e impuras para optimizar el rendimiento y la detección de cambios.
* **Componentes de UI Dinámicos**: Implementación de tablas interactivas con clasificadores y filtrados instantáneos sin recargar la página.
* **Tailwind CSS v4 y DaisyUI**: Maquetación adaptativa, botones temáticos, tablas interactivas y badges coloridos integrados directamente con pipes.

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
