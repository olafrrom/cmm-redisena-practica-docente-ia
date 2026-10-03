// EDITA AQUÍ: esta colección controla contenido, orden y apariencia de las tarjetas.
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
    description: "Abre las herramientas de inteligencia artificial que utilizaremos en las actividades.",
    type: "Herramientas",
    category: "Asistentes IA",
    collectionId: "workshop-tools",
    icon: "03",
    priority: 3,
    featured: false,
    badge: "",
    accent: "#7c3aed"
  },
  {
    id: "herramientas-ia-educacion",
    name: "Herramientas de IA para Educación",
    description: "Repositorio editorial curado para identificar herramientas por uso pedagógico, no por tendencia tecnológica.",
    type: "Catálogo digital",
    category: "Explora",
    url: "https://olafrrom.github.io/catalogo-ia-educacion/",
    icon: "04",
    priority: 4,
    featured: true,
    badge: "",
    accent: "#2563eb"
  },
  {
    id: "poner-en-practica",
    name: "Para poner en práctica",
    description: "Explora bibliotecas de prompts y plantillas para llevar ideas al aula.",
    type: "Recursos prácticos",
    category: "Diseña y crea",
    collectionId: "practice-resources",
    icon: "05",
    priority: 5,
    featured: false,
    badge: "",
    accent: "#d97706"
  },
  {
    id: "para-compartir",
    name: "Para compartir",
    description: "Comparte ideas, creaciones e iniciativas con la comunidad del programa.",
    type: "Showroom y participación",
    category: "Comparte",
    collectionId: "share-resources",
    icon: "06",
    priority: 6,
    featured: false,
    badge: "",
    accent: "#db2777"
  },
  {
    id: "para-saber-mas",
    name: "Para saber más",
    description: "Amplía la experiencia con lecturas y cursos recomendados sobre IA educativa.",
    type: "Lecturas y cursos",
    category: "Recursos del programa",
    collectionId: "learn-more",
    icon: "07",
    priority: 7,
    featured: false,
    badge: "",
    accent: "#0f766e"
  }
];

// EDITA AQUÍ: cada colección alimenta una ventana de recursos.
const resourceCollections = {
  "workshop-tools": {
    title: "IA para el taller",
    description: "Selecciona la herramienta que utilizarás durante la actividad.",
    analyticsEvent: "workshop_tool_click",
    items: [
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
        description: "Transforma texto en diagramas, mapas mentales, infografías y visuales claros.",
        url: "https://www.napkin.ai/es/",
        icon: "N",
        priority: 5,
        accent: "#ea580c"
      },
      {
        id: "gemini-canvas",
        name: "Gemini Canvas",
        description: "Crea documentos, aplicaciones y prototipos interactivos con asistencia de Gemini.",
        url: "https://gemini.google/es/overview/canvas/?hl=es",
        icon: "G",
        priority: 6,
        accent: "#1a73e8"
      },
      {
        id: "claude-artifacts",
        name: "Claude Artifacts",
        description: "Construye contenidos, código y experiencias interactivas reutilizables.",
        url: "https://claude.ai/artifacts",
        icon: "C",
        priority: 7,
        accent: "#c15f3c"
      },
      {
        id: "replit",
        name: "Replit",
        description: "Desarrolla, prueba y publica aplicaciones web con asistencia de IA.",
        url: "https://replit.com/",
        icon: "R",
        priority: 8,
        accent: "#f26207"
      }
    ]
  },
  "practice-resources": {
    title: "Para poner en práctica",
    description: "Bibliotecas y plantillas para diseñar experiencias educativas con IA.",
    analyticsEvent: "practice_resource_click",
    items: [
      {
        id: "ai-for-education-prompt-library",
        name: "AI for Education Prompt Library",
        description: "Prompts para planeación, evaluación, diseño educativo y creación de recursos.",
        url: "https://www.aiforeducation.io/prompt-library",
        icon: "AI",
        priority: 1,
        accent: "#2563eb"
      },
      {
        id: "biblioteca-avanzada-prompts",
        name: "Biblioteca avanzada de prompts educativos",
        description: "Colección navegable de prompts educativos organizados por propósito.",
        url: "https://eduprompts.tiddlyhost.com/?utm_source=chatgpt.com#Introducci%C3%B3n:Introducci%C3%B3n",
        icon: "P",
        priority: 2,
        accent: "#7c3aed"
      },
      {
        id: "awesome-notebooklm-templates",
        name: "Awesome NotebookLM Templates",
        description: "Prompts y estructuras para crear recursos multimedia y educativos con NotebookLM.",
        url: "https://github.com/serenakeyitan/awesome-notebookLM-prompts#awesome-notebooklm-templates",
        icon: "N",
        priority: 3,
        accent: "#059669"
      }
    ]
  },
  "share-resources": {
    title: "Para compartir",
    description: "Comparte ideas, creaciones e iniciativas con la comunidad del programa.",
    analyticsEvent: "shared_resource_click",
    items: [
      {
        id: "showroom-padlet",
        group: "Showroom",
        name: "Padlet",
        description: "Publica y explora las creaciones desarrolladas durante el programa.",
        url: "https://padlet.com/cursovirtualolaf/showroom-ia-colegio-ma-montessori-dagxawdrk6vjao9v",
        icon: "P",
        priority: 1,
        accent: "#ee4566"
      },
      {
        id: "menti-sesion-2026-10-03",
        group: "Sesión en vivo",
        name: "Menti · Sesión 03.10.2026",
        description: "Preescolar y Primaria · Módulo 5: Gamificación y experiencias interactivas con IA.",
        url: "https://www.menti.com/al389hwhpbx5",
        icon: "M",
        priority: 2,
        accent: "#5b5ce2"
      }
    ]
  },
  "learn-more": {
    title: "Para saber más",
    description: "Lecturas y cursos para profundizar en el uso educativo de la IA.",
    analyticsEvent: "recommended_resource_click",
    items: [
      {
        id: "notebooklm-neurodivert-udl",
        group: "Lecturas recomendadas",
        name: "NotebookLM: Revolutionizing Learning for Students with Neurodivert Challenges using AI and Universal Design Principles",
        description: "Artículo académico sobre NotebookLM, neurodiversidad y Diseño Universal para el Aprendizaje.",
        url: "https://nsuworks.nova.edu/fdla-journal/vol9/iss1/22/",
        icon: "L",
        priority: 1,
        accent: "#2563eb"
      },
      {
        id: "chatgpt-usos-estrategias",
        group: "Cursos recomendados",
        name: "ChatGPT - Usos y Estrategias",
        description: "Curso en Coursera para aplicar ChatGPT de forma práctica y estratégica.",
        url: "https://www.coursera.org/learn/chat-gpt",
        icon: "C",
        priority: 2,
        accent: "#0056d2"
      }
    ]
  }
};

