import { Navigate, useParams,Link } from "react-router-dom";
import { getAnimeById } from "../helpers/getAnimeById";
import { useMemo } from "react";



export const CharacterPage = () => {

  const { id } = useParams(); //const, params que desestrcutura el id de animes

  const anime = useMemo( () => getAnimeById(id));  [id]
  //el use memo dispta una fn,, el callbak get.. las dependencias seran el [id], cuando el id cambie


  // console.log(anime);

  useMemo

  if (!anime) {
    return <Navigate to="/OnePeace" />
  }


  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInLeft">
        <div className="col-4">
          <img
            src={`/public/assets/anime/${id}.jpg  `}
            alt={anime.character}
            className="img-thumbnail"
          />

          <div>
            <div className="col-8">
              <h3>{anime.character}</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Publisher by:  </b> {anime.publisher}</li>
                <li className="list-group-item"> <b>First appeaerance: </b> {anime.first_appearance}</li>
                <li className="list-group-item"> <b>Current Range:  </b> {anime.current_range}</li>
                <li className="list-group-item"> <b>Hability:  </b> {anime.hability}</li>

              </ul>

              <h5 className="mt-3"> characters </h5>
              <p>{ }</p>    {/* pendiente charctersistics en parrafo  */}

              <Link to={-1} className='btn btn-outline-primary'>Return</Link>   {/* este link remplaza el button, y la importacion del useNavigate y la creacion de fn..s */}
            </div>

          </div>

        </div>
      </div>
    </>
  )
}


//hook de react router y sirve para obtener lo parametros del segmento de URL que se especificaron
// se va a tomar el id del argumento y poder obtener el id que la persiona esta buscando
// para eso se crea un helper js, getanimeByID


          //ese id !! es el nombre que se le puso a la ruta desde animeRoutes      ="character/:id"
