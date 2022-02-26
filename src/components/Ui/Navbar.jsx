import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import UseContextGeneral from '../../UseContext';


export const Navbar = ({ logout }) => {
    const navigate = useNavigate();

    const { user, setUser } = useContext(UseContextGeneral);



    console.log(typeof (user));

    function exit() {

        logout();
        navigate('/login', {
            replace: true
        });
        window.localStorage.removeItem('UserToken');


    }
    return (
        <>
            <header>
                <nav className="navbar-main " >
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

                    {/*  <label className="openMenuIcon" htmlFor="openMenu">
                        <i className="fas fa-bars"></i>
                    </label>
                    <input className="openMenu" type="checkbox" id="openMenu" /> */}

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
                    <section>
                        <Outlet></Outlet>
                    </section>
                </nav>
            </header>

        </>
    )
}