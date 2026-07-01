# 08 · Plan de implementación

> Fases del proyecto. Marca cada casilla al completar la fase.
> No marcar como hecho lo que no se haya verificado.

## Stack elegido

**HTML + CSS + JavaScript vanilla**, sin framework ni build (preferencia explícita del brief;
no existía stack previo configurado). Estructura:

- `index.html` — home one-page (todas las secciones ancla).
- `aviso-legal.html`, `privacidad.html`, `cookies.html`, `terminos.html` — placeholders legales.
- `src/styles/` — `tokens.css`, `typography.css`, `globals.css`, `components.css`.
- `src/scripts/main.js` — menú móvil, FAQ acordeón, tabs de precios, scroll suave, validación de form,
  scroll-reveal (respetando `prefers-reduced-motion`).
- `public/` — assets optimizados (imágenes WebP, fuentes WOFF2, iconos SVG, logos, favicon, OG).

## 1. Auditoría de archivos

-   [x] Inventariar todo lo recibido en `assets-source/`
-   [x] Identificar formatos, calidad y derechos de uso (fuentes *trial* → licencia pendiente)
-   [x] Registrar hallazgos en `docs/07-DESIGN-DECISIONS.md`

## 2. Revisión de identidad

-   [x] Leer `docs/02-BRAND.md`
-   [x] Confirmar colores, tipografías y mapeo de recursos
-   [x] Definir qué se debe evitar (exceso de cards, emojis-icono, clonar Refero)

## 3. Análisis de Refero

-   [x] Estudiar referencia en `docs/03-REFERO-DESIGN.md`
-   [x] Extraer patrones útiles (jerarquía, espaciado, ritmo, pills, prueba social, tabs)
-   [x] Registrar decisiones en `docs/07-DESIGN-DECISIONS.md`

## 4. Sistema de tokens

-   [x] Definir paleta final en `src/styles/tokens.css` (con nombres semánticos)
-   [x] Definir escala tipográfica y de espaciado
-   [x] Definir radios, sombras, transiciones, breakpoints, contenedores y z-index

## 5. Arquitectura de contenido

-   [x] Usar contenido real de `docs/04-CONTENT.md`
-   [x] Confirmar orden de secciones de `docs/05-SITEMAP.md`
-   [x] Asociar cada imagen/icono a su sección

## 6. Componentes base

-   [x] Componentes UI vía clases CSS en `src/components` lógico → `components.css`
    (header, nav, menú móvil, botones, card, media, form, footer, pill-tabs, accordion)

## 7. Página principal

-   [x] Ensamblar la home con secciones y contenido real (sin Lorem, sin datos inventados)

## 8. Responsive

-   [x] Mobile-first
-   [x] Breakpoints 390 / 768 / 1024 / 1440

## 9. Accesibilidad

-   [x] Contraste suficiente (texto sobre degradado/superficies)
-   [x] Foco visible y navegación por teclado (skip-link, menú, acordeón con ARIA)
-   [x] Etiquetas, roles y textos alternativos
-   [x] Respeto a `prefers-reduced-motion`

## 10. SEO

-   [x] Metadatos de `docs/06-SEO.md` (title, description, canonical, lang `es-EC`)
-   [x] Open Graph + Twitter Card + favicon
-   [x] Datos estructurados (Organization, WebSite, SoftwareApplication+offers, Service, FAQPage)
        — sin `aggregateRating` ni `LocalBusiness`

## 11. Optimización

-   [x] Imágenes → WebP en `public/` (hero 61 KB, funcionalidades 54 KB, OG 84 KB)
-   [x] Fuentes → WOFF2 (`font-display: swap`, preload de la display)
-   [x] Iconos recoloreables vía `mask` (sin peticiones extra de color)

## 12. Pruebas y build

-   [x] Validación de marcado/CSS/JS (sin build; checks manuales y de sintaxis)
-   [ ] Lint / Typecheck / Test formales — **N/A** (proyecto sin toolchain configurado)
-   [x] "Build" = sitio estático servible tal cual (`index.html` + `public/` + `src/`)

## Pendientes reales (requieren al cliente)

| # | Ítem | Estado |
| --- | --- | --- |
| 1 | Autorización de logos de empresas y testimonios reales | 🔴 |
| 2 | Datos de contacto reales (WhatsApp, teléfono, email) | 🔴 |
| 3 | URL real de registro/app para los CTA de prueba | 🔴 |
| 4 | Endpoint/backend para el formulario de leads | 🔴 |
| 5 | Confirmar canales e integraciones disponibles y API oficial de WhatsApp | 🔴 |
| 6 | Licencia de producción de las tipografías Cocogoose (hoy *trial*) | 🔴 |
| 7 | Dominio definitivo (canonical, OG, sitemap, robots) | 🔴 |
| 8 | Redactar Términos, Privacidad, Cookies y Aviso legal reales | 🔴 |
| 9 | ¿Entran Blog y Distribuidores al alcance? | 🟡 |
