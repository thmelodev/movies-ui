import { useMovies } from "../../../hooks/useMovies";
import { useMovieStore } from "../../../stores/movie.store";
import Movie from "./Movie";
import Pagination from "./Pagination";

const MovieList = () => {
  const { data, isLoading, error } = useMovies()
  const currentPage = useMovieStore((state) => state.currentPage)
  const currentLimit = useMovieStore((state) => state.currentLimit)
  const setPage = useMovieStore((state) => state.setPage)

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar filmes.</p>;

  return (
    <div className="flex flex-col w-full h-max md:p-6 z-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-4 py-4 w-full h-max auto-rows-[minmax(186px,auto)] bg-card">
        {data?.data.map((movie) => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              categories={movie.categories}
              positiveRating={movie.positiveRating}
              imageUrl={movie.imageUrl}
            />
          )
        })}
      </div>
      <Pagination page={currentPage} totalPages={Math.ceil((data?.total || 0) / currentLimit) || 1} onChangePage={setPage} />
    </div>
  )
}

export default MovieList;