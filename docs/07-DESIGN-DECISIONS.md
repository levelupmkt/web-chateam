# 07 · Decisiones de diseño

> Registro de decisiones de diseño. Cada vez que se adopte, adapte o descarte
> una idea (propia o de Refero), añade una fila.
>
> Columna **Se conserva / adapta / descarta**: usa uno de esos tres valores.
> (Aquí "se conserva" significa: conservamos el **principio funcional**, no la expresión literal de Refero.)

## Concepto visual

**"Calidez de WhatsApp con la claridad de un CRM profesional."**

Chateam se construye sobre un lienzo blanco amplio, con el **degradado de marca teal→cian**
(`#005166 → #23DADA`) como gesto distintivo reservado al Hero y al Footer (según `02-BRAND.md`).
La personalidad —moderna, confiable, cercana— se expresa con tipografía **redondeada Cocogoose**
en titulares (coherente con el logotipo), generoso espacio en blanco, y un uso **disciplinado**
del cian como acento. Se evita el exceso de tarjetas (regla de `02-BRAND.md`): las secciones
priorizan composiciones editoriales (listas con icono, pasos numerados, split de texto+imagen)
sobre rejillas de cajas.

## Resumen de auditoría (Fase 1)

- **Marca (`02-BRAND.md`)** — Paleta confirmada (verde `#005166`, cian `#23DADA`, verde oscuro
  `#013D4C`, cian claro `#E7FEFE`, blanco, gris `#F1F1F1`), degradado de marca, tipografías
  Cocogoose Pro (titulares) + Poppins Medium (texto). Logo: mascota tipo burbuja-chat + wordmark.
- **Contenido** — Se usa `docs/04-CONTENT.md` como fuente (tiene los precios reales del PDF).
  `docs/CONTENT-REFERENCIA.md` es una versión anterior con precios `[PENDIENTE]`; **no** se usa
  para precios ni para afirmar canales como "✅ Disponible".
- **Recursos disponibles y usables:**
  - 20 iconos SVG de línea (4 `dolor-*`, 8 `feature-*`, 8 sectores) → mapean 1:1 con el contenido.
  - `imagen-hero.webp` (694×719, **con transparencia**) → cutout listo para el degradado del Hero.
  - `seccion-funcionalidades.png` (1186×1482, 1.5 MB) → optimizada a WebP (54 KB).
  - 5 logos de empresas (`logo-negocio1–5`) → barra de prueba social.
  - `favicon.svg` (mascota) → favicon.
  - Fuentes TTF (versión *trial*) → convertidas a WOFF2.
- **Inconsistencias / faltantes bloqueantes:** ninguno bloqueante para construir la home.
  Pendientes reales documentados al final de este archivo y en `08-IMPLEMENTATION-PLAN.md`.

## Principios tomados de Refero (TravelPerk) — adaptados, no copiados

| Decisión | Fuente | Se conserva / adapta / descarta | Aplicación en la marca | Justificación | Fecha |
| --- | --- | --- | --- | --- | --- |
| Jerarquía tipográfica fuerte (display grande, cuerpo tranquilo) | Refero | adapta | Cocogoose redondeada en titulares (no la grotesca comprimida OTSono); escala propia 16→64px en vez de 90px | Conserva el principio de contraste de escala; cambia la expresión a la voz redondeada de Chateam | 2026-06-30 |
| Superficies diferenciadas por valor de color | Refero | adapta | Blanco / cian claro `#E7FEFE` / gris `#F1F1F1` / degradado, en vez de crema/lima | Mantiene el ritmo de bandas alternas; paleta 100 % de marca | 2026-06-30 |
| Barra de prueba social (logos) tras el hero | Refero | adapta | Logos reales provistos por el cliente, en gris, encabezado honesto | Patrón útil de confianza; con recursos propios | 2026-06-30 |
| Selector de pestañas tipo "pill" para alternar contenido | Refero | adapta | Toggle Emprendedores / Empresarial en la sección de Planes | Reduce densidad; expresión y colores propios | 2026-06-30 |
| Botones "pill" (radio alto) llenos vs. fantasma | Refero | adapta | Radio propio (full) ; relleno verde/cian de marca, no lima | El logo redondeado pide botones redondeados; color de marca | 2026-06-30 |
| Espaciado generoso / densidad cómoda | Refero | adapta | Escala de espaciado propia (base 4px) y `--space-section` amplio | Calidad percibida; tokens propios | 2026-06-30 |
| Sistema **sin sombras** (elevación por contraste) | Refero | **descarta** | Sí usamos sombras suaves teñidas de teal, con moderación | Divergencia deliberada de Refero; aporta calidez y profundidad propia | 2026-06-30 |
| Radio único 26px en todo | Refero | **descarta** | Escala propia (10/16/24/32 + pill) | Evitar el "shape language" identificable de Refero | 2026-06-30 |
| Paleta lima sobre crema | Refero | **descarta** | Teal/cian sobre blanco | Identidad de marca tiene prioridad (`CLAUDE.md`) | 2026-06-30 |
| Tipografía única OTSono | Refero | **descarta** | Cocogoose (titulares) + Poppins (texto) | Identidad de marca | 2026-06-30 |
| Composición del Hero (texto centrado + cards flotando alrededor de un teléfono) | Refero | **descarta** | Hero asimétrico: copy a la izquierda, cutout de producto a la derecha sobre degradado | Evitar clonar la composición distintiva | 2026-06-30 |
| Orden de secciones de Refero | Refero | **descarta** | Orden propio según embudo de decisión (ver `05-SITEMAP.md`) | La narrativa responde al objetivo comercial de Chateam | 2026-06-30 |

