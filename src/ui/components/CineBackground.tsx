
import Background from "../../assets/bg.png";

interface CineBackgroundProps {
  children?: React.ReactNode;
  height?: number;
  clipPath?: string;
  top?: number;
  backgroundPosition?: string;
  backgroundSize?: string;
}


const CineBackground = ({ children, height, clipPath, top, backgroundPosition, backgroundSize }: CineBackgroundProps) => {
  return (
    <div
      className={`flex flex-col w-screen`}
      style={height ? { height: `${height}px`} : { flex: 1, height: '100%' }}
    >
      <div
        className={`z-10 w-screen h-[860px] bg-no-repeat bg-center md:bg-cover opacity-40 absolute left-0 ${!top ? '-top-64 md:-top-[180px]' : ''}`}
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
        className="z-10 absolute top-0 left-0 h-[564px] w-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,17,19,1) 0%, rgba(18,17,19,0.46) 50%, rgba(18,17,19,1) 100%)",
          clipPath: height ? `inset(0px 0px ${564-height}px 0px)` : undefined,
        }}
      />

      <div 
      className={`w-full max-w-screen flex justify-center items-center w-hidden h-72 z-30`}
      style={height ? {height:  `${height}px`, overflowY: 'hidden', alignItems: 'flex-start'} : {alignItems: 'center', flex: 1}}
      >
        {children}
      </div>
    </div>
  )
}

export default CineBackground;