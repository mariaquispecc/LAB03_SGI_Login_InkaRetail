# SGI InkaRetail: Laboratorio 03
### IS-489 Pruebas y Aseguramiento de Calidad de Software | UNSCH 2026-I

---

##  Datos del repositorio

| Campo | Detalle |
|-------|---------|
| **Asignatura** | IS-489 Pruebas y Aseguramiento de Calidad de Software |
| **Docente** | Ing. Lizbeth Jaico Quispe |
| **Semestre** | 2026-I — Presencial |
| **Laboratorio** | N° 03 — Diseño de Casos de Prueba Funcionales |

---

## Objetivo del laboratorio

Diseñar casos de prueba funcionales aplicando las técnicas de **Partición de Equivalencia (PE)** y **Análisis de Valores Límite (AVL)** sobre el módulo de autenticación del sistema SGI InkaRetail.

---

##  Sistema bajo prueba

**InkaRetail S.A.C.** — Empresa de retail con 12 tiendas en Ayacucho, Huancayo y Cusco.

El módulo bajo prueba es la **autenticación de usuarios** del SGI (Sistema de Gestión de Inventario), que incluye:

- `Login` — Inicio de sesión con email y contraseña
- `Registro` — Creación de nuevas cuentas con validaciones de seguridad

---

##  Estructura del repositorio

```
📁 inicio de sesion sgi/
│
├── index.html          ← Sistema SGI (abrir en navegador para ejecutar los casos)
├── home.html           ← Página de inicio después del login exitoso
│
├── css/
│   ├── login.css       ← Estilos del formulario de autenticación
│   └── home.css        ← Estilos de la página de inicio
│
└── js/
    ├── app.js          ← Lógica del login y registro
    └── home.js         ← Lógica de la página de inicio
```

---


TAREA:
#  TAREA — Laboratorio 03


Debes seleccionar **un sistema real** de la siguiente lista y diseñar los casos sobre su módulo de **Login o Registro**. También puedes proponer otro sistema con aprobación del docente.

| # | Sistema | URL | Módulo sugerido |
|---|---------|-----|----------------|
| 1 | **Bruno Ferrini** (e-commerce de moda) | https://www.brunoferrini.com |
| 3 | **UNSCH Intranet** | https://intranet.unsch.edu.pe 
| 4 | **Saga Falabella Perú** (e-commerce) | https://www.falabella.com.pe | 
| 5 | **Ripley Perú** (e-commerce) | https://simple.ripley.com.pe | 
| 6 | **Mercado Libre Perú** | https://www.mercadolibre.com.pe | 

>  **Importante:** NO necesitas crear una cuenta real ni comprar nada.
> Solo necesitas identificar un modulo y trabajar las reglas de validación
> que aplica el sistema y diseñar los casos de prueba en base a eso.

---

## 📌 Lo que debes documentar antes de diseñar los casos

Antes de escribir un solo caso de prueba, responde estas preguntas en tu Word:

**1. ¿Qué campos tiene el formulario?**


**2. ¿Qué validaciones aplica el sistema?**
> Ejemplo: ¿Acepta emails sin @? ¿Tiene límite de caracteres? ¿Qué pasa si dejas un campo vacío?

**3. ¿Cuáles son los rangos válidos de cada campo?**
> Ejemplo: contraseña mínimo 8 caracteres, email debe tener formato correcto...

**4. ¿Cuál es el mensaje de error que muestra el sistema cuando algo falla?**
> Capturas de pantalla como evidencia.

---

## 🧪 Casos de prueba requeridos — mínimo 10

Diseña **al menos 10 casos de prueba** que cubran:

Crea un proyecto y dentro de un archivo md.   con:

```
1. Portada: nombre, código, sistema elegido, URL, fecha
2. Descripción del sistema bajo prueba (en tus propias palabras)
3. Módulo elegido y justificación
4. Turl de la matriz del excel
6. Capturas de pantalla como evidencia de ejecución
---

*Universidad Nacional de San Cristóbal de Huamanga — Ayacucho, 2026*
