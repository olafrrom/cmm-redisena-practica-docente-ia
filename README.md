# Rediseña tu práctica docente con IA

Hub digital mobile-first del programa **Rediseña tu práctica docente con IA**.

> Rediseña cómo enseñas. Aumenta lo que logras.

## Estructura

- `index.html`: estructura semántica del hub.
- `styles.css`: diseño responsive y estilos base.
- `script.js`: colección central de recursos, contactos y renderizado de tarjetas.

La tarjeta **IA para el taller** abre una segunda capa con las herramientas de trabajo. Su contenido se administra en la colección `workshopTools` de `script.js`.

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

Cada herramienta de `workshopTools` admite `id`, `name`, `description`, `url`, `icon`, `priority` y `accent`.

## Analítica futura

Las tarjetas incluyen los atributos `data-resource-id`, `data-resource-category` y `data-analytics-event="resource_click"`. Las herramientas utilizan `data-tool-id` y `data-analytics-event="workshop_tool_click"`. Los enlaces de contacto utilizan `data-contact-id` y `data-analytics-event="contact_click"`.

## Publicación con GitHub Pages

En el repositorio, abre **Settings → Pages** y selecciona:

1. **Source:** Deploy from a branch
2. **Branch:** `main`
3. **Folder:** `/ (root)`

El sitio no requiere compilación, instalación ni backend.
