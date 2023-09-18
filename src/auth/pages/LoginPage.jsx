import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import imgLoginPage from '/assets/search/imgLoginPage.jpg';


export const LoginPage = () => {

  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    loginUser('Bienvenidos');

    navigate('/', {
      replace: true
    });

  }

  return (
    <>

      <div className="titles">
        <h1 className="header-login display-1 lh-lg"> Bienvenid@ a Animes APP </h1>

        <div className="container-login" >

          <form className="form">
            <div>
              <p className="mt-5 "> <em>"No importa que tan difícil o imposible sea, no le pierdas la vista a tu objetivo." </em></p>
              <p className="blockquote"> <mark>Monkey D. Luffy </mark></p>
            </div>

            <div className="border-form shadow">
              <p className="insert-email"> Ingresa tu correo electronico: </p>
              <input
                type="email"
                placeholder="E-mail"
                className="form-control"
                name="email"
                // autoComplete="off"
              />

              <p className="insert-password"> Inserta tu contraseña: </p>
              <input
                type="text"
                placeholder="Contraseña"
                className="form-control"
                name="password"

                // autoComplete="off"
              />

              <div className="link m-5">
                <button className="btn btn-secondary mt-5 btn-lg shadow" onClick={onLogin} > Iniciar sesion </button>
              </div>
            </div>

            <br />
            <a href="#" classn="forgot">Olvidaste tu contraseña?</a>
            {/* <Link to{ }   className='btn btn-outline-secondary btn-lg mt-4  shadow p-3'> Forgot your password?</Link>  */}
            <hr />

            <div className="register mt-5">
              <span>No tienes una cuenta  <a href="#" classn="register"> Registrate</a> </span>
            </div>


          </form>
          <div className="form-image" >
            <img src={imgLoginPage} alt="img login page" />
          </div>

        </div>

      </div>

    </>

  )
}
