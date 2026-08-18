# Rediseña tu práctica docente con IA

Hub digital mobile-first del programa **Rediseña tu práctica docente con IA**.

> Rediseña cómo enseñas. Aumenta lo que logras.

## Estructura

- `index.html`: estructura semántica del hub.
- `styles.css`: diseño responsive y estilos base.
- `script.js`: colección central de recursos, contactos y renderizado de tarjetas.

## Editar recursos

Abre `script.js` y modifica la colección `resources`. Cada recurso admite:

- `id`: identificador único y estable para analítica.
- `name`: nombre visible.
- `description`: explicación breve.
- `type`: tipo o plataforma.
- `category`: categoría futura.
- `url`: enlace externo; déjalo vacío mientras esté pendiente.
- `icon`: identificador visual breve.
- `priority`: orden numérico.
- `featured`: `true` para mostrarlo como destacado y colocarlo primero.
- `badge`: etiqueta opcional como `Nuevo`, `Recomendado` o `Destacado`.
- `accent`: color de acento de la tarjeta.

Los enlaces de LinkedIn e Instagram se administran en `contactLinks`, dentro del mismo archivo.

## Analítica futura

Las tarjetas incluyen los atributos `data-resource-id`, `data-resource-category` y `data-analytics-event="resource_click"`. Los enlaces de contacto utilizan `data-contact-id` y `data-analytics-event="contact_click"`.

## Publicación con GitHub Pages

En el repositorio, abre **Settings → Pages** y selecciona:

1. **Source:** Deploy from a branch
2. **Branch:** `main`
3. **Folder:** `/ (root)`

El sitio no requiere compilación, instalación ni backend.
