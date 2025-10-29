import Footer from "./ui/components/Footer"
import Header from "./ui/components/Header"
import Main from "./ui/components/Main"
import Home from "./ui/pages/Home"

function App() {
  return (
    <div className="w-screen h-screen flex-col justify-start items-center max-w-screen overflow-hidden">
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  )
}

export default App
