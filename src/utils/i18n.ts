import { TranslationDictionary } from "@/types/i18n";
import { LanguageCode } from "@/types";

export const uiTranslations: TranslationDictionary = {
  en: {
    metadata: {
      siteTitle: "Cristopher Areche | Software Engineer",
      siteDescription:
        "Software Engineer with 4+ years of experience across banking and healthcare. React, React Native, TypeScript, and design systems.",
      projectsTitle: "Projects",
      projectsDescription:
        "Explore my portfolio of full-stack web development projects built with React, Next.js, Node.js, and PostgreSQL.",
      jobTitle: "Software Engineer",
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
      greeting: "Hi, I’m",
      role: "Software Engineer",
      specialty: "React · React Native · TypeScript · Design systems",
      descriptionFirst:
        "I build web and mobile applications with 4+ years of experience across banking and healthcare.",
      descriptionSecond:
        "I build reusable interfaces, connect them to APIs and databases, and use design systems to keep web and mobile experiences consistent and maintainable.",
      frontend: "Frontend & mobile",
      backend: "Backend & data",
      tools: "Tools",
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
    projects: {
      sectionLabel: "Projects",
      heading: "Selected work",
      introduction:
        "Personal projects I designed and built independently, from responsive interfaces to full-stack applications.",
      contribution: "What I built",
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
      siteTitle: "Cristopher Areche | Ingeniero de Software",
      siteDescription:
        "Ingeniero de software con más de 4 años de experiencia en banca y salud. React, React Native, TypeScript y sistemas de diseño.",
      projectsTitle: "Proyectos",
      projectsDescription:
        "Explora mi portafolio de proyectos full-stack creados con React, Next.js, Node.js y PostgreSQL.",
      jobTitle: "Ingeniero de Software",
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
      greeting: "Hola, soy",
      role: "Ingeniero de Software",
      specialty: "React · React Native · TypeScript · Sistemas de diseño",
      descriptionFirst:
        "Desarrollo aplicaciones web y móviles con más de 4 años de experiencia en banca y salud.",
      descriptionSecond:
        "Creo interfaces reutilizables, las conecto con APIs y bases de datos, y uso sistemas de diseño para mantener experiencias web y móviles consistentes y fáciles de mantener.",
      frontend: "Frontend y móvil",
      backend: "Backend y datos",
      tools: "Herramientas",
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
    projects: {
      sectionLabel: "Proyectos",
      heading: "Proyectos seleccionados",
      introduction:
        "Proyectos personales que diseñé y desarrollé de forma independiente, desde interfaces adaptables hasta aplicaciones full stack.",
      contribution: "Lo que desarrollé",
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
