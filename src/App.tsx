import Footer from "./ui/components/Footer"
import Header from "./ui/components/Header"
import Main from "./ui/components/Main"
import Login from "./ui/pages/Login"

function App() {
  return (
    <div className="w-screen h-screen flex-col justify-start items-center max-w-screen overflow-hidden">
      <Header />
      <Main>
        <Login />
      </Main>
      <Footer />
    </div>
  )
}

export default App
