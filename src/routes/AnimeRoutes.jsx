
import { Routes, Route, Navigate } from "react-router-dom";
import { OnePeacePage } from '../pages/OnePeacePage';
import { NarutoPage } from '../pages/NarutoPage';
import { SearchPage } from "../pages/SearchPage";
import { CharacterPage } from "../pages/CharacterPage";
import { Navbar } from "../ui/components/Navbar";




export const AnimeRoutes = () => {
  return (
    <>

      <Navbar />

      <div className="container">

        <Routes>

          <Route path='OnePeace' element={<OnePeacePage />} />
          <Route path='naruto' element={<NarutoPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="character/:id" element={<CharacterPage />} />

          <Route path="/" element={ <Navigate to="/OnePeace"/> }    />


        </Routes>

      </div>

    </>
  )
}

