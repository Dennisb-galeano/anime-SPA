import { animes } from "../data/animes";


export const getAnimeByPublisher = ( publisher ) => {

  const validPublishers = ['Naruto','One Peace'];
  if(!validPublishers.includes( publisher )) {
    throw new Error(`${ publisher } is not a valid publisher`); 
   }

  return animes.filter(anime => anime.publisher === publisher);
    
}





/*
   se va a utilizar la data de anime, mi arreglo de anime 
   1. importar la data (anime)
   2. crear una fn (getAnimeByPublisher) que va a recibir los publisher de la base de anime.js
   3. como solo hay dos tipos de publisher diferentes, solo me aceptara 2, se van a validar estos:
      - crear la const validPublishers donde voy a tener el par de mi publisher ['Naruto,One Peace];
      - la validacion = if (validPublishers incluyen los publicher uqe estoy recibiendo como argumento ) {
        - pero si no ! lo incluye , le voy a enviar un trhow error ..... diciendo el (`${ publisher } que mando no es valido... etc
        }
        - pero si existe (return), entonces hago un return de mi anime.filter (y voy a filtrarlos mientras que,
          el anime => de mi anime.publisher sea exactamente igual al publisher uqe estoy recibiendo.
*/

