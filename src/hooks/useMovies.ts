import { useQuery } from "@tanstack/react-query"
import { useMovieStore } from "../stores/movie.store"
import { movieService } from "../services/movie.service"

export const useMovies = () => {
  const page = useMovieStore((state) => state.currentPage)
  const limit = useMovieStore((state) => state.currentLimit)

  return useQuery({
    queryKey: ['movies', page, limit],
    queryFn: async () => movieService.getPaginated(page, limit),
  })
}