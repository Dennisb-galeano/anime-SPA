import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"; 

import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";



export const SearchPage = () => {

  const navigate = useNavigate();  //obtiene la navigacion

  const location = useLocation(); //la ubicacion de la localizacion donde estamos

  const {q = " "} = queryString.parse (location.search); //los q parameter son opcionales y siempre son strings
  // console.log({query});


  const{ searchText, onInputChange } = useForm({
    searchText: ""  //el name es el valor que voy ausar para  establecer el valor de ese campoo
  });

  const onSearchSubmit = (event) => {
  event.preventDefault();
  if (searchText.trim().length <= 1) return; //validacion para que el form, no busque si la condicion no se cumple|

    navigate(`?q=${searchText}`); //?q es un query parameter
    
  console.log({ searchText });

}

  
  return (
    <>
      <h1>Search </h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input
              type="text"
              placeholder="Search a character"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">
            Search an anime Character
          </div>

          <div className="alert alert-danger">
            There's no results with <b>{ q }</b>
          </div>

          <HeroCard/>


        </div>

      </div>
    </>

  );
}



// la q es el vamos desestructurado del query
// el query parameter, es un paquete yarn add query-string : se utiliza para extraer todo lo uqe este en