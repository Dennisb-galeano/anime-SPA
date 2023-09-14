
import { render,screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";


describe('<pruebas en PublicRoute/>', () => {

  test('si no estoy autenticado, debe mostrar el children', () => {

    const contextValue = {
      logged: false
    }


    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta Publica') ).toBeTruthy();
  });

});

