import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import imgLoginPage from '/assets/search/imgLoginPage.jpg';
import luffyFlag from '/assets/search/luffyFlag.png';
import narutoLogo from '/assets/search/narutoLogo.png';

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

      <div className="container">
        <div className="titles">
          <h1 className="header-login display-1 lh-lg"> Bienvenid@ a Animes APP </h1>

          <div className="col-12">
            <p className="mt-4 "> <em>"No importa que tan difícil o imposible sea, no le pierdas la vista a tu objetivo." </em></p>
            <p className="blockquote"> <mark>Monkey D. Luffy </mark></p>
          </div>

          <div className="row mt-5 ">
            <div className="col-md-7 order-md-2 mb-4">
              <img className="login-img"
                src={imgLoginPage} alt="img login page" />
            </div>


            <form className="col-md-5 border-form p-3 shadow light-blue order-md-1 mb-4" >

              <p className="insert-email"> Ingresa tu correo electronico: </p>

              <input
                type="email"
                placeholder="E-mail"
                className="form-control shadow"
                name="email"
                autoComplete="off"
              />

              <p className="insert-password"> Inserta tu contraseña: </p>
              <input
                type="text"
                placeholder="Contraseña"
                className="form-control shadow"
                name="password"
                autoComplete="off"
              />

              <div className="link m-4">
                <button className="btn btn-secondary mt-5 btn-lg shadow" onClick={onLogin} > Iniciar sesion </button>
              </div>
            </form>
          </div>


          <div className="new-account">
            <a href="#" >Olvidaste tu contraseña?</a>
            {/* <Link to{ }   className='btn btn-outline-secondary btn-lg mt-4  shadow p-3'> Forgot your password?</Link>  */}
            <hr />

            <div className="mt-5">
              <span>No tienes una cuenta  <a href="#" classn="register"> Registrate</a> </span>
            </div>

            <div className="row mt-4">
              <div className="col-xs-6" >
                <img className="luffyFlag" src={luffyFlag} alt="luffyFlag" />

                <img className="narutoLogo" src={narutoLogo} alt="narutoLogo" />
              </div>

            </div>



          </div>

        </div>

      </div>

    </>

  );
};
