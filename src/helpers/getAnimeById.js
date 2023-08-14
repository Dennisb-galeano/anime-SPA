import { animes } from "../data/animes"



export const getAnimeById = (id) => {

    return animes.find( anime => anime.id === id );
}


/*
como animes, es un arreglo se va a hacer directamente el Return coomo:
  animes.find (el anime => ´´va a regresar.. el anime.id sea exactamente igual al anime que estamos buscando ´´ )
  si el find no lo encuentra, regresará un UNDEFINED
*/