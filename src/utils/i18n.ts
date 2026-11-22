import { TranslationDictionary } from "@/types/i18n";
import { LanguageCode } from "@/types";

export const uiTranslations: TranslationDictionary = {
  en: {
    metadata: {
      siteTitle: "Cristopher Areche | Senior Software Engineer",
      siteDescription:
        "Senior Software Engineer with 4+ years building high-scale web, mobile, and backend features across banking and healthcare. React, React Native, TypeScript, and .NET.",
      projectsTitle: "Projects",
      projectsDescription:
        "Explore selected engineering projects built with React, Next.js, TypeScript, Node.js, Supabase, and PostgreSQL.",
      jobTitle: "Senior Software Engineer",
    },
    layout: {
      skipToContent: "Skip to main content",
    },
    navbar: {
      index: "Home",
      projects: "Projects",
      languageLabel: "Language selector",
      languageToggleLabel: "Toggle language",
      english: "ENG",
      spanish: "SPA",
    },
    hero: {
      sectionLabel: "About me",
      statusBadge: "U.S. Citizen · Open to Remote & Relocation (NY / Boston)",
      greeting: "Hi, I’m",
      role: "Software Engineer",
      specialty: "React · React Native · TypeScript · C#/.NET · Design Systems",
      descriptionFirst:
        "Software Engineer with 4+ years building web, mobile, and backend features across digital banking and healthcare.",
      descriptionSecond:
        "Specialized in architecting cross-platform design systems with React, React Native, and TypeScript, backed by robust APIs and data layers in Node.js, C#/.NET, and SQL databases.",
      frontend: "Frontend & mobile",
      backend: "Backend & data",
      tools: "Delivery & practices",
      resume: "Resume / CV",
      viewWork: "View work",
      contact: "Contact",
      email: "Copy email",
      copied: "Copied!",
      copyEmailAria: "Copy email to clipboard",
      emailCopiedAria: "Email copied",
      copySuccessToast: "Email copied to clipboard!",
      copyErrorToast: "Failed to copy email. Please try manually.",
      linkedinAria: "Visit LinkedIn profile",
      githubAria: "Visit GitHub profile",
      professionalProfile: "Professional profile",
    },
    experience: {
      sectionLabel: "Work Experience",
      heading: "Experience & Track Record",
      subheading:
        "Production engineering across digital banking, enterprise integrations, and regulated healthcare platforms.",
      workHeading: "Professional Experience",
      educationHeading: "Education & Credentials",
    },
    projects: {
      sectionLabel: "Projects",
      heading: "Featured Project",
      introduction:
        "My latest independent application showcasing product architecture, AI integration, and full-stack engineering.",
      featuredHeading: "Featured Project",
      featuredIntro:
        "My latest independent application showcasing product architecture, AI integration, and full-stack engineering.",
      viewAll: "View project",
      contribution: "Key technical contributions",
      stack: "Technologies",
      independent: "Independent project",
      previewAria: (name: string) => `Preview of ${name}`,
      projectAria: (name: string) => `Project: ${name}`,
      sourceCode: "Source code",
      sourceCodeAria: (name: string) => `View ${name} source code on GitHub`,
      visitWebsite: "Open demo",
      visitWebsiteAria: (name: string) => `Visit ${name} live website`,
      inProgress: "In development",
    },
    errorBoundary: {
      title: "Something went wrong",
      description: "Please try refreshing the page.",
      retry: "Try Again",
    },
    themeSwitcher: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
  },
  es: {
    metadata: {
      siteTitle: "Cristopher Areche | Ingeniero de Software Senior",
      siteDescription:
        "Ingeniero de software senior con más de 4 años desarrollando aplicaciones web, móviles y backend en banca y salud. React, React Native, TypeScript y .NET.",
      projectsTitle: "Proyectos",
      projectsDescription:
        "Explora proyectos seleccionados de ingeniería desarrollados con React, Next.js, TypeScript, Node.js, Supabase y PostgreSQL.",
      jobTitle: "Ingeniero de Software Senior",
    },
    layout: {
      skipToContent: "Saltar al contenido principal",
    },
    navbar: {
      index: "Inicio",
      projects: "Proyectos",
      languageLabel: "Selector de idioma",
      languageToggleLabel: "Cambiar idioma",
      english: "ENG",
      spanish: "SPA",
    },
    hero: {
      sectionLabel: "Sobre mí",
      statusBadge: "Ciudadano EE.UU. · Disponible Remoto y Reubicación (NY / Boston)",
      greeting: "Hola, soy",
      role: "Ingeniero de Software",
      specialty: "React · React Native · TypeScript · C#/.NET · Sistemas de Diseño",
      descriptionFirst:
        "Ingeniero de software con más de 4 años desarrollando soluciones web, móviles y backend en banca digital y salud.",
      descriptionSecond:
        "Especializado en la arquitectura de sistemas de diseño multiplataforma con React, React Native y TypeScript, respaldados por APIs y capas de datos sólidas en Node.js, C#/.NET y bases de datos SQL.",
      frontend: "Frontend y móvil",
      backend: "Backend y datos",
      tools: "Entrega y prácticas",
      resume: "Ver CV",
      viewWork: "Ver proyectos",
      contact: "Contactar",
      email: "Copiar correo",
      copied: "¡Copiado!",
      copyEmailAria: "Copiar correo al portapapeles",
      emailCopiedAria: "Correo copiado",
      copySuccessToast: "¡Correo copiado al portapapeles!",
      copyErrorToast: "No se pudo copiar el correo. Intenta manualmente.",
      linkedinAria: "Visitar perfil de LinkedIn",
      githubAria: "Visitar perfil de GitHub",
      professionalProfile: "Perfil profesional",
    },
    experience: {
      sectionLabel: "Experiencia Laboral",
      heading: "Experiencia y Trayectoria",
      subheading:
        "Ingeniería en producción en banca digital a gran escala, integraciones empresariales y plataformas reguladas de salud.",
      workHeading: "Experiencia Profesional",
      educationHeading: "Educación y Certificaciones",
    },
    projects: {
      sectionLabel: "Proyectos",
      heading: "Proyecto Destacado",
      introduction:
        "Mi último proyecto independiente que demuestra arquitectura de producto, integración con IA e ingeniería full stack.",
      featuredHeading: "Proyecto Destacado",
      featuredIntro:
        "Mi último proyecto independiente que demuestra arquitectura de producto, integración con IA e ingeniería full stack.",
      viewAll: "Ver proyecto",
      contribution: "Aportes técnicos clave",
      stack: "Tecnologías",
      independent: "Proyecto independiente",
      previewAria: (name: string) => `Vista previa de ${name}`,
      projectAria: (name: string) => `Proyecto: ${name}`,
      sourceCode: "Código",
      sourceCodeAria: (name: string) =>
        `Ver el código fuente de ${name} en GitHub`,
      visitWebsite: "Abrir demo",
      visitWebsiteAria: (name: string) => `Visitar sitio en vivo de ${name}`,
      inProgress: "En desarrollo",
    },
    errorBoundary: {
      title: "Algo salió mal",
      description: "Por favor, intenta recargar la página.",
      retry: "Intentar de nuevo",
    },
    themeSwitcher: {
      toLight: "Cambiar a modo claro",
      toDark: "Cambiar a modo oscuro",
    },
  },
};

export function getTranslations(language: LanguageCode) {
  return uiTranslations[language];
}
