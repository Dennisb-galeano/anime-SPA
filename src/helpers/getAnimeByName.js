
import { animes } from "../data/animes";


export const getAnimeByName = (name = "") => {

  name = name.toLocaleLowerCase().trim();

  if ( name.length === 0 ) return [];

  return animes.filter(     //filtrar nuestro arreglo de animes
    anime => anime.character.toLocaleLowerCase().includes( name)
  );
}




//si no recibo el name va a ser un string vacio, if (el nombre.lenght es igual a 0 ) entonces la persona no busco nada
