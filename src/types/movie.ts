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
  status: string
  language: string
  budget: number
  revenue: number
  tagLine: string
}