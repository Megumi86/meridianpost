export interface Article {
  id: string;
  headline: string;
  subheadline: string;
  author: string;
  date: string;
  location: string;
  category: string;
  imageUrl: string;
  imageCaption: string;
  content: string[]; // Array of paragraphs
  isBreaking?: boolean;
  videoUrl?: string;
}

export interface TranslationResponse {
  articles: Article[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  TRANSLATING = 'TRANSLATING',
  ERROR = 'ERROR',
}