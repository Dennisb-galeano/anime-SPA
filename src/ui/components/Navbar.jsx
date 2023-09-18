
  import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const {logged, user, logoutUser} = useContext(AuthContext);

    console.log(logged);

    const navigate = useNavigate();


    const onLogout = () =>{
        logoutUser();
        navigate('/login', {  //navegar a... se puede enviar un objeto con el replace en true, para que remplace la ruta en la q me encuentro 
            replace:true
        });

        //el replace evita uqe la persona pueda regresar al historial anterior, por que en teoria se reemplaza
    }


    return (
        <nav className="contain flex navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Anime
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                        to="/OnePeace"
                    >
                        OnePeace
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                        to="/naruto"
                    >
                        Naruto
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                        to="/Search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                <span className='nav-item nav-link text-primary'>
                  {user?.name}
                </span>

                <button
                className='nav-item nav-link btn'
                onClick={onLogout}
                
                >
                  LogOut
                </button>

                </ul>
            </div>
        </nav>
    )
}
  



// is active, usado para "marcar" donde me encuentro en el navlink