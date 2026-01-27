import { useState } from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";

const MovieList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="flex flex-col w-full h-max md:p-6 z-0">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 px-4 py-4 w-full h-max auto-rows-[minmax(186px,auto)] bg-card">
        <Movie
          title="bumblebee"
          positiveVotesPercent={30}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={75}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={67}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={67}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={67}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={67}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
        <Movie
          title="bumblebee"
          positiveVotesPercent={67}
          categories={["Ação", "Aventura", "Ficção Científica"]}
          backgroundImageUrl="https://upload.wikimedia.org/wikipedia/pt/4/44/Bumblebee_%282018%29.jpg"
        />
      </div>
      <Pagination page={currentPage} totalPages={totalPages}  onChangePage={setCurrentPage} />
    </div>
  )
}

export default MovieList;