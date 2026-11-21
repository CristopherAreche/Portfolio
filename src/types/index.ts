export interface TechItem {
  name: string;
  image: string;
}

export type LanguageCode = "en" | "es";

export type ExternalUrl = `https://${string}` | `http://${string}`;

export type ProjectDeploymentStatus = "live" | "in-progress";

export type ProjectDeployment =
  | {
      status: "live";
      url: ExternalUrl;
    }
  | {
      status: "in-progress";
    };

export interface Project {
  id: number;
  name: string;
  image: string;
  frontend_tech: TechItem[];
  backend_tech?: TechItem[];
  description: string;
  descriptionEs: string;
  contributions: string[];
  contributionsEs: string[];
  deployment: ProjectDeployment;
  sourceCode: ExternalUrl;
  featured?: boolean;
}

export type ProjectItemProps = Project;

export interface ExperienceItem {
  id: string;
  role: string;
  roleEs: string;
  company: string;
  location: string;
  locationEs: string;
  period: string;
  periodEs: string;
  badge?: string;
  badgeEs?: string;
  highlights: string[];
  highlightsEs: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  degreeEs: string;
  institution: string;
  period: string;
  periodEs: string;
}
