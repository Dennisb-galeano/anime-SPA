
import { types } from '../types/types';

export const authReducer = (state={}, action) => {

  switch (action.type) {

    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload
      };

    case types.logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
}



//action.type (el type es ela fn js )
//cuando recibimos inaaccion que tenga el login
/*el PAYLOAD es la informacion que le transmitimos al reducer. 

- cualquier información sobre la acción que no sea el typeestado de la acción
debe formar parte del payloadcampo. Por convención, si errores true, la carga 
útil DEBE ser un objeto de error.
*/


