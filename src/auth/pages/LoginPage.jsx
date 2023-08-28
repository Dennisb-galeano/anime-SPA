import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    loginUser('Encito precioso');

    navigate('/', {
      replace:true
    });

  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button
          className="btn btn-primary"
          onClick={onLogin}
        >
          Login
        </button>

      </div>

    </>

  )
}
