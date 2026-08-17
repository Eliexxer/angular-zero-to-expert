# GifsApp 🔍 (Buscador de GIFs con Giphy API)

Este proyecto es una aplicación SPA (Single Page Application) desarrollada con **Angular** (v21+) y **Tailwind CSS / DaisyUI** que se conecta a la API de **Giphy** para buscar, organizar y almacenar en cache un historial interactivo de GIFs.

El proyecto destaca el uso de la reactividad moderna de Angular mediante Signals y buenas prácticas de diseño de APIs con mapeadores de datos.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Sección de Tendencias (Trending GIFs)**:
   * Consumo dinámico de la API de Giphy para mostrar GIFs populares en tiempo real.
   * Agrupamiento lógico de GIFs en grupos dinámicos usando señales computadas (`computed`) para facilitar el diseño en cuadrícula (grid).
   * Sistema de carga progresiva por páginas.

2. **Buscador y Caching de Historial**:
   * Entrada de búsqueda que valida y sanitiza consultas.
   * **Persistencia en LocalStorage**: Uso de los efectos reactivos (`effect()`) de Angular para monitorear cambios en el historial de búsqueda y guardarlos de forma transparente en el almacenamiento local del navegador.
   * Caching inmediato de resultados: Al hacer clic en un término de búsqueda anterior, la aplicación recupera instantáneamente los GIFs desde el caché reactivo en lugar de volver a consultar la API, ahorrando tráfico de red.

3. **Arquitectura Limpia con Mappers (Mapper Pattern)**:
   * Desacoplamiento de la respuesta de la API externa de Giphy de la interfaz de datos interna del cliente.
   * Uso de un mapeador estático (`GifMapper`) para transformar `GiphyResponse` en interfaces `Gifs` personalizadas y tipadas de forma segura.

---

## 🛠️ Tecnologías y Conceptos Reforzados

* **Angular Signals**: Uso extendido de `signal` para estado mutable, `computed` para estados derivados e `effect` para sincronizar estados reactivos con LocalStorage de forma declarativa.
* **RxJS & HttpClient**: Consumo de APIs REST utilizando flujos reactivos con operadores como `map` (para procesar payloads) y `tap` (para disparar efectos colaterales de almacenamiento).
* **Environment Configuration**: Gestión de llaves privadas y endpoints del entorno mediante archivos `environment`.

---

## 📦 Instalación y Ejecución Local

1. Acceder al directorio de la aplicación:
   ```bash
   cd Proyectos/gifs-app/giff-app
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
