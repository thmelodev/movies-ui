import Background from "../../assets/bg.png";

interface CineBackgroundProps {
  children?: React.ReactNode;
  clipPath?: string;
  top?: number;
  height?: number;
  backgroundPosition?: string;
  backgroundSize?: string;
}


const CineBackground = ({ children, clipPath, top, height, backgroundPosition, backgroundSize }: CineBackgroundProps) => {
  return (
    <div
      className={`
          relative 
          w-full 
          max-w-screen
          flex flex-col items-center justify-center 
          min-h-full
          overflow-x-hidden
      `}
    >
      <div
        className={`w-screen h-[860px] bg-no-repeat bg-center md:bg-cover opacity-40 absolute -top-64 md:-top-[180px]`}
        style={{
          backgroundImage: `url(${Background})`,
          clipPath: clipPath ? clipPath : undefined,
          top: top != undefined ? `${top}px` : undefined,
          height: height ? `${height}px` : undefined,
          backgroundPosition: backgroundPosition ? backgroundPosition : undefined,
          backgroundSize: backgroundSize ? backgroundSize : undefined,
        }}
      />

      <div
        className="absolute top-0 h-[564px] w-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,17,19,1) 0%, rgba(18,17,19,0.46) 50%, rgba(18,17,19,1) 100%)",
        }}
      />

      <div className="relative z-10 w-[1366px] overflow-x-hidden min-h-screen justify-center flex items-center">
        {children}
      </div>
    </div>
  )
}

export default CineBackground;