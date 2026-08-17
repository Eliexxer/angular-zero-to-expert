# LifecycleHooks 🔄 (Ciclo de Vida de los Componentes en Angular)

Este proyecto es una aplicación didáctica y de diagnóstico construida en **Angular** (v21+) diseñada para demostrar el flujo de ejecución completo, el orden de disparo y el caso de uso práctico de todos los **ciclos de vida (Lifecycle Hooks)**, tanto tradicionales como modernos.

Es de gran utilidad para demostrar el conocimiento profundo del funcionamiento interno de Angular, la detección de cambios y la integración segura con el DOM ante reclutadores técnicos.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Monitoreo de Ciclos de Vida Tradicionales**:
   * **`ngOnChanges`**: Detección del cambio de propiedades de entrada (`input()`) mostrando la comparación entre el valor previo, el actual y si se trata del primer cambio mediante el objeto `SimpleChanges`.
   * **`ngOnInit`**: Inicialización del componente una vez que las propiedades de entrada están disponibles.
   * **`ngDoCheck`**: Control y detección personalizada de cambios que Angular no puede identificar por sí mismo.
   * **`ngAfterContentInit` / `ngAfterContentChecked`**: Procesos tras la proyección del contenido externo (`<ng-content>`).
   * **`ngAfterViewInit` / `ngAfterViewChecked`**: Acciones tras la renderización completa de las vistas hijas del componente.
   * **`ngOnDestroy`**: Liberación de recursos, desuscripción de flujos de datos y limpieza de eventos antes de destruir el componente.

2. **Demostración de los Nuevos Ciclos de Renderizado (v17+)**:
   * **`afterNextRender`**: Ejecución de código único justo después del siguiente renderizado completo del DOM. Ideal para inicializar plugins de terceros o manipular el DOM de forma segura sin romper la compatibilidad con SSR (Server-Side Rendering).
   * **`afterEveryRender`**: Ejecución continua de lógica de sincronización después de cada ciclo de renderizado en el navegador.

3. **Consola Visual Estilizada**:
   * Mensajes de log diferenciados y estilizados por CSS en la consola de herramientas de desarrollador para seguir con precisión el orden y el propósito de cada hook durante las interacciones del usuario.

---

## 🛠️ Conceptos y Tecnologías Reforzadas

* **Detección de Cambios de Angular**: Comprensión práctica de cómo y cuándo Angular comprueba la validez del DOM y actualiza los componentes.
* **Integración SSR-Friendly**: Uso de las nuevas APIs de renderizado diferido en lugar de llamadas inseguras al DOM en el hilo principal durante la inicialización.
* **Signal Inputs y SimpleChanges**: Monitoreo de propiedades basadas en señales y su interacción con los ganchos de ciclo tradicionales.

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
   *Accede a [http://localhost:4200](http://localhost:4200) en tu navegador y abre las herramientas de desarrollo (F12 -> Consola) para observar el flujo de ejecución.*