## Decisiones propias de marca

| Decisión | Se conserva / adapta / descarta | Justificación | Fecha |
| --- | --- | --- | --- |
| Degradado teal→cian solo en Hero y Footer | conserva | Indicación explícita de `02-BRAND.md` | 2026-06-30 |
| Iconos recoloreados con `mask` CSS a verde de marca | conserva | Permite usar los SVG negros provistos y teñirlos con tokens, sin alterar los originales | 2026-06-30 |
| Botón CTA del header en verde `#005166` | conserva | Indicación de `02-BRAND.md` (columna Notas) | 2026-06-30 |
| Minimizar tarjetas; preferir listas/íconos editoriales | conserva | `02-BRAND.md` → "evitar excesivo uso de cards" | 2026-06-30 |
| Sin emojis como iconos de UI (se usan los SVG de marca) | conserva | Regla de `CLAUDE.md` y del brief | 2026-06-30 |

## Suposiciones documentadas (no bloqueantes)

1. **Logos de empresas:** se usan los 5 provistos en `assets-source/images/logo-emrpesas/`
   (FliteFactura, Smart Track, Aria Lite, El Bakán, SGR) en la barra de prueba social, asumiendo
   que el cliente los entregó autorizados para ese fin. Encabezado honesto y sin afirmar métricas.
   → Confirmar autorización.
2. **Canales de mensajería:** el brief (`01`) lista WhatsApp, Instagram, Messenger y Telegram como
   funcionalidad del producto y aparecen en la imagen de marca; se muestran como canales soportados.
   **No** se afirma "API oficial de WhatsApp Business" (marcado `[por confirmar]`).
3. **Integraciones específicas** (Facebook Ads, Google Ads, Zapier): `[por confirmar]` → se describen
   de forma genérica ("conecta tus herramientas de marketing"), sin logos ni nombres como hechos.
4. **Destino de los CTA** "Prueba gratis"/"Solicita demo": URL de app/registro PENDIENTE → enrutados
   al formulario `#contacto` (coherente con el objetivo de generar leads).
5. **Formulario de contacto:** validación en cliente y estado de éxito; **no** hay backend conectado
   (endpoint pendiente). Documentado en el código.
6. **Testimonios:** se **omite** la sección (no hay testimonios reales). Regla de `CLAUDE.md`.
7. **Distribuidores / Blog:** fuera del alcance de la v1; se deja enlace de footer desactivado/oculto.
8. **Tipografías Cocogoose** son versión *trial*: licencia PENDIENTE para producción. Se usan por
   indicación de marca, con fallback de sistema (Poppins / sans redondeada).

## Control anticlón (revisión final)

- ¿Misma composición de hero que Refero? **No** (split asimétrico vs. centrado con cards flotantes).
- ¿Paleta demasiado parecida? **No** (teal/cian vs. lima/crema).
- ¿Recursos gráficos identificables copiados? **No** (ilustraciones, iconos y fotos son propios).
- ¿Mismo orden de secciones? **No** (orden propio según embudo).
- ¿Botones/tarjetas casi iguales? **No** (radio, color y sombra propios; sí usamos sombra, Refero no).
- ¿Se confundiría con la marca original? **No**.
- ¿Comunica la marca sin el logo? **Sí** (degradado teal→cian + tipografía redondeada + cian de acento).
