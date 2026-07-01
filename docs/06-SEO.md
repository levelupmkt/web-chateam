# 06 · SEO

> Configuración SEO base. Marca lo desconocido como `PENDIENTE`.
> Borrador de metadatos tomado de `CONTENT-REFERENCIA.md` y alineado con `04-CONTENT.md`.
> Los textos marcados _(borrador)_ son editables; confirmar dominio y datos reales.

## Metadatos principales (página principal)

| Campo | Valor |
| --- | --- |
| Meta title | Chateam — CRM de WhatsApp para negocios en Ecuador _(borrador, ~50 car.)_ |
| Meta description | Gestiona tus ventas, automatiza mensajes y atiende a tus clientes desde un solo lugar. Prueba Chateam gratis por 14 días. _(borrador, ~120 car.)_ |
| URL canónica | `https://chateam.ws/` _(confirmar dominio)_ |

## Palabras clave

-   Palabra clave principal: **CRM de WhatsApp en Ecuador**.
-   Palabras clave secundarias:
    -   CRM para PYMES
    -   automatización de WhatsApp
    -   gestión de clientes por WhatsApp
    -   WhatsApp Business Ecuador
    -   funnel / pipeline de ventas
    -   chatbot de WhatsApp
    -   CRM para negocios

## Open Graph

| Campo | Valor |
| --- | --- |
| og:title | Chateam — CRM de WhatsApp para negocios en Ecuador _(borrador)_ |
| og:description | Centraliza tus chats, automatiza tu seguimiento y vende más por WhatsApp. Prueba gratis 14 días. _(borrador)_ |
| og:image | PENDIENTE — imagen de marca 1200×630 → `public/images/` |
| og:url | `https://chateam.ws/` _(confirmar dominio)_ |
| og:type | website |
| og:locale | es_EC |

> Twitter/X Cards: `summary_large_image` (reutiliza og:title, og:description y og:image).

## Favicon

-   Origen: isotipo / logo de Chateam → `public/favicon/` (PENDIENTE, depende de `02-BRAND.md`).
-   Formatos sugeridos: `favicon.ico`, PNG 32×32 y 16×16, `apple-touch-icon` 180×180, SVG y
    `site.webmanifest`.

## Localización

| Campo | Valor |
| --- | --- |
| Idioma (`lang`) | `es-EC` (fallback `es`) |
| Ciudad | PENDIENTE (por confirmar) |
| País | Ecuador |
| Área de atención | Ecuador (cobertura nacional) |

## Datos estructurados aplicables (JSON-LD)

> Ej.: Organization, WebSite, SoftwareApplication, Service, FAQPage, BreadcrumbList…

-   **Organization** — nombre "Chateam", `url`, `logo`, `sameAs` (RRSS PENDIENTE),
    `contactPoint` (email / WhatsApp PENDIENTE).
-   **WebSite** — `name` + `url` del sitio.
-   **SoftwareApplication** — `applicationCategory: BusinessApplication`, `operatingSystem: Web`,
    con `offers` según `docs/precios-planes.pdf` (`priceCurrency: USD`; reflejar suscripción
    mínima de 3 meses). Planes: Starter $9.99 … Elite Corporate $99.99.
-   **Service** — "CRM de WhatsApp" con `areaServed: Ecuador`.
-   **FAQPage** — usar las preguntas de la sección `#faq` de `04-CONTENT.md`.
-   **BreadcrumbList** — opcional (sitio one-page).
-   ⚠️ **No** incluir `aggregateRating` ni `Review` hasta tener reseñas reales verificables.
-   **LocalBusiness** — solo si existe una dirección física real (PENDIENTE); de lo contrario, omitir.

## Pendientes SEO

-   Confirmar **dominio** definitivo (canónica, OG, sitemap, robots).
-   Generar **imagen Open Graph** (1200×630) y **favicons** desde la marca.
-   Confirmar **ciudad/área** para señales locales y datos estructurados.
-   `sitemap.xml` y `robots.txt` al pasar a implementación.
