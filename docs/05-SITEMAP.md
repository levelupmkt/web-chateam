# 05 · Sitemap

> Estructura de páginas y navegación. Marca lo desconocido como `PENDIENTE`.
> Alineado con la navegación y las secciones de `04-CONTENT.md`.
>
> **Supuesto de arquitectura (confirmar en `01-PROJECT-BRIEF.md`):** sitio de **una página**
> (landing) con secciones ancla, más páginas legales independientes. Si se confirma un sitio
> **multipágina**, cada sección ancla pasaría a ser su propia ruta (`/funcionalidades`,
> `/planes`, etc.).

## Mapa de páginas

```text
/                         Inicio (one-page) — orden de secciones:
├── (Hero)                Sin ancla en menú
├── (Barra logos empresas)    Barra logos empresas / negocios que usan chateam — sin ancla en menú
├── (Problemas)           "Problemas que resuelve" — sin ancla en menú
├── #funcionalidades      Funcionalidades / características
├── #como-funciona        Cómo funciona (3 pasos)
├── #integraciones        Mensajería multicanal e integraciones
├── #casos-de-uso         Casos de uso por sector
├── #planes               Planes y precios
├── (Nosotros)            Sin ancla en menú
├── #testimonios          Testimonios / casos (cuando haya reales)
├── #faq                  Preguntas frecuentes
├── (CTA final)           Sin ancla en menú
├── #distribuidores       Programa de distribuidores (opcional, según alcance)
└── #contacto             Contacto (formulario de captura de leads)

/aviso-legal              Aviso legal
/privacidad               Política de privacidad
/cookies                  Política de cookies
/terminos                 Términos y condiciones
```

## Rutas

| Página | Ruta | Estado |
| --- | --- | --- |
| Inicio (one-page) | `/` | Activa — contiene todas las secciones ancla |
| Aviso legal | `/aviso-legal` | Por crear |
| Política de privacidad | `/privacidad` | Por crear |
| Política de cookies | `/cookies` | Por crear |
| Términos y condiciones | `/terminos` | Por crear |

**Destino de los CTA** _(por confirmar — ver `01-PROJECT-BRIEF.md`)_:

-   **Prueba gratis 14 días** / **Crear mi cuenta gratis** → registro / app de Chateam
    _(¿URL externa? PENDIENTE)_.
-   **Solicita una demo** / **Agendar demo** → `#contacto` (formulario) o agendamiento _(PENDIENTE)_.
-   **Quiero ser distribuidor** → `#distribuidores` (formulario específico) _(según alcance)_.
-   **Contacto directo por WhatsApp** → enlace `click-to-chat` _(número PENDIENTE)_.

## Navegación principal

Menú del header (enlaces ancla de la home) + CTA. Orden alineado con `04-CONTENT.md`:

-   Funcionalidades → `#funcionalidades`
-   Cómo funciona → `#como-funciona`
-   Casos de uso → `#casos-de-uso`
-   Planes → `#planes`
-   Preguntas frecuentes → `#faq`
-   Contacto → `#contacto`
-   **CTA:** Prueba gratis 14 días.

> Ítems opcionales en el menú: **Blog** (`/blog`, ocultar si no está listo) y **Distribuidores**
> (`#distribuidores`, solo si entra en el alcance).

## Navegación secundaria

> Ej.: nav del footer, utilidades, idioma.

-   **Footer (por columnas, según `04-CONTENT.md`):**
    -   Producto: Funcionalidades · Cómo funciona · Integraciones · Planes.
    -   Empresa: Nosotros _(página si aplica)_ · Blog _(futuro)_ · Distribuidores · Contacto.
    -   Legal: Términos y condiciones · Política de privacidad · Política de cookies.
-   **Redes sociales:** PENDIENTE (perfiles por confirmar).
-   **Idioma:** español (Ecuador); por ahora un solo idioma.

## Enlaces legales

-   Aviso legal: `/aviso-legal` — PENDIENTE (contenido por redactar).
-   Política de privacidad: `/privacidad` — PENDIENTE.
-   Política de cookies: `/cookies` — PENDIENTE.
-   Términos y condiciones: `/terminos` — PENDIENTE.

## Páginas futuras

> Previstas pero aún no construidas.

-   **Blog / contenidos educativos** (`/blog`) — fase futura.
-   **Distribuidores / partners** — en el lanzamiento puede ir como **sección ancla**
    (`#distribuidores`) con formulario; opcionalmente, página propia (`/distribuidores`) más adelante.
-   **Webinars** (registro) — opcional / futuro.
-   **Nosotros** (`/nosotros`) — solo si se decide convertirlo en página propia.
-   **Acceso / login** a la app — si el sitio enlaza al producto _(PENDIENTE)_.
