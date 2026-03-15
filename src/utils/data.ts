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
      { name: "Next Js", image: "/assets/skills/nextjs.png" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
      { name: "Vercel", image: "/assets/skills/vercel.svg" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Prisma", image: "/assets/skills/prisma.png" },
      { name: "Supabase", image: "/assets/skills/supabase.png" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "WON turns a quick onboarding into a training plan that actually fits your life. Pick your goal (fat loss, muscle, endurance), set your schedule and where you train (home or gym), and WON generates clear, ready-to-start workouts.",
    descriptionEs:
      "WON convierte un onboarding rápido en un plan de entrenamiento que se adapta a tu vida. Elige tu objetivo, define horarios y lugar de entrenamiento (casa o gimnasio), y genera rutinas claras listas para empezar.",
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
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "Elevate your business management with this amazing CRM project, the all-in-one solution for sales, profiles, inventory, purchases, and VIP customer engagement. Streamline your operations and take control of your business success effortlessly.",
    descriptionEs:
      "Potencia la gestión de tu negocio con este CRM todo en uno para ventas, perfiles, inventario, compras y fidelización de clientes VIP. Optimiza tu operación y toma control del crecimiento de forma simple.",
    deployment: { status: "live", url: "https://crm-client-rose-six.vercel.app/" },
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
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "An online hub for coffee enthusiasts, this website allows users to effortlessly explore and order diverse coffee blends. The user-friendly interface ensures a seamless experience, while a convenient order history feature lets users track and replicate their favorite coffee choices. Elevate your coffee experience with this stylish and user-centric web solution.",
    descriptionEs:
      "Un espacio online para amantes del café donde los usuarios pueden explorar y pedir distintas mezclas. Su interfaz simple ofrece una experiencia fluida, con historial de pedidos para repetir cafés favoritos.",
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
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
      { name: "Tailwind", image: "/assets/skills/tailwind.png" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Sequelize", image: "/assets/skills/sequelize.svg" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
    ],
    description:
      "I'm working on an app designed for dental healthcare centers to facilitate appointments with doctors. It consists of two sections: one for patients and another for doctors or administrators. The app manages patient appointments, maintains their medical history, creates digital odontograms for each patient, and keeps track of inventory records.",
    descriptionEs:
      "Estoy desarrollando una app para centros odontológicos que facilita la gestión de citas. Incluye un área para pacientes y otra para doctores/administradores. Administra turnos, historial médico, odontogramas digitales e inventario.",
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
    description:
      "Welcome to my Fitness Webapp, your go-to destination for targeted workouts based on specific body regions. This user-friendly website offers a curated collection of exercises designed to tone and strengthen different parts of your body",
    descriptionEs:
      "Bienvenido a mi Fitness Webapp, tu espacio para encontrar rutinas enfocadas por zona corporal. Incluye una colección de ejercicios pensada para tonificar y fortalecer distintas partes del cuerpo.",
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
      { name: "HTML", image: "/assets/skills/html.png" },
      { name: "CSS", image: "/assets/skills/css.png" },
      { name: "JavaScript", image: "/assets/skills/javascript.png" },
      { name: "React", image: "/assets/skills/react.png" },
      { name: "Redux-Toolkit", image: "/assets/skills/redux.svg" },
    ],
    backend_tech: [
      { name: "Node", image: "/assets/skills/node.png" },
      { name: "Prisma", image: "/assets/skills/prisma.png" },
      { name: "Supabase", image: "/assets/skills/supabase.png" },
      { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
      { name: "Vercel", image: "/assets/skills/vercel.svg" },
    ],
    description:
      "Pokemon Fullstack App - Browse all 151 original Pokemon with search/filter, create custom Pokemon with file uploads, and enjoy a beautiful responsive design. Built with Next.js 15, TypeScript, Supabase, and authentic Pokemon styling. Features pagination, real-time search, and smooth animations!",
    descriptionEs:
      "App fullstack de Pokemon: explora los 151 Pokemon originales con búsqueda y filtros, crea Pokemon personalizados con carga de archivos y disfruta un diseño responsive. Construida con Next.js, TypeScript y Supabase.",
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
    description:
      "Explore the quirky world of Rick and Morty through my React.js project, featuring an extensive character encyclopedia. Discover character traits, episode appearances, and filter options for status, species, and gender.",
    descriptionEs:
      "Explora el universo de Rick and Morty con este proyecto en React.js que incluye una enciclopedia completa de personajes. Descubre características, episodios y filtros por estado, especie y género.",
    deployment: {
      status: "live",
      url: "https://cristopherareche.github.io/rick_and_morty_website/",
    },
    sourceCode: "https://github.com/CristopherAreche/rick_and_morty_website",
  },
];
