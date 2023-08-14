
  import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();


    const onLogout = () =>{
        navigate('/login', {  //navegar a... se puede enviar un objeto con el replace en true, para que remplace la ruta en la q me encuentro 
            replace:true
        });

        //el replace evita uqe la persona pueda regresar al historial anterior, por que en teoria se reemplaza
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
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

                    {/* <NavLink 
                        className= { ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''} `} 
                        to="/Search"
                    >
                        Search
                    </NavLink> */}
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                <span className='nav-item nav-link text-primary'>
                  Encito precioso 
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