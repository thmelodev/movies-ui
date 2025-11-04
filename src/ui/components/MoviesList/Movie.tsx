interface MovieProps {
  positiveVotesPercent: number
  title: string
  categories: string[]
  backgroundImageUrl: string
}

const Movie = ({ title, categories, backgroundImageUrl }: MovieProps) => {
  return (
    <div className="min-h-72 w-full aspect-186/288 relative flex items-end rounded-md">
      <img
        src={backgroundImageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div
        className="absolute bottom-0 left-0 w-full h-1/2 z-10 bg-linear-to-b from-transparent via-black/60 to-black"
        style={{
          background:
            "linear-gradient(180deg, rgba(204,204,204,0.0001) 0%, rgba(0,0,0,0.633084) 50%, #000000 100%)",
        }}
      />

      <div className="z-20 p-4 flex flex-col gap-2 w-full text-white font-montserrat ">
        <h3 className="text-lg drop-shadow-md font-bold">{title.toUpperCase()}</h3>
        <p className="text-sm text-categories font-normal">{categories.join(", ")}</p>
      </div>
    </div>
  );
};


export default Movie;