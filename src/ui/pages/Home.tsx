import CineBackground from "../components/CineBackground";

const Home = () => {
  return (
    <div className="h-screen w-full mt-20">
      <CineBackground height={202} top={0} backgroundPosition="47% 31%" backgroundSize="400%" >
        <div className="pt-24"></div> 
      </CineBackground>
      <span>Home Page</span>
    </div>
  )
}

export default Home;