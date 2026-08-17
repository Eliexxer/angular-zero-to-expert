# ReactiveForms 📝 (Formularios Reactivos y Validaciones)

Este proyecto es una aplicación web interactiva desarrollada con **Angular** (v21+) dedicada al dominio completo del módulo de **Formularios Reactivos (Reactive Forms)**, validaciones complejas de múltiples campos, controles dinámicos y sincronización de estados del formulario.

Demuestra la capacidad de construir formularios seguros, dinámicos y robustos listos para entornos empresariales.

---

## 🚀 Características Clave (Alcance del Proyecto)

1. **Formulario Básico (Basic Form)**:
   * Captura estructurada de datos básicos (nombre, precio, existencias).
   * Validaciones estándar síncronas (`Validators.required`, `Validators.minLength`, `Validators.min`).
   * Visualización condicional y limpia de mensajes de error específicos para cada campo.
   * Restablecimiento controlado del estado del formulario tras un envío exitoso.

2. **Formulario Dinámico (Dynamic Form / FormArray)**:
   * Permite a los usuarios agregar, editar y eliminar campos de entrada en tiempo real dentro del formulario (e.g., agregar una lista de juegos favoritos).
   * Implementación avanzada del objeto **`FormArray`** de Angular, manteniendo la reactividad y las validaciones individuales de cada campo autogenerado de forma independiente.

3. **Formulario de Interruptores (Switches & Checks Page)**:
   * Sincronización condicional de campos (interruptores de radio, interruptores deslizantes y términos y condiciones de tipo checkbox).
   * Habilitación y deshabilitación dinámica de secciones del formulario basadas en la selección de opciones previas del usuario.

4. **Validaciones Avanzadas y Personalizadas (Validators)**:
   * **Validaciones Síncronas Personalizadas**: Lógica a medida para validar cadenas de caracteres o confirmar la coincidencia exacta entre dos contraseñas en campos separados.
   * **Validaciones Asíncronas (Async Validators)**: Simulación de llamadas a servidores API (mediante retrasos programados de observables) para verificar en tiempo real si un nombre de usuario ya está registrado en la base de datos antes de permitir el envío del formulario.

---

## 🛠️ Tecnologías y Conceptos Reforzados

* **Angular Reactive Forms Module**: Uso de clases core como `FormGroup`, `FormControl`, `FormArray` y la inyección del servicio `FormBuilder` para declaraciones más limpias.
* **Manejo de Errores en Formularios**: Funciones helper para determinar la validez de los campos y retornar descripciones de errores precisas en el HTML.
* **RxJS en Formularios**: Suscripción al flujo continuo de cambios de valor (`valueChanges`) de campos individuales para sincronizar estados en tiempo real de forma declarativa.

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
