import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";
describe('Pruebas en authRweducer', () => {

  test("debe de retoenar el estado por defecto", () => {

    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });

  })


  test('debe (login) llamar el login autenticar y establecer el usuario', () => {

    const action = {
      type: types.login,
      payload: {
        name: 'encito',
        id: '123'
      }
    }

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload
    });
  })


  test('debe (logout) borrar el name del usuario y logged en false', () => {
    const state = {
      logged: true,
      user: { id: '123', name: 'encito' }
    }


    const action = {
      type: types.logout
    }
    const newState = authReducer(state, action);
    console.log(newState)

    expect(newState).toEqual ({ logged: false})

  })

});