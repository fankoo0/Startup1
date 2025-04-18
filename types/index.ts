export interface AIModel {
  id: string;
  name: string;
  description: string;
  link: string;
}

export interface Profession {
  id: string;
  name: string;
  models: AIModel[];
}

export interface Category {
  id: string;
  name: string;
  professions: Profession[];
} 