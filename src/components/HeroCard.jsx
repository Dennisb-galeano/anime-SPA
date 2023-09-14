import { Link } from "react-router-dom"


export const HeroCard = ({
  id,
  character,
  publisher,
  first_appearance,
  description,
  current_range,
  hability,
  nature,
  clan,

}) => {

  const cardImagesUrl = `assets/anime/${id}.jpg`

  return (
    <div className="col animate__animated animate__fadeIn " >
      <div className="card">

        <div >
          <div className="card" >
            <img src={cardImagesUrl} className="card-img" alt={character} />
          </div>

          <div className="card-body  text-center shadow">
            <div>
              <h5 className="card-title "> <em>{character} </em> </h5>
              <p className="card-text text-muted">{publisher} </p>
            </div>  
             <div className="more-info"> 
            <Link to={`/character/${id} `}><h6>Más info..</h6></Link>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}



//con el sprear no importa cuantas propuedades denta el objeto TODAS se pasan de esta manera sin necesidad de agregar una por una