const contactLinks = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/olaf-rom%C3%A1n/" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/olafrrom/" }
];

const resourceGrid = document.querySelector("#resource-grid");
const socialLinks = document.querySelector("#social-links");
const resourceDialog = document.querySelector("#resource-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDescription = document.querySelector("#dialog-description");
const dialogContent = document.querySelector("#dialog-content");

function createResourceCard(resource) {
  const hasUrl = Boolean(resource.url?.trim());
  const opensCollection = Boolean(resource.collectionId);
  const element = document.createElement(hasUrl ? "a" : opensCollection ? "button" : "article");
  const classes = ["resource-card"];

  if (resource.featured) classes.push("resource-card--featured");
  if (!hasUrl && !opensCollection) classes.push("resource-card--placeholder");

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
  } else if (opensCollection) {
    element.type = "button";
    element.dataset.collectionId = resource.collectionId;
    element.setAttribute("aria-haspopup", "dialog");
    element.setAttribute("aria-label", `${resource.name}. Abre la colección de recursos.`);
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
    <span class="resource-card__arrow" aria-hidden="true">${hasUrl ? "↗" : opensCollection ? "+" : "…"}</span>
  `;

  return element;
}

function createCollectionLink(item, collectionId, analyticsEvent) {
  const link = document.createElement("a");
  link.className = "tool-link";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.style.setProperty("--tool-accent", item.accent || "#2563eb");
  link.dataset.collectionId = collectionId;
  link.dataset.itemId = item.id;
  link.dataset.analyticsEvent = analyticsEvent;
  link.setAttribute("aria-label", `${item.name}. Abre en una nueva pestaña.`);
  link.innerHTML = `
    <span class="tool-link__icon" aria-hidden="true">${item.icon}</span>
    <span><strong>${item.name}</strong><small>${item.description}</small></span>
    <span aria-hidden="true">↗</span>
  `;
  return link;
}

function renderCollection(collectionId) {
  const collection = resourceCollections[collectionId];
  if (!collection) return;

  dialogTitle.textContent = collection.title;
  dialogDescription.textContent = collection.description;
  const orderedItems = [...collection.items].sort((a, b) => a.priority - b.priority);
  const groups = [...new Set(orderedItems.map((item) => item.group || ""))];
  const fragment = document.createDocumentFragment();

  groups.forEach((groupName) => {
    const items = orderedItems.filter((item) => (item.group || "") === groupName);

    if (groups.length === 1 && !groupName) {
      items.forEach((item) => {
        fragment.append(createCollectionLink(item, collectionId, collection.analyticsEvent));
      });
      return;
    }

    const section = document.createElement("section");
    section.className = "collection-group";
    const heading = document.createElement("h3");
    heading.className = "collection-group__title";
    heading.textContent = groupName || "Recursos";
    const itemGrid = document.createElement("div");
    itemGrid.className = "collection-group__items";
    items.forEach((item) => {
      itemGrid.append(createCollectionLink(item, collectionId, collection.analyticsEvent));
    });
    section.append(heading, itemGrid);
    fragment.append(section);
  });

  dialogContent.replaceChildren(fragment);
  resourceDialog.showModal();
}

function setupDialog() {
  document.querySelectorAll("[data-collection-id]").forEach((trigger) => {
    if (trigger.classList.contains("resource-card")) {
      trigger.addEventListener("click", () => renderCollection(trigger.dataset.collectionId));
    }
  });

  resourceDialog.querySelector("[data-close-dialog]").addEventListener("click", () => resourceDialog.close());
  resourceDialog.addEventListener("click", (event) => {
    if (event.target === resourceDialog) resourceDialog.close();
  });
}

function renderResources() {
  const fragment = document.createDocumentFragment();
  [...resources]
    .sort((a, b) => a.priority - b.priority)
    .forEach((resource) => fragment.append(createResourceCard(resource)));
  resourceGrid.replaceChildren(fragment);
}

function renderContactLinks() {
  const fragment = document.createDocumentFragment();

  contactLinks.forEach((contact) => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = contact.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.dataset.contactId = contact.id;
    link.dataset.analyticsEvent = "contact_click";
    link.textContent = contact.label;
    item.append(link);
    fragment.append(item);
  });

  socialLinks.replaceChildren(fragment);
}

renderResources();
renderContactLinks();
setupDialog();
