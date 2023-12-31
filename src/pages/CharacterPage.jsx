import { Navigate, useParams, Link } from "react-router-dom";
import { getAnimeById } from "../helpers/getAnimeById";
import { useMemo } from "react";
import { Navbar } from "../ui/components/Navbar";


export const CharacterPage = () => {

  const { id } = useParams(); //const, params que desestrcutura el id de animes

  const anime = useMemo(() => getAnimeById(id));[id]
  //el use memo dispta una fn,, el callbak get.. las dependencias seran el [id], cuando el id cambie


  // console.log(anime);

  useMemo

  if (!anime) {
    return <Navigate to="/OnePeacelo" />
  }


  return (
    <>
      <Navbar/>
      <div className="container">
        <div className="titles  text-center animate__animated animate__fadeInLeft">
          <h1 className="name-character display-3 lh-lg">{anime.character}</h1>
        </div>

        <div className="character-description mt-4 animate__animated animate__fadeInLeft" >
          <div className="row">
            <div className="col-12 col-md-4 mt-0">
              <img
                src={`/assets/anime/${id}.jpg`}
                alt={anime.character}
                className="img-thumbnail shadow mt-2"
              />
              <div className="character-list mb-5 ">
                <div>
                  <ul className="list-group list-group-flush shadow">
                    <li className="list-group-item"> <b>Publisher by:  </b> {anime.publisher}</li>
                    <li className="list-group-item"> <b>First appeaerance: </b> {anime.first_appearance}</li>
                    <li className="list-group-item"> <b>Current Range:  </b> {anime.current_range}</li>
                    <li className="list-group-item"> <b>Hability:  </b> {anime.hability}</li>
                    <li className="list-group-item"> <b>Nature:  </b> {anime.nature}</li>
                    <li className="list-group-item"> <b>clan:  </b> {anime.clan}</li>

                  </ul>

                </div>
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="anime-description mt-2">
                <h4 className="mt-2"> <strong>Description </strong> </h4>
                <br />
                <div>{anime.description}</div>

                <hr />
                <Link to={-1} className='btn btn-secondary btn-lg mt-4 shadow p-3 mb-5'>  ..Return.. </Link>   {/* este link remplaza el button, y la importacion del useNavigate y la creacion de fn..s */}
              </div>

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
