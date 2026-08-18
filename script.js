// EDITA AQUÍ: esta colección controla contenido, orden y estado de las tarjetas.
const resources = [
  {
    id: "recurso-principal",
    name: "Recurso principal del programa",
    description: "Enlace prioritario de la experiencia. Sustituye este texto con la descripción final.",
    type: "Recurso del programa",
    category: "Recursos del programa",
    url: "",
    icon: "01",
    priority: 1,
    featured: true,
    badge: "Destacado",
    accent: "#2563eb"
  },
  {
    id: "asistente-ia",
    name: "Asistente IA",
    description: "Espacio preparado para el asistente que acompañará la formación docente.",
    type: "Asistente IA",
    category: "Asistentes IA",
    url: "",
    icon: "02",
    priority: 2,
    featured: false,
    badge: "",
    accent: "#7c3aed"
  },
  {
    id: "herramienta-diseno",
    name: "Herramienta para diseñar",
    description: "Acceso directo a la herramienta de diseño seleccionada para el programa.",
    type: "Herramienta",
    category: "Diseña",
    url: "",
    icon: "03",
    priority: 3,
    featured: false,
    badge: "",
    accent: "#059669"
  },
  {
    id: "materiales-programa",
    name: "Materiales del programa",
    description: "Presentaciones, guías y documentos de consulta para las actividades.",
    type: "Materiales",
    category: "Recursos del programa",
    url: "",
    icon: "04",
    priority: 4,
    featured: false,
    badge: "",
    accent: "#ea580c"
  }
];

// EDITA AQUÍ: agrega las URLs cuando estén confirmadas.
const contactLinks = [
  { id: "linkedin", label: "LinkedIn", url: "" },
  { id: "instagram", label: "Instagram", url: "" }
  // Futuro: { id: "email", label: "Correo", url: "mailto:..." }
  // Futuro: { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/..." }
];

const resourceGrid = document.querySelector("#resource-grid");
const socialLinks = document.querySelector("#social-links");

function createResourceCard(resource) {
  const hasUrl = Boolean(resource.url?.trim());
  const element = document.createElement(hasUrl ? "a" : "article");
  const classes = ["resource-card"];

  if (resource.featured) classes.push("resource-card--featured");
  if (!hasUrl) classes.push("resource-card--placeholder");

  element.className = classes.join(" ");
  element.style.setProperty("--accent", resource.accent || "#2563eb");
  element.dataset.resourceId = resource.id;
  element.dataset.resourceCategory = resource.category;
  element.dataset.analyticsEvent = "resource_click";

  if (hasUrl) {
    element.href = resource.url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.setAttribute("aria-label", `${resource.name}. Abre en una nueva pestaña.`);
  } else {
    element.setAttribute("aria-label", `${resource.name}. Enlace pendiente.`);
  }

  const badge = resource.badge
    ? `<span class="resource-card__badge">${resource.badge}</span>`
    : "";

  element.innerHTML = `
    <span class="resource-card__icon" aria-hidden="true">${resource.icon}</span>
    <span class="resource-card__body">
      <span class="resource-card__meta">
        <span class="resource-card__type">${resource.type}</span>
        ${badge}
      </span>
      <h3>${resource.name}</h3>
      <p>${resource.description}</p>
    </span>
    <span class="resource-card__arrow" aria-hidden="true">${hasUrl ? "↗" : "…"}</span>
  `;

  return element;
}

function renderResources() {
  const orderedResources = [...resources].sort((a, b) => {
    if (a.featured !== b.featured) return Number(b.featured) - Number(a.featured);
    return a.priority - b.priority;
  });

  const fragment = document.createDocumentFragment();
  orderedResources.forEach((resource) => fragment.append(createResourceCard(resource)));
  resourceGrid.replaceChildren(fragment);
}

function renderContactLinks() {
  const fragment = document.createDocumentFragment();

  contactLinks.forEach((contact) => {
    const item = document.createElement("li");
    const hasUrl = Boolean(contact.url?.trim());

    if (hasUrl) {
      const link = document.createElement("a");
      link.href = contact.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.dataset.contactId = contact.id;
      link.dataset.analyticsEvent = "contact_click";
      link.textContent = contact.label;
      item.append(link);
    } else {
      const placeholder = document.createElement("span");
      placeholder.textContent = `${contact.label} · enlace pendiente`;
      item.append(placeholder);
    }

    fragment.append(item);
  });

  socialLinks.replaceChildren(fragment);
}

renderResources();
renderContactLinks();
