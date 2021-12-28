import { NavLink, Outlet, useNavigate } from 'react-router-dom'


export const Navbar = ({ user, logout }) => {
    const navigate = useNavigate();
    function exit() {

        logout();
        navigate('/login');

    }
    return (
        <>
            <nav className="bar" >

                <NavLink
                    className='link'
                    to="/"
                >
                    <img src="https://cireasesores.com/wp-content/uploads/2017/01/default_logo.png" alt="logo" />
                </NavLink>

                <NavLink
                    className='link'
                    to="/display"
                >
                    <button>¡A leer!</button>
                </NavLink>

                {user && (
                    <NavLink
                        className='link'
                        to="/create"
                    >
                        <button>¡A escribir!</button>
                    </NavLink>
                )}


                <NavLink
                    className='link'
                    to="/contact"
                >
                    <button>Contacto</button>
                </NavLink>

                <NavLink
                    className='link'
                    to="/faq"
                >
                    <button>FAQ</button>
                </NavLink>

                {!user && (
                    <NavLink
                        className='link'
                        to="/login"
                    >
                        <button>Tu cuenta</button>
                    </NavLink>
                )}


                {user && (
                    <>
                        <NavLink
                            className='link'
                            to="/userprofile"
                        >
                            <button>Tu cuenta</button>
                        </NavLink>

                        <button onClick={exit}>Logout</button>
                    </>
                )}

            </nav>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}