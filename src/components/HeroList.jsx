
import { getAnimeByPublisher } from "../helpers/getAnimeByPublisher";
import { HeroCard } from "./HeroCard";



export const HeroList = ({publisher}) => {

  const animes = getAnimeByPublisher(publisher);
  console.log(animes);
  return (
    <div className=" container text-center row row-cols-2">
      {
        animes.map(anime => (
          <HeroCard
           key={anime.id} 
           {...anime}
          />

        ))
      }

    </div>
  )
}




/* voy a rendelizar la lista de los heroes.js
  1. crear el .map

esta es un FORMA DE LLAMAR EL PUBLISHER, otro metodo de "desestructuracion" llamando las props que necesito con una variable
export const HeroList = (props) => {

  const publisher = props.publisher;


*/