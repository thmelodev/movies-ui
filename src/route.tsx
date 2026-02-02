import type { ReactNode } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Footer from "./ui/components/Footer"
import Header from "./ui/components/Header"
import Main from "./ui/components/Main"
import Home from "./ui/pages/Home"
import Login from "./ui/pages/Login"
import MovieDetails from "./ui/pages/MovieDetails"

const InitPage = (page: ReactNode) => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen max-h-screen max-w-screen w-screen overflow-y-auto overflow-x-hidden p-0 m-0 bg-background">
      <Header />
      <Main>
        {page}
      </Main>
      <Footer fixed={true} />
    </div>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={InitPage(<Home />)} />
        <Route path="login" element={InitPage(<Login />)} />
        <Route path="movie">
          <Route path=":id" element={InitPage(<MovieDetails />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router