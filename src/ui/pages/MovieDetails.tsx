import { useParams } from "react-router";
import { capitalizeString } from "../../utils/capitalizeString";
import CategoryCard from "../components/CategoryCard";
import CineBackground from "../components/CineBackground";
import InformationCard from "../components/InformationCard";
import CircularRating from "../components/MoviesList/CircularRating";

export interface MovieProps {
  title: string;
  originalTitle: string;
  imageUrl: string;
  backgroundImageUrl: string;
}

const MovieDetails = () => {
  const { title, originalTitle, imageUrl, backgroundImageUrl } = {
    title: "Bumblebee",
    originalTitle: "Bumblebee",
    imageUrl: "https://image.tmdb.org/t/p/w500/ww7eC3BqSb3J0TMdWqIJq0kZ8y6.jpg",
    backgroundImageUrl: "https://image.tmdb.org/t/p/original/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
  }

  const { id } = useParams<{ id: string }>();
  console.log("Movie ID:", id);
  
  return (
    <div className="flex flex-col flex-1 justify-start overflow-visible max-w-full w-full max-h-full">
      <div className="sticky top-0 z-30 bg-background md:hidden">
        <CineBackground height={202} top={0} backgroundPosition="47% 31%" backgroundSize="400%" />
      </div>
      <div className="sticky top-0 z-30 bg-background hidden md:block">
        <CineBackground clipPath="inset(0px 0px 150px 0px)"
        />
      </div>
      <div className="flex flex-col mx-4 md:mx-8 md:p-8 -mt-28 md:mt-32 mb-4 z-40 gap-4 bg-background relative">
        <div
          className="absolute top-0 left-0 w-full h-full max-h-[520px] bg-no-repeat z-0"
          style={{
            backgroundImage: `
                linear-gradient(to right, rgba(18, 17, 19, 1) 0%, rgba(18, 17, 19, 0.8) 50%, rgba(18, 17, 19, 0) 100%),
                linear-gradient(rgba(18, 17, 19, 0.5), rgba(18, 17, 19, 0.5)),
                url(${backgroundImageUrl})
            `,
            backgroundPosition: "center, center, 50% 50%",
            backgroundSize: "cover, cover, 120%"
          }}
        />
        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_1fr] md:grid-rows-[auto_auto_auto] w-full h-full md:h-auto gap-4 md:auto-rows-min md:auto-cols-min z-10">
          <div className="md:grid-cols-1 md:row-start-2 md:row-span-3 md:w-fit">
            <img
              src={imageUrl}
              className="max-h-[582px]"
            />
          </div>

          <div className="flex flex-col md:col-start-1 md:row-start-1 md:col-span-3 md:grid md:grid-cols-3 md:h-fit gap-4 md:auto-rows-min md:auto-cols-min">
            <div className="grid grid-cols-3 md:flex md:justify-end gap-4 md:col-start-3 md:content-center md:h-min">
              <button className="btn-secondary col-span-1" onClick={() => { }}>Deletar</button>
              <button className="col-span-2 md:col-span-1" onClick={() => { }}>Editar</button>
            </div>

            <div className="flex flex-col items-center gap-1 md:col-span-2 md:col-start-1 md:row-start-1 md:items-start md:h-fit md:w-fit">
              <h1 className="text-3xl font-semibold text-[rgba(238, 238, 240, 1)] font-montserra">{capitalizeString(title)}</h1>
              <span className="text-lg font-normal text-[rgba(181, 178, 188, 1)] font-montserra"> Título original: {capitalizeString(originalTitle)}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 md:col-start-3 md:row-start-2 md:min-h-[88px] md:h-min">
            <InformationCard label="classificação indicada" value="13 anos" />
            <div className="flex flex-col p-4 gap-2 bg-card w-min h-full md:min-h-[88px] justify-center items-start">
              <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)]">VOTOS</span>
              <span className="text-xs font-montserrat font-semibold rounded text-white">5704</span>
            </div>
            <div className="md:hidden">
              <CircularRating percentage={67} size={69} />
            </div>

            <div className="hidden md:block">
              <CircularRating percentage={67} size={110} />
            </div>
          </div>

          <div className="w-full flex justify-center items-center md:justify-start md:grid-cols-1 md:col-start-2 md:row-start-2 md:content-center">
            <span className="font-montserrat font-normal italic h-min">Todo herói tem um começo</span>
          </div>

          <div className="flex flex-col gap-4 md:col-start-2 md:row-start-3">
            <div className="flex flex-col bg-card h-min p-4 gap-2 ">
              <span className="font-montserrat font-bold text-[rgba(181, 178, 188, 1)]">SINOPSE</span>
              <span className="text-xs font-montserrat font-semibold rounded text-[rgba(255, 255, 255, 1)]">“Bumblebee” é um filme que se passa em 1987 e conta a história de um Autobot chamado Bumblebee que encontra refúgio em um ferro-velho de uma pequena cidade praiana da Califórnia. Charlie, uma adolescente prestes a completar 18 anos, encontra Bumblebee machucado e sem condições de uso. Quando ela o revive, percebe que este não é qualquer fusca amarelo1. O filme é uma mistura de animação e drama, com um tom leve e divertido, e se destaca por sua ambientação nos anos 80 e pela trilha sonora perfeita2.</span>
            </div>

            <div className="flex flex-col p-4 gap-2 bg-card w-full h-min justify-center items-start">
              <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)]">GÊNEROS</span>
              <div className="flex flex-wrap gap-2">
                <CategoryCard category="AÇÃO" />
                <CategoryCard category="AVENTURA" />
                <CategoryCard category="FICÇÃO CIÊNTIFICA" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:row-start-3 md:col-start-3 md:auto-rows-min">
            <div className="grid grid-cols-2 gap-4 ">
              <InformationCard label="lançamento" value="12/20/2018" />
              <InformationCard label="duração" value="1h 53m" />
              <InformationCard label="situação" value="Lançado" />
              <InformationCard label="idioma" value="Inglês" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col p-4 gap-2 bg-card w-full h-full justify-center items-start">
                <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)] text-ellipsis max-w-full">{('ORÇAMENTO').toUpperCase()}</span>
                <span className="text-xs font-montserrat font-semibold rounded text-[rgba(255, 255, 255, 1)]">$135M</span>
              </div>

              <div className="flex flex-col p-4 gap-2 bg-card w-full h-full justify-center items-start">
                <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)] text-ellipsis">{('RECEITA').toUpperCase()}</span>
                <span className="text-xs font-montserrat font-semibold rounded text-[rgba(255, 255, 255, 1)]">$467.99M</span>
              </div>

              <div className="flex flex-col p-4 gap-2 bg-card w-full h-full justify-center items-start">
                <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)] text-ellipsis">{('LUCRO').toUpperCase()}</span>
                <span className="text-xs font-montserrat font-semibold rounded text-[rgba(255, 255, 255, 1)]">$332.99M</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block md:row-start-4 md:col-start-3" />


        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="font-montserrat font-bold text-white text-2xl">Trailer</h2>

          <div className="flex w-full max-h-[556px] aspect-square">
            <iframe
              src="https://www.youtube.com/embed/lcwmDAYt22k"
              allowFullScreen
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;