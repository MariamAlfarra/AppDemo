export interface User {
  uid: string;
  id: string;
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
  token:string;
}

export interface Card {
  title: string;
  description: string;
  icon?: string;
}
export interface Work {
  label: string;
  description: string;
  contributions: {
    frontend: string;
    backend: string;
  };
  teamSize: number;
  techStack: string[];
  details: string[];
}
