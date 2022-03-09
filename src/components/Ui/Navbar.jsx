import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import UseContextGeneral from '../../UseContext';


export const Navbar = ({ logout }) => {
    const navigate = useNavigate();

    const { user, setUser, admin } = useContext(UseContextGeneral);

    function exit() {

        logout();
        navigate('/login', {
            replace: true
        });
        window.localStorage.removeItem('UserToken');

    }


    const [toggleMenu, setToggleMenu] = useState(false)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)



    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }


        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    console.log(screenWidth);


    return (
        <>
            <header>
                <nav className="navbar-main" >


                    {(toggleMenu || screenWidth > 1090) && (
                        <>
                            <ul className="list">
                                <li className="items">
                                    <NavLink
                                        className=''
                                        to="/"
                                    >
                                        <div className='logo-74x75'></div>


                                    </NavLink>

                                </li>
                            </ul>


                            <ul className='navbar-center list'>


                                {admin && (
                                    <li className="items">
                                        <NavLink
                                            className=''
                                            to="/admin"
                                        >
                                            <button className='btn'>Admin</button>
                                        </NavLink>
                                    </li>
                                )}
                                <li className="items">
                                    <NavLink
                                        className=''
                                        to="/display"
                                    >
                                        <button className='btn'>¡A leer!</button>
                                    </NavLink>
                                </li>



                                {user && (
                                    <li className="items">
                                        <NavLink
                                            className=''
                                            to="/create"
                                        >
                                            <button className='btn'>¡A escribir!</button>
                                        </NavLink>
                                    </li>
                                )}

                                <li className="items">
                                    <NavLink
                                        className=''
                                        to="/contact"
                                    >
                                        <button className='btn'>Contacto</button>
                                    </NavLink>
                                </li>

                                <li className="items">

                                    <NavLink
                                        className=''
                                        to="/faq"
                                    >
                                        <button className='btn'>FAQ</button>
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className='navbar-end list'>
                                {!user && (
                                    <li className="items">
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
                                        <li className="items">
                                            <NavLink
                                                className=''
                                                to="/userprofile"
                                            >
                                                <button className='btn'>Tu cuenta</button>
                                            </NavLink>
                                        </li>
                                        <li className="items">
                                            <button className='btn' onClick={exit}>Logout</button>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </>
                    )}
                    <button onClick={toggleNav} className='toggle'><i class="fas fa-bars"></i></button>
                    <section>
                        <Outlet></Outlet>
                    </section>
                </nav>
            </header>

        </>
    )
}