import { AnimeRoutes } from "../routes/AnimeRoutes"
import {LoginPage} from "../auth/pages/LoginPage"
import { Navbar } from "../ui/components/Navbar"
import { Routes, Route } from "react-router-dom"



export const AppRouter = () => {
  return (
    <>
    <Routes>

      <Route path='login' element={<LoginPage/>} />

      <Route path='/*' element={<AnimeRoutes/> }/>

      </Routes>
    </>

  )
}
