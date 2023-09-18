import { AnimeRoutes } from "../routes/AnimeRoutes"
import { LoginPage } from "../auth/pages/LoginPage"
import { Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { ScrollToTop } from "../helpers/ScrollToTop"


export const AppRouter = () => {
  return (
    <>
    <ScrollToTop />
      <Routes>
        
        <Route path='/login' element={
          <PublicRoute>
            <LoginPage />
          {/* <Route path='/*' element={<AnimeRoutes/> }/> */} {/* esta es la sgunda forma de hacerlo*/}

          </PublicRoute>
        }
        />

        <Route path='/*' element={
          <PrivateRoute>
            <AnimeRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>

  )
}


//la ruta que necesito proteger es path='/*',para eso se crea 
