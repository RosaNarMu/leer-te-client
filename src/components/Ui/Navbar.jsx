import { NavLink, Outlet, useNavigate } from 'react-router-dom'


export const Navbar = ({ user, logout }) => {
    const navigate = useNavigate();
    function exit() {

        logout();
        navigate('/login');

    }
    return (
        <>
            <header>
                <nav className="navbar-main" >
                    <ul>
                        <li>
                            <NavLink
                                className=''
                                to="/"
                            >
                                {<div className='logo-74x75'></div>}
                                {/* <img src="../../assets/LOGO.png" alt="logo" /> */}

                            </NavLink>

                        </li>
                    </ul>

                    <ul className='navbar-center'>
                        <li>
                            <NavLink
                                className=''
                                to="/display"
                            >
                                <button className='btn'>¡A leer!</button>
                            </NavLink>
                        </li>




                        {user && (
                            <li>
                                <NavLink
                                    className=''
                                    to="/create"
                                >
                                    <button className='btn'>¡A escribir!</button>
                                </NavLink>
                            </li>
                        )}

                        <li>
                            <NavLink
                                className=''
                                to="/contact"
                            >
                                <button className='btn'>Contacto</button>
                            </NavLink>
                        </li>

                        <li>

                            <NavLink
                                className=''
                                to="/faq"
                            >
                                <button className='btn'>FAQ</button>
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='navbar-end'>
                        {!user && (
                            <li>
                                <NavLink
                                    className=''
                                    to="/login"
                                >
                                    <button className='btn'>Tu cuenta</button>
                                </NavLink>
                            </li>
                        )}


                        {user && (
                            <>
                                <li>
                                    <NavLink
                                        className=''
                                        to="/userprofile"
                                    >
                                        <button className='btn'>Tu cuenta</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <button className='btn' onClick={exit}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}