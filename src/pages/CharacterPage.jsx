import { Navigate, useParams } from "react-router-dom";
import { getAnimeById } from "../helpers/getAnimeById";



export const CharacterPage = () => {

  const {id }= useParams(); //const, params que desestrcutura el id de animes

  const anime = getAnimeById(id);
  console.log(anime);

  if ( !anime ){
    return <Navigate to="/OnePeace"  />
  }


  return (
    <h1>Character Page</h1>
  )
}


//hook de react router y sirve para obtener lo parametros del segmento de URL que se especificaron
// se va a tomar el id del argumento y poder obtener el id que la persiona esta buscando
// para eso se crea un helper js, getanimeByID


          //ese id !! es el nombre que se le puso a la ruta desde animeRoutes      ="character/:id"
