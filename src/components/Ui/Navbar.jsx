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
                    className='link '
                    to="/"
                >
                    {/*  <div className='logo'></div> */}
                    <img src="../../assets/LOGO.png" alt="logo" />

                </NavLink>

                <NavLink
                    className='link'
                    to="/display"
                >
                    <button className='btn'>¡A leer!</button>
                </NavLink>

                {user && (
                    <NavLink
                        className='link'
                        to="/create"
                    >
                        <button className='btn'>¡A escribir!</button>
                    </NavLink>
                )}


                <NavLink
                    className='link'
                    to="/contact"
                >
                    <button className='btn'>Contacto</button>
                </NavLink>

                <NavLink
                    className='link'
                    to="/faq"
                >
                    <button className='btn'>FAQ</button>
                </NavLink>

                {!user && (
                    <NavLink
                        className='link'
                        to="/login"
                    >
                        <button className='btn'>Tu cuenta</button>
                    </NavLink>
                )}


                {user && (
                    <>
                        <NavLink
                            className='link'
                            to="/userprofile"
                        >
                            <button className='btn'>Tu cuenta</button>
                        </NavLink>

                        <button className='btn' onClick={exit}>Logout</button>
                    </>
                )}

            </nav>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}