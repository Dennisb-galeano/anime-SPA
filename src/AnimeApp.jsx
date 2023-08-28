import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";



export const AnimeApp = () => {
  return (
  
    <AuthProvider>

    <AppRouter/>

    </AuthProvider>
  )
}


// el auth provider me va a mosrtrar la informacion de mi provider en TODA la app !
