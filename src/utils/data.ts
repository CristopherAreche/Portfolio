import { Project, ExperienceItem, EducationItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "qik",
    role: "Senior Frontend Developer",
    roleEs: "Desarrollador Frontend Senior",
    company: "Qik Banco Digital",
    location: "Remote, Dominican Republic",
    locationEs: "Remoto, República Dominicana",
    period: "Sep 2025 – Present",
    periodEs: "Sep 2025 – Presente",
    badge: "1M+ Customers · Digital Banking",
    badgeEs: "1M+ Clientes · Banca Digital",
    highlights: [
      "Co-develop Qik’s React Native design system of 40+ components, providing a shared UI foundation used across the banking app’s screens.",
      "Document shared components in Storybook to align design reviews and UI implementation across iOS and Android.",
      "Optimize image formats and payloads to improve load performance across the iOS and Android banking app.",
      "Develop and refactor UI components with Cursor and AI models, reviewing generated code against established component-library patterns.",
    ],
    highlightsEs: [
      "Co-desarrollo el sistema de diseño en React Native de Qik con más de 40 componentes, proporcionando la base de UI compartida para las pantallas de la app bancaria.",
      "Documento componentes compartidos en Storybook para alinear revisiones de diseño e implementación de UI en iOS y Android.",
      "Optimizo formatos de imagen y payloads para mejorar el rendimiento de carga en la aplicación bancaria de iOS y Android.",
      "Desarrollo y refactorizo componentes de UI con Cursor y modelos de IA, validando el código generado con los patrones establecidos de la librería.",
    ],
    skills: [
      "React Native",
      "TypeScript",
      "Storybook",
      "Figma",
      "iOS / Android",
      "Performance",
      "Design Systems",
    ],
  },
  {
    id: "sii",
    role: "Senior Full Stack Developer",
    roleEs: "Desarrollador Full Stack Senior",
    company: "Sistemas Integrados de Informatica, SRL (SII)",
    location: "Remote, Dominican Republic",
    locationEs: "Remoto, República Dominicana",
    period: "Nov 2023 – Aug 2025",
    periodEs: "Nov 2023 – Ago 2025",
    badge: "4 Banking Institutions",
    badgeEs: "4 Entidades Bancarias",
    highlights: [
      "Delivered customer-facing banking workflows and backend integrations for 4 institutions using C#/.NET, ASP.NET MVC/Web API, TypeScript, and SQL Server.",
      "Modernized legacy AngularJS banking modules by migrating to Flutter/Dart and applying lazy loading and caching to improve load performance.",
      "Implemented client/server validation and SQL Server stored procedures for banking forms, collaborating with product and QA on acceptance criteria and pull request reviews.",
    ],
    highlightsEs: [
      "Implementé flujos bancarios de cara al cliente e integraciones de backend para 4 instituciones financieras usando C#/.NET, ASP.NET MVC/Web API, TypeScript y SQL Server.",
      "Modernicé módulos bancarios heredados en AngularJS migrándolos a Flutter/Dart y aplicando lazy loading y caché para optimizar el tiempo de carga.",
      "Implementé validaciones cliente/servidor y procedimientos almacenados en SQL Server para formularios bancarios, colaborando con Producto y QA en criterios de aceptación y revisiones de PR.",
    ],
    skills: [
      "C#",
      ".NET",
      "ASP.NET MVC/Web API",
      "SQL Server",
      "TypeScript",
      "Flutter / Dart",
      "Stored Procedures",
    ],
  },
  {
    id: "makisan",
    role: "Full Stack Developer",
    roleEs: "Desarrollador Full Stack",
    company: "Makisan Tech",
    location: "Remote, Argentina",
    locationEs: "Remoto, Argentina",
    period: "Feb 2023 – Sep 2023",
    periodEs: "Feb 2023 – Sep 2023",
    badge: "Healthcare Platform",
    badgeEs: "Plataforma de Salud",
    highlights: [
      "Architected a React/TypeScript healthcare frontend with Redux Toolkit, reusable components, and design tokens to keep complex screens consistent as the UI grew.",
      "Built Node.js/Express APIs backed by PostgreSQL on Amazon RDS, using Sequelize, validation, pagination, and error handling to connect clinical data with the frontend.",
    ],
    highlightsEs: [
      "Arquitecté un frontend de salud en React/TypeScript con Redux Toolkit, componentes reutilizables y tokens de diseño para mantener consistencia en pantallas complejas.",
      "Construí APIs en Node.js/Express respaldadas por PostgreSQL en Amazon RDS, usando Sequelize, validación, paginación y manejo de errores para conectar datos clínicos con el frontend.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Amazon RDS",
      "Design Tokens",
    ],
  },
  {
    id: "freelance",
    role: "Frontend / Full Stack Developer",
    roleEs: "Desarrollador Frontend / Full Stack",
    company: "Freelance",
    location: "Remote, United States",
    locationEs: "Remoto, Estados Unidos",
    period: "Nov 2021 – Dec 2022",
    periodEs: "Nov 2021 – Dic 2022",
    badge: "Client Portals & Auth",
    badgeEs: "Portales de Clientes y Auth",
    highlights: [
      "Replaced manual request intake with Next.js/React client portals featuring guided forms, downloadable PDFs, and responsive, accessible interfaces.",
      "Connected client submissions to authenticated dashboards with Supabase Auth and PostgreSQL, enabling clients to track requests and manage their information.",
      "Deployed client features on Vercel with input validation, reCAPTCHA, and error logging to diagnose failed submissions and improve request reliability.",
    ],
    highlightsEs: [
      "Reemplacé la captura manual de solicitudes con portales en Next.js/React con formularios guiados, descarga de PDFs e interfaces accesibles y responsivas.",
      "Conecté envíos de clientes a dashboards autenticados con Supabase Auth y PostgreSQL, permitiendo a los clientes rastrear solicitudes y gestionar información.",
      "Desplegué soluciones en Vercel con validación de entradas, reCAPTCHA y registro de errores para diagnosticar envíos fallidos y elevar la confiabilidad.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase Auth",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "john-jay",
    degree: "B.S., Computer Science & Information Security",
    degreeEs: "Licenciatura en Ciencias de la Computación y Seguridad de la Información",
    institution: "John Jay College of Criminal Justice",
    period: "May 2022",
    periodEs: "Mayo 2022",
  },
  {
    id: "bmcc",
    degree: "A.S., Computer Information Systems",
    degreeEs: "Tecnicatura en Sistemas de Información Computacional",
    institution: "Borough of Manhattan Community College",
    period: "Jun 2020",
    periodEs: "Junio 2020",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "WON - Workout AI Planner",
    image: "/assets/projects/won.jpg",
    featured: true,
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
    deployment: {
      status: "live",
      url: "https://won-sigma.vercel.app/demo",
    },
    sourceCode: "https://github.com/CristopherAreche/WON",
  },
  {
    id: 2,
    name: "Dental Care",
    image: "/assets/projects/DentalCare.jpg",
    featured: true,
    frontend_tech: [
      { name: "TypeScript", image: "/assets/skills/typescript.png" },
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
    id: 3,
    name: "CRM",
    image: "/assets/projects/crm.jpg",
    featured: true,
    frontend_tech: [
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
    id: 4,
    name: "Pokemon Webapp",
    image: "/assets/projects/pokemon.jpg",
    featured: false,
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
];
