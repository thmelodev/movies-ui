import Close from "../../../assets/close.svg?react"
import { MovieStatusPT, type MovieStatus } from "../../../types/movie"
import { Select } from "../Select"
import TextField from "../TextField"
import DropDown from "../../../assets/dropdown.svg?react";
import { useLanguages } from "../../../hooks/useLanguages";

export const AddMovieModal = () => {
  const { data: languages } = useLanguages()

  return (
    <div className="bg-black/50 w-full h-full absolute top-0 right-0 z-99 flex justify-end">
      <div className="bg-[#121113] w-[500px] max-w-full h-full max-h-screen overflow-y-auto gap-4 p-4" >
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-sans text-2xl color-[#B5B2BC]">Adicionar Filme</h1>
          <Close className="text-foreground" />
        </div>
        <div className="flex flex-col gap-4">
          <TextField id="title" label="Título" />
          <TextField id="original-title" label="Título Original" />
          <TextField id="synopsis" label="Sinopse" type="textarea" />
          <TextField id="age-rating" label="Classificação Indicativa" />
          <TextField id="release-date" label="Data de Lançamento" type="date" />
          <TextField id="duration" label="Duração (min)" type="number" />
          <Select id="status" label="Situação"
            options={Object.entries(MovieStatusPT).map(
              ([value, label]) => ({
                value: value as MovieStatus,
                label,
              })
            )}
            finalIcon={<DropDown className="text-foreground" />}
          />
          <Select
            id="language"
            label="Idioma"
            options={languages?.map(language => ({
              value: language.id,
              label: language.name
            })) || []}
            finalIcon={<DropDown className="text-foreground" />}
          />
          <TextField id="budget" label="Orçamento" />
          <TextField id="revenue" label="Receita" />
          <TextField id="tagline" label="Tagline (frase de efeito)" />
          <TextField id="genres" label="Gêneros" />
          <TextField id="image-url" label="URL da Imagem" />
          <TextField id="background-image-url" label="URL da Imagem de Fundo" />
          <TextField id='trailer-url' label='URL do Trailer' />
          <TextField id='positive-reviews' label='Número de Reviews Positivas' />
          <TextField id='negative-reviews' label='Número de Reviews Negativas' />
          <button className="btn-primary w-full mt-4">Adicionar Filme</button>
        </div>
      </div>
    </div>
  )
}