export type MovieStatus = 'RELEASED' | 'UPCOMING' | 'CANCELLED';

export const MovieStatus = {
  RELEASED: 'RELEASED',
  UPCOMING: 'UPCOMING',
  CANCELLED: 'CANCELLED',
} as const;

export const MovieStatusPT: Record<MovieStatus, string> = {
  [MovieStatus.RELEASED]: 'Lançado',
  [MovieStatus.UPCOMING]: 'Em breve',
  [MovieStatus.CANCELLED]: 'Cancelado',
};

export interface MovieHome {
  id: string;
  title: string;
  categories: string[];
  imageUrl: string;
  positiveRating: number; 
}

export interface Movie extends MovieHome {
  originalTitle: string;
  backgroundImageUrl: string;
  synopsis: string;
  popularity: number
  releaseDate: Date
  durationMinutes: number
  status: MovieStatus
  language: string
  budget: number
  revenue: number
  tagLine: string
}
