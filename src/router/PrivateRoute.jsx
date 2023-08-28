

//todo componente al recibir el {cildren} se convierte en un HOC

import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({children}) => {

const{ logged } = useContext (AuthContext);

  return (logged)
  ? children
  : <Navigate to='/login'/>

}

//el useContext, me dice si el usuario esta autenticado, voy a buscar el logged para velidar uqe esta auth
