import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import { getAnimeByName } from "../helpers/getAnimeByName";
import { Navbar } from "../ui/components/Navbar";


export const SearchPage = () => {

  const navigate = useNavigate();  //obtiene la navigacion
  const location = useLocation(); //la ubicacion de la localizacion donde estamos

  const { q = '' } = queryString.parse(location.search); //los q parameter son opcionales y siempre son strings
  // console.log({query});
  const animes = getAnimeByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && animes.length === 0;


  const { searchText, onInputChange } = useForm({
    searchText: q  //el name es el valor que voy ausar para  establecer el valor de ese campoo
  });


  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return; //validacion para que el form, no busque si la condicion no se cumple|

    navigate(`?q=${searchText}`); //?q es un query parameter
    // console.log({ searchText });

  }

  return (
    <>

      <Navbar/>
      <div className="container search-container p-5 titles animate__animated animate__fadeIn">
        <h1 className=" display-1 lh-lg">Search </h1>


        <div className="row">

          <div className="search-inst">
            <h3>En esta página podrás buscar facilmente tu personaje</h3>

            {/* <div className="alert alert-primary animate__animated animate__fadeIn"
              style={{ display: showSearch ? '' : 'none' }}>
              Search an anime Character
            </div> */}

            <div className="input-search">
              <form onSubmit={onSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search a character"
                  className="form-control shadow mb-5 mt-5 bg-white rounded"
                  name="searchText"
                  autoComplete="off"
                  value={searchText}
                  onChange={onInputChange}
                />

                <button className="search-button shadow btn btn-secondary mb-5 mt-5" >
                  Search
                </button>
              </form>

            </div>
          </div>
          <hr className="mt-2" />
          <div className="mt-5" >
            <h1>Results</h1>
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn mt-4"
            style={{ display: showError ? '' : 'none' }}>
            No character with <b>{q}</b>
          </div>

          <div className="card-image row row row-cols-sm-3 mt-3">
            {/* el segundo parentesis en el map se coloca para regresar el anime implicitamente */}
            {
              animes.map(anime => (
                <HeroCard key={anime.id} {...anime} />
              ))
            }
          </div>



        </div>
      </div>
    </>

  )
}



// la q es el vamos desestructurado del query
// el query parameter, es un paquete yarn add query-string : se utiliza para extraer todo lo uqe este en