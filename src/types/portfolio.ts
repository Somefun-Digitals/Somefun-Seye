export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  behanceUrl: string;
  tag: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface StrategyPillar {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
