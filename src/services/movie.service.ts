import type { Movie, MovieHome } from "../types/movie"
import type { PaginatedResult } from "../types/paginatedResult"
import { api } from "./api"

export const movieService = {
  getPaginated: async (page: number = 1, limit: number = 10) => {
    const { data } = await api.get<PaginatedResult<MovieHome>>(`/movies?page=${page}&limit=${limit}`)  
    return data
  },
  getById: async (id: string) => {
    const { data } = await api.get<Movie>(`/movies/${id}`)
    return data
  }
}