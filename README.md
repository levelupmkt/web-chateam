# chateam-web

Sitio web corporativo y de producto de **Chateam** — el CRM de WhatsApp para
negocios en Ecuador. Landing one-page orientada a generar leads (prueba gratis / demo).

## Estado del proyecto

- [x] Estructura de carpetas y documentación base
- [x] Documentación de `docs/` completada
- [x] Assets originales cargados en `assets-source/` y optimizados en `public/`
- [x] Stack definido: **HTML + CSS + JS vanilla** (sin framework ni build)
- [x] Sistema de tokens y componentes
- [x] Implementación de la home + páginas legales (placeholder)

## Stack

HTML/CSS/JS estático, sin dependencias ni paso de build. Se sirve tal cual.

## Estructura

```text
index.html              Home (one-page, todas las secciones ancla)
terminos.html …         Páginas legales (placeholder honesto)
docs/                   Documentación del proyecto (leer antes de implementar)
assets-source/          Archivos originales (NO modificar)
public/                 Recursos optimizados (webp, woff2, svg, favicon, og)
src/styles/             tokens.css · typography.css · globals.css · components.css
src/scripts/main.js     Interacciones (menú, FAQ, tabs, validación, reveal)
```

## Cómo ejecutar / previsualizar

No requiere instalación. Opciones:

```bash
# 1) Servidor estático local (recomendado: las rutas relativas funcionan igual que en producción)
python3 -m http.server 8765
# luego abre http://localhost:8765/

# 2) Abrir el archivo directamente
open index.html
```

> Para producción: subir la carpeta tal cual a cualquier hosting estático
> (Netlify, Vercel, GitHub Pages, S3…). Confirmar el dominio para `canonical`/OG.

## Lint / Typecheck / Test / Build

El proyecto **no** define toolchain (es estático vanilla), por lo que no hay
comandos de lint/typecheck/test/build. La verificación se hizo de forma manual y
asistida (render headless en 360/390/768/1024/1200/1440, chequeo de
desbordamiento, consola sin errores 404/JS, e interacciones simuladas).

## Documentación

Empieza por [`docs/01-PROJECT-BRIEF.md`](docs/01-PROJECT-BRIEF.md). Decisiones de
diseño en [`docs/07-DESIGN-DECISIONS.md`](docs/07-DESIGN-DECISIONS.md) y plan en
[`docs/08-IMPLEMENTATION-PLAN.md`](docs/08-IMPLEMENTATION-PLAN.md).
Instrucciones para Claude Code en [`CLAUDE.md`](CLAUDE.md).

## Pendientes que dependen del cliente

Ver tabla final en `docs/08-IMPLEMENTATION-PLAN.md` (contacto real, URL de la app
para los CTA, endpoint del formulario, licencia de producción de las fuentes
Cocogoose, dominio, textos legales, etc.).
