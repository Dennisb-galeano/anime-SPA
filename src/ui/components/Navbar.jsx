
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { logged, user, logoutUser } = useContext(AuthContext);

    console.log(logged);

    const navigate = useNavigate();

    
    const onLogout = () => {
        logoutUser();
        navigate('/login', {  //navegar a... se puede enviar un objeto con el replace en true, para que remplace la ruta en la q me encuentro 
            replace: true
        });

        //el replace evita uqe la persona pueda regresar al historial anterior, por que en teoria se reemplaza
    }


    return (
        <>
 

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Anime
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                        
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                            to="/OnePeace"
                        >
                            OnePeace
                        </NavLink>
                        

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                            to="/naruto"
                        >
                            Naruto
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} `}
                            to="/Search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <div className="navbar-nav my-2 my-lg-0">

                        <span className='nav-item nav-link text-primary'>
                            {user?.name}
                        </span>

                        <button
                            className='nav-item nav-link btn'
                            onClick={onLogout}

                        >
                            LogOut
                        </button>

                    </div>
                </div>

            </nav>

        </>
    )



}




// is active, usado para "marcar" donde me encuentro en el navlink