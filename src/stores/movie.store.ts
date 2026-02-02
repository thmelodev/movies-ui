import { create } from 'zustand';

interface MovieState {
  selectedMovieId?: string;
  setSelectedMovieId: (id: string) => void;
  
  currentPage: number;
  currentLimit: number
  setPage: (page: number) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  selectedMovieId: undefined,
  setSelectedMovieId: (id) => set({ selectedMovieId: id }),
  currentPage: 1,
  currentLimit: 10,
  setPage: (page) => set({ currentPage: page }),
}));