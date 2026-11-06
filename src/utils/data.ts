import { Skill, Tool, Project } from "@/types";

export const frontEndSkills: Skill[] = [
  { id: 1, name: "HTML", image: "/assets/skills/html.png" },
  { id: 2, name: "CSS", image: "/assets/skills/css.png" },
  { id: 3, name: "JavaScript", image: "/assets/skills/javascript.png" },
  { id: 4, name: "React", image: "/assets/skills/react.png" },
  { id: 5, name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
  { id: 6, name: "GraphQL", image: "/assets/skills/graphql-icon.webp" },
  { id: 7, name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
  { id: 8, name: "Tailwind", image: "/assets/skills/tailwind.png" },
];

export const backEndSkills: Skill[] = [
  { id: 1, name: "Next", image: "/assets/skills/nextjs.png" },
  { id: 2, name: "Node", image: "/assets/skills/node.png" },
  { id: 3, name: "Supabase", image: "/assets/skills/supabase.png" },
  { id: 4, name: "Sequelize", image: "/assets/skills/sequelize.svg" },
  { id: 5, name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
  { id: 6, name: "Postman", image: "/assets/skills/postman.svg" },
];

export const tools: Tool[] = [
  { id: 1, name: "Git", image: "/assets/skills/git-icon.svg" },
  { id: 2, name: "VS Code", image: "/assets/skills/visual-studio-code.svg" },
  { id: 3, name: "Claude AI", image: "/assets/skills/claude-ai-icon.webp" },
  { id: 4, name: "GitLab", image: "/assets/skills/gitlab.webp" },
  { id: 5, name: "Trello", image: "/assets/skills/trello.svg" },
  { id: 6, name: "Jira", image: "/assets/skills/atlassian-jira-icon.webp" },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "WON - Workout AI Planner",
    image: "/assets/projects/won.jpg",
    frontend_tech: [
      { name: "TypeScript", image: "/assets/skills/typescript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Next.js", image: "/assets/skills/nextjs.png" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
      { name: "Vercel", image: "/assets/skills/vercel.svg" },
    ],
    backend_tech: [
      { name: "Node.js", image: "/assets/skills/node.png" },
      { name: "Prisma", image: "/assets/skills/prisma.png" },
      { name: "Supabase", image: "/assets/skills/supabase.png" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "A fitness application that turns training preferences into AI-generated workout plans.",
    descriptionEs:
      "Aplicación de fitness que convierte las preferencias de entrenamiento en planes generados con IA.",
    contributions: [
      "Built the onboarding flow for goals, experience, equipment, and training availability.",
      "Connected onboarding data to AI plan generation and presented the resulting workout sessions.",
    ],
    contributionsEs: [
      "Desarrollé el flujo inicial para definir objetivos, experiencia, equipo y disponibilidad.",
      "Conecté esos datos con la generación de planes con IA y la presentación de las sesiones.",
    ],
    deployment: { status: "in-progress" },
    sourceCode: "https://github.com/CristopherAreche/WON",
  },
  {
    id: 2,
    name: "CRM",
    image: "/assets/projects/crm.jpg",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node.js", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "A full-stack CRM for managing customer relationships and day-to-day business operations.",
    descriptionEs:
      "CRM full stack para gestionar relaciones con clientes y operaciones del negocio.",
    contributions: [
      "Built React interfaces for sales, customer profiles, inventory, and purchases.",
      "Developed the Node.js backend and PostgreSQL data layer using Sequelize.",
    ],
    contributionsEs: [
      "Desarrollé interfaces en React para ventas, perfiles de clientes, inventario y compras.",
      "Implementé el backend en Node.js y la capa de datos en PostgreSQL con Sequelize.",
    ],
    deployment: {
      status: "live",
      url: "https://crm-client-rose-six.vercel.app/",
    },
    sourceCode: "https://github.com/CristopherAreche/CRM",
  },
  {
    id: 3,
    name: "Coffee Shop",
    image: "/assets/projects/coffeeShop.jpg",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node.js", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "A coffee ordering application with product browsing and order history.",
    descriptionEs:
      "Aplicación de pedidos de café con catálogo e historial de compras.",
    contributions: [
      "Built the product browsing and ordering interfaces with React and Redux Toolkit.",
      "Developed a Node.js and PostgreSQL backend for orders and purchase history.",
    ],
    contributionsEs: [
      "Desarrollé las interfaces de catálogo y pedidos con React y Redux Toolkit.",
      "Implementé el backend con Node.js y PostgreSQL para pedidos e historial de compras.",
    ],
    deployment: { status: "in-progress" },
    sourceCode: "https://github.com/CristopherAreche/business-box",
  },
  {
    id: 4,
    name: "Dental Care",
    image: "/assets/projects/DentalCare.jpg",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node.js", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "A dental practice application with separate workflows for patients and clinic staff.",
    descriptionEs:
      "Aplicación para consultorios odontológicos con flujos para pacientes y personal de la clínica.",
    contributions: [
      "Built appointment management, patient medical histories, and digital odontograms.",
      "Implemented inventory management and connected the React interface to a Node.js and PostgreSQL backend.",
    ],
    contributionsEs: [
      "Desarrollé la gestión de citas, el historial clínico de pacientes y los odontogramas digitales.",
      "Implementé la gestión de inventario y conecté la interfaz en React con el backend en Node.js y PostgreSQL.",
    ],
    deployment: { status: "live", url: "https://dental-care-pi.vercel.app/" },
    sourceCode: "https://github.com/CristopherAreche/DentalCare",
  },
  {
    id: 5,
    name: "Workout Webapp",
    image: "/assets/projects/workout.jpg",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    description: "An exercise discovery application organized by body region.",
    descriptionEs:
      "Aplicación para explorar ejercicios organizados por zona del cuerpo.",
    contributions: [
      "Built a React interface for browsing exercises by the body region a user wants to train.",
      "Created responsive layouts with Tailwind CSS for mobile and desktop browsing.",
    ],
    contributionsEs: [
      "Desarrollé una interfaz en React para explorar ejercicios según la zona que se quiere entrenar.",
      "Creé diseños adaptables con Tailwind CSS para móvil y escritorio.",
    ],
    deployment: {
      status: "live",
      url: "https://fitness-website-ashy-nine.vercel.app/",
    },
    sourceCode: "https://github.com/CristopherAreche/Fitness-Website",
  },
  {
    id: 6,
    name: "Pokemon Webapp",
    image: "/assets/projects/pokemon.jpg",
    frontend_tech: [
      { name: "TypeScript", image: "/assets/skills/typescript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Next.js", image: "/assets/skills/nextjs.png" },
    ],
    backend_tech: [
      { name: "Node.js", image: "/assets/skills/node.png" },
      { name: "Prisma", image: "/assets/skills/prisma.png" },
      { name: "Supabase", image: "/assets/skills/supabase.png" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
      { name: "Vercel", image: "/assets/skills/vercel.svg" },
    ],
    description:
      "A full-stack Pokédex combining Pokémon discovery with custom character creation.",
    descriptionEs:
      "Pokédex full stack que combina la exploración de Pokémon con la creación de personajes personalizados.",
    contributions: [
      "Built search, filtering, and pagination for the original 151 Pokémon.",
      "Implemented custom Pokémon creation with file uploads using Next.js, TypeScript, and Supabase.",
    ],
    contributionsEs: [
      "Desarrollé la búsqueda, los filtros y la paginación para los 151 Pokémon originales.",
      "Implementé la creación de Pokémon personalizados con carga de archivos usando Next.js, TypeScript y Supabase.",
    ],
    deployment: {
      status: "live",
      url: "https://pokemon-eta-swart.vercel.app/",
    },
    sourceCode: "https://github.com/CristopherAreche/Pokemon",
  },
  {
    id: 7,
    name: "Rick and Morty",
    image: "/assets/projects/rick&morty.jpg",
    frontend_tech: [
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Bootstrap", image: "/assets/skills/bootstrap.svg" },
    ],
    description: "A character explorer for the Rick and Morty universe.",
    descriptionEs: "Explorador de personajes del universo de Rick and Morty.",
    contributions: [
      "Built a React interface to browse characters and view their details and episode appearances.",
      "Implemented filters by status, species, and gender, with responsive layouts using Bootstrap.",
    ],
    contributionsEs: [
      "Desarrollé una interfaz en React para explorar personajes y consultar sus detalles y apariciones en episodios.",
      "Implementé filtros por estado, especie y género, con diseños adaptables usando Bootstrap.",
    ],
    deployment: {
      status: "live",
      url: "https://cristopherareche.github.io/rick_and_morty_website/",
    },
    sourceCode: "https://github.com/CristopherAreche/rick_and_morty_website",
  },
];
