// EDITA AQUÍ: esta colección controla contenido, orden y estado de las tarjetas.
const resources = [
  {
    id: "estrategias-ia-educacion",
    name: "Estrategias IA para Educación",
    description: "Explora estrategias prácticas para integrar la inteligencia artificial en la enseñanza.",
    type: "Catálogo digital",
    category: "Explora",
    url: "https://olafrrom.github.io/ai-strategy-compass/",
    icon: "01",
    priority: 1,
    featured: true,
    badge: "",
    accent: "#2563eb"
  },
  {
    id: "contenidos-drive",
    name: "Presentaciones y contenidos",
    description: "Consulta las presentaciones, materiales y contenidos compartidos del programa.",
    type: "Google Drive",
    category: "Recursos del programa",
    url: "https://drive.google.com/drive/folders/1nYwMDUV2BG0eZSdwfl3GItkRT8e9R8S8?usp=sharing",
    icon: "02",
    priority: 2,
    featured: false,
    badge: "",
    accent: "#059669"
  },
  {
    id: "ia-taller",
    name: "IA para el taller",
    description: "Abre la colección de herramientas de inteligencia artificial que utilizaremos en las actividades.",
    type: "Herramientas",
    category: "Asistentes IA",
    url: "",
    action: "dialog",
    dialogId: "workshop-tools-dialog",
    icon: "03",
    priority: 3,
    featured: false,
    badge: "",
    accent: "#7c3aed"
  }
];

// EDITA AQUÍ: agrega o reorganiza las herramientas de la capa “IA para el taller”.
const workshopTools = [
  {
    id: "adaptatecnicasia",
    name: "AdaptaTécnicasIA",
    description: "Adapta técnicas didácticas de alto impacto según el objetivo de tu clase.",
    url: "https://chatgpt.com/g/g-6805d104c4088191824031960afc956b-adaptatecnicasia",
    icon: "A",
    priority: 1,
    accent: "#db2777"
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Ideación, conversación y creación asistida.",
    url: "https://chatgpt.com/",
    icon: "C",
    priority: 2,
    accent: "#0f766e"
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    description: "Exploración y creación a partir de fuentes.",
    url: "https://notebook.google.com/",
    icon: "N",
    priority: 3,
    accent: "#2563eb"
  },
  {
    id: "suno",
    name: "Suno",
    description: "Creación de música y recursos sonoros con IA.",
    url: "https://suno.com/",
    icon: "S",
    priority: 4,
    accent: "#7c3aed"
  },
  {
    id: "napkin",
    name: "Napkin",
    description: "Transforma texto en diagramas, mapas mentales, infografías y visuales claros para comunicar ideas complejas.",
    url: "https://www.napkin.ai/es/",
    icon: "N",
    priority: 5,
    accent: "#ea580c"
  }
];

// EDITA AQUÍ: agrega las URLs cuando estén confirmadas.
const contactLinks = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/olaf-rom%C3%A1n/" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/olafrrom/" }
  // Futuro: { id: "email", label: "Correo", url: "mailto:..." }
  // Futuro: { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/..." }
];

const resourceGrid = document.querySelector("#resource-grid");
const socialLinks = document.querySelector("#social-links");
const toolDialog = document.querySelector("#workshop-tools-dialog");
const toolGrid = document.querySelector("#tool-grid");

function createResourceCard(resource) {
  const hasUrl = Boolean(resource.url?.trim());
  const opensDialog = resource.action === "dialog";
  const element = document.createElement(hasUrl ? "a" : opensDialog ? "button" : "article");
  const classes = ["resource-card"];

  if (resource.featured) classes.push("resource-card--featured");
  if (!hasUrl && !opensDialog) classes.push("resource-card--placeholder");

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
  } else if (opensDialog) {
    element.type = "button";
    element.dataset.dialogTarget = resource.dialogId;
    element.setAttribute("aria-haspopup", "dialog");
    element.setAttribute("aria-label", `${resource.name}. Abre la colección de herramientas.`);
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
    <span class="resource-card__arrow" aria-hidden="true">${hasUrl ? "↗" : opensDialog ? "+" : "…"}</span>
  `;

  return element;
}

function renderWorkshopTools() {
  const fragment = document.createDocumentFragment();
  [...workshopTools]
    .sort((a, b) => a.priority - b.priority)
    .forEach((tool) => {
      const link = document.createElement("a");
      link.className = "tool-link";
      link.href = tool.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.setProperty("--tool-accent", tool.accent);
      link.dataset.toolId = tool.id;
      link.dataset.analyticsEvent = "workshop_tool_click";
      link.setAttribute("aria-label", `${tool.name}. Abre en una nueva pestaña.`);
      link.innerHTML = `
        <span class="tool-link__icon" aria-hidden="true">${tool.icon}</span>
        <span><strong>${tool.name}</strong><small>${tool.description}</small></span>
        <span aria-hidden="true">↗</span>
      `;
      fragment.append(link);
    });
  toolGrid.replaceChildren(fragment);
}

function setupDialog() {
  document.querySelectorAll("[data-dialog-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => toolDialog.showModal());
  });

  toolDialog.querySelector("[data-close-dialog]").addEventListener("click", () => toolDialog.close());
  toolDialog.addEventListener("click", (event) => {
    if (event.target === toolDialog) toolDialog.close();
  });
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
renderWorkshopTools();
renderContactLinks();
setupDialog();
