import { NavLink, Outlet } from 'react-router-dom'


export const Navbar = () => {
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

                <NavLink
                    className='link'
                    to="/login"
                >
                    <button>Login</button>
                </NavLink>

                <NavLink
                    className='link'
                    to="/login"
                >
                    <button>Signup</button>
                </NavLink>
            </nav>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}