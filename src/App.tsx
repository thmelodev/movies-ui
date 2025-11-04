import Footer from "./ui/components/Footer";
import Header from "./ui/components/Header";
import Main from "./ui/components/Main";
import Home from "./ui/pages/Home";

function App() {
  // TODO: Replace with actual login state
  const isLogin = false;

  return (
    <div className="flex flex-col justify-start items-center min-h-screen max-h-screen max-w-screen w-screen overflow-y-auto overflow-x-hidden p-0 m-0 bg-background">
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer fixed={isLogin} />
    </div>
  )
}

export default App
