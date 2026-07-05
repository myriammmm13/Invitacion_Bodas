# Virtual Wedding Invitation (Invitación de Bodas Digital)

¡Bienvenido/a! Este proyecto consiste en una plataforma web interactiva diseñada para transformar la experiencia de organizar una boda. Centraliza la confirmación de asistencia (RSVP), difunde el *dress code*, comparte las localizaciones geográficas, el itinerario del evento en tiempo real y gestiona recuerdos fotográficos de manera segura.

Despliegue planificado: **Noviembre - Enero** | Alcance estimado: **~200 invitados**.

---

## El Problema & La Solución

Organizar una boda suele ser un desafío logístico: confirmar la asistencia de decenas de invitados, recordarles el *dress code*, compartir ubicaciones y mantener el itinerario al día consume mucho tiempo. 

**Esta aplicación resuelve esa problemática centralizando todo en una experiencia mobile-first única:**
* **Confirmación de Asistencia (RSVP):** El invitado busca su nombre y confirma en segundos con un solo clic.
* **Seguridad y Privacidad:** Búsqueda controlada (con opción de token/UUID por WhatsApp) para evitar duplicados o accesos no deseados.
* **Panel de Administración Protegido:** Un espacio exclusivo para los novios donde visualizar en tiempo real la lista de confirmados y mensajes de felicitación.
* **Integración sin fricciones:** Direcciones directas a Google Maps, botón para agendar el evento en Google Calendar y subida segura de fotos vía Google Forms (sin exponer carpetas compartidas).

---

## Arquitectura y Tecnologías

El sistema sigue un enfoque desacoplado y ligero, optimizado para despliegues rápidos en servicios administrados.

┌─────────────────────┐       HTTPS/JSON       ┌──────────────────────┐
│  React (Frontend)   │ ─────────────────────▶ │  Spring Boot (API)   │
│  Vercel / Netlify   │ ◀───────────────────── │  Railway / Render    │
└─────────────────────┘                         └──────────┬───────────┘
│ JDBC
┌──────────▼───────────┐
│      MySQL           │
│  Railway MySQL Plugin│
└───────────────────────┘

* **Frontend:** React (Desarrollo estrictamente *mobile-first*), React Router DOM, Axios, QRCode.react.
* **Backend:** Spring Boot (API REST), Spring Data JPA, Spring Security (Basic Auth para la sección Admin), Spring Validation.
* **Base de Datos:** MySQL.
* **Contenerización:** Docker & Docker Compose (para consistencia entre desarrollo local y producción).
* **Infraestructura:** Vercel (Frontend) + Railway (Backend y Base de datos MySQL).

---

## 📊 Diseño de la Base de Datos (Esquema simplificado)

### 1. Tabla `invitados`
*Entidad principal precargada por los organizadores.*
* `id` (BIGINT, PK, AI)
* `nombre_completo` (VARCHAR) - *Para coincidencia parcial e indexada.*
* `tiene_acompanante` (BOOLEAN)
* `nombre_acompanante` (VARCHAR, NULL)
* `confirmacion_invitado` (ENUM: 'pendiente', 'asiste', 'no_asiste')
* `confirmacion_acompanante` (ENUM, NULL)
* `mensaje_felicitacion` (TEXT, NULL)
* `fecha_confirmacion` (DATETIME)
* `token_busqueda` (UUID, Opcional para privacidad)

### 2. Tabla `configuracion_evento` (Fila única)
* Almacena datos dinámicos como `fecha_hora_boda`, `dress_code`, `cancion_url`, links de Google Maps para ceremonia/recepción y el enlace del formulario de fotos.

### 3. Tabla `itinerario`
* Cronograma del evento ordenado por hora y actividad.

---

## 📦 Desarrollo Local con Docker

Para levantar todo el entorno local (Base de datos MySQL + Servidor Spring Boot), asegúrate de tener instalado Docker y ejecuta:

```bash
docker-compose up --build
```

El backend estará disponible en http://localhost:8080.

## Decisiones de Ingeniería clave (Keep It Simple)
Google Calendar sin API: Se optó por construir dinámicamente un link parametrizado (https://calendar.google.com/calendar/render...) evitando OAuth complejas.

Subida de fotos con Google Forms: En lugar de implementar lógica de almacenamiento de archivos en el backend o abrir una carpeta de Drive (riesgo de borrado accidental), se embebe un formulario de Google tipo "Subir archivo". El QR en el frontend apunta al formulario, garantizando privacidad absoluta entre invitados.

Música nativa: Control de reproducción en fondo mediante un tag <audio> de HTML5 con useRef activado tras la primera interacción del usuario ("Abrir invitación"), sorteando las políticas de bloqueo de autoplay de los navegadores móviles.

Seguridad mínima: Implementación de Rate Limiting en las búsquedas para evitar scraping de la lista completa y protección del panel con Basic Auth absteniéndose del sobrecoste de tokens JWT.
