import Background from "../../assets/bg.png";


const CineBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="
          relative 
          w-full 
          max-w-[1366px] 
          flex flex-col items-center justify-center 
          h-[564px]
        "
    >
      <div
        className="w-screen h-[860px] bg-no-repeat bg-cover opacity-40 absolute -top-[180px]"
        style={{
          backgroundImage: `url(${Background})`,
          clipPath: "inset(0px 0px 150px 0px)",
        }}
      />

      <div
        className="absolute top-0 h-[564px] w-screen"
        style={{
          background:
            "linear-gradient(180deg, rgba(18,17,19,1) 0%, rgba(18,17,19,0.46) 50%, rgba(18,17,19,1) 100%)",
        }}
      />

      <div className="relative z-10 w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}

export default CineBackground;