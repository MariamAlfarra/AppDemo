export interface User {
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  role: string;
  phone?: string;
  linkedin?: string;
  facebook?: string;
  github?: string;
  location?: string;
  description?: string;
  homeCards: Card[];
  workCards: Work[];
  reviewCard: string[];
}

export interface Card {
  title: string;
  description: string;
  icon?: string;
}
export interface Work {
  title: string;
  description: string;
  contributions: {
    frontend: string;
    backend: string;
  };
  teamSize: number;
  techStack: string[];
  details: string[];
}
