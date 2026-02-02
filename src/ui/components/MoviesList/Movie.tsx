import { useState } from "react";
import CircularRating from "./CircularRating";

interface MovieProps {
  positiveRating: number
  title: string
  categories: string[]
  imageUrl: string
}

const Movie = ({ title, categories, imageUrl, positiveRating }: MovieProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-72 w-full aspect-186/288 relative flex items-end rounded-md cursor-pointer transition-all duration-300 ease-in-out" onMouseEnter={() => { setShowDetails(true) }} onMouseLeave={() => { setShowDetails(false) }}>
      <img
        src={imageUrl}
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

      <div className="z-20 p-4 flex flex-col gap-2 w-full text-white font-montserrat">
        <h3 className="text-lg drop-shadow-md font-bold">{title.toUpperCase()}</h3>
        {showDetails && (<p className="text-sm text-categories font-normal">{categories.join(", ")}</p>)}
      </div>

      {showDetails && (
        <div className="z-30 absolute top-1/2 left-1/2 -translate-y-[80%] -translate-x-1/2">
          <CircularRating percentage={positiveRating} />
        </div>
      )}
    </div>
  );
};


export default Movie;