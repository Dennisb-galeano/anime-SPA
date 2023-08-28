
// el AuthProvider va a usar la informacion del authContext para que este provea la informacion a toda la app

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from "../types/types";

// const initialState = {
//   logged: false,
// }  - ya no se ocupa por el init, y el initialState se deja como un obj vacio

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,  //si el user existe entonces(true)
    user: user,
  }
}


export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const loginUser = (name = '') => {

    const user = { id: 'ABC', name: name }
    const action = {
      type: types.login,
      payload: user //almacena lo que yo quiero 
    }

    localStorage.setItem('user', JSON.stringify(user)); //localstorage solo gusrda strings

    dispatch(action);
  }

  const logoutUser = () => {
    
    localStorage.removeItem('user');
    const action = {type: types.logout}
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,  //el spread, es para que en lugar del obj muestre las propiedades
      loginUser: loginUser,
      logoutUser: logoutUser
}}>

      {children}
    </AuthContext.Provider>
  );
}


// lo que se coloca en el payload es lo que quiero ALMACENAR

//recibe en las props, todos los children, (componentes hijos) para formar un HOC
// el .provider es el proveedor de la informacion
//se renderiza el children para obtener la informacion, hay que colocarle un value
//useReducer me ayuda a manejar el estado (mas control uqe un state)

//init en el redicer , inicializa el estado

//mantener el ususario; cuando se recarga la pag en el naveg , llama la fn de inicializacion (init)
//y como el usuario esta en el localStorage lo carga.


