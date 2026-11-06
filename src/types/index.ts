export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface Tool {
  id: number;
  name: string;
  image: string;
}

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
}

export type ProjectItemProps = Project;
