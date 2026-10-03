# Rediseña tu práctica docente con IA

Hub digital mobile-first del programa **Rediseña tu práctica docente con IA**.

> Rediseña cómo enseñas. Aumenta lo que logras.

## Estructura

- `index.html`: estructura semántica del hub y una ventana reutilizable.
- `styles.css`: diseño responsive, tarjetas uniformes y estilos base.
- `script.js`: recursos, colecciones, contactos y renderizado.

Las tarjetas **IA para el taller**, **Para poner en práctica** y **Para saber más** abren colecciones dentro de una capa accesible. Todas se administran en `resourceCollections`.

## Editar recursos

La colección `resources` de `script.js` controla las tarjetas principales:

- `id`: identificador único para analítica.
- `name`, `description`, `type` y `category`: contenido visible y clasificación.
- `url`: enlace directo.
- `collectionId`: colección que abre la tarjeta cuando no usa un enlace directo.
- `icon`: número o identificador visual.
- `priority`: orden.
- `featured`: tratamiento visual azul, conservando el mismo tamaño.
- `badge`: etiqueta opcional.
- `accent`: color de acento.

El número 06 queda disponible para una futura tarjeta.

## Editar colecciones

`resourceCollections` contiene cada ventana y sus recursos. Cada elemento admite:

- `id`, `name`, `description`, `url`, `icon`, `priority` y `accent`.
- `group`: subtítulo opcional, usado en “Para saber más”.

## Analítica futura

Las tarjetas conservan `data-resource-id`, `data-resource-category` y `data-analytics-event="resource_click"`. Los recursos de las ventanas incluyen `data-collection-id`, `data-item-id` y un evento específico por colección.

## Publicación con GitHub Pages

**Settings → Pages → Deploy from a branch → main → / (root)**

El sitio no requiere compilación, instalación ni backend.
