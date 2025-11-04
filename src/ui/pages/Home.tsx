import CineBackground from "../components/CineBackground";
import MovieList from "../components/MoviesList/MovieList";
import TextField from "../components/TextField";
import SearchBar from "../../assets/search.svg?react";


const Home = () => {

  return (
    <div className="flex flex-col flex-1 justify-start overflow-visible max-w-full w-full max-h-full">
      <div className="sticky top-0 z-30 bg-background">
        <CineBackground height={202} top={0} backgroundPosition="47% 31%" backgroundSize="400%" >
          <div className="w-full h-full p-4 gap-2.5 mt-[76px] min-h-max">
            <TextField id="search-bar" placeholder="Pesquise por filmes" finalIcon={<SearchBar />} />
            <div className="grid grid-cols-3 pt-2 gap-1">
              <button className="btn-secondary col-span-1 ">Filtros</button>
              <button className="col-span-2">Adicionar Filme</button>
            </div>
          </div>
        </CineBackground>
      </div>
      <MovieList />
    </div>
  )
}

export default Home;