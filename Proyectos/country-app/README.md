# CountryApp 🗺️ (Buscador de Países por REST Countries API)

Este proyecto es una aplicación web interactiva desarrollada con **Angular** (v21+) y **Tailwind CSS** que permite buscar, filtrar y examinar información geográfica, demográfica y política detallada sobre los países de todo el mundo mediante el consumo del servicio **REST Countries API**.

🔗 **Demo en vivo:** [Ver despliegue en Vercel](https://vercel.com/eliexxers-projects/countries-app/ARrvvs3XA1RcSJXN8fB8jxiwtedr)

Destaca por implementar un sistema avanzado de **almacenamiento en caché en memoria** y manipulación de flujos reactivos complejos con **RxJS**.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Búsquedas de Países Multicriterio**:
   * **Por Capital**: Busca países escribiendo su ciudad capital.
   * **Por Nombre/Traducción**: Consulta países mediante sus nombres oficiales o traducciones locales.
   * **Por Región**: Filtra países dinámicamente según su continente (África, América, Asia, Europa, Oceanía).
   * **Filtro del Mundial (World Cup)**: Filtro personalizado que realiza cruces de datos entre la API y un conjunto de datos estático (`WORLD_CUP_COUNTRIES_DATA`) para mostrar únicamente los países clasificados a mundiales de fútbol.

2. **Detalles de País con Rutas Dinámicas (Country Detail Page)**:
   * Vista individual y detallada para cada país que muestra información sobre banderas, población, mapas, traducciones, códigos de área y más.
   * Navegación parametrizada mediante el código ISO de 3 letras del país (`/country/code`).

3. **Sistema de Caching en Memoria (Optimización de Red)**:
   * Evita llamadas HTTP redundantes a la API externa.
   * Implementación de objetos de tipo `Map` nativos en JavaScript (`queryCacheCountry`, `queryCacheCapital`, etc.).
   * Si el usuario repite una búsqueda, los datos se recuperan instantáneamente en memoria utilizando el operador `of()` de RxJS, mejorando significativamente la velocidad de la app y reduciendo el consumo de la cuota de la API.

---

## 🛠️ Tecnologías y Conceptos Reforzados

* **Angular Routing**: Uso avanzado del enrutador de Angular, configuración de rutas hijas, obtención de parámetros de ruta (`ActivatedRoute`) y redirecciones dinámicas.
* **Programación Reactiva con RxJS**:
  * **`map`**: Para la transformación y filtrado de la estructura de datos que devuelve la API.
  * **`tap`**: Para guardar silenciosamente los resultados en las cachés correspondientes al completarse las búsquedas.
  * **`of` / `throwError`**: Para simular y devolver flujos reactivos desde memoria o emitir excepciones personalizadas de forma elegante.
  * **`catchError`**: Para interceptar errores de red y propagarlos como mensajes legibles en la interfaz.
* **Mappers**: Estructura de mapeo (`CountryMapper`) que limpia e independiza la respuesta cruda de la API del modelo de datos de la interfaz.

---

## 📦 Instalación y Ejecución Local

1. Instalar las dependencias de Node:
   ```bash
   npm install
   ```

2. Configurar las variables de entorno:
   * Crea un archivo `.env` en la raíz basándote en el archivo `.env.template` y añade tu Endpoint Base y tu API Key de REST Countries correspondientes.

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run start
   ```
   *Accede a [http://localhost:4200](http://localhost:4200) en tu navegador.*
