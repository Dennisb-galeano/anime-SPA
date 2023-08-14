import { Link } from "react-router-dom"


export const HeroCard = ({
  id,
  character,
  publisher,
  first_appearance,
  current_range,
  hability,
  nature,
  clan,

}) => {

  const cardImagesUrl = `assets/anime/${ id }.jpg`

  return (
    <div className="col">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={cardImagesUrl } className="card-img" alt= { character}/>
          </div>

          <div className="col-8">
            <div className="card-body"> 
              <h5 className="card-title">{character}</h5>
              <p className="card-text">{publisher} </p>

              <p className="card-text">
                <small className="text-muted">{first_appearance}  </small>  
              </p>

            <Link to={`/character/${ id } `}>Más..</Link>

            </div>

          </div>

        </div>

      </div>



    </div>
  )
}



//con el sprear no importa cuantas propuedades denta el objeto TODAS se pasan de esta manera sin necesidad de agregar una por una
