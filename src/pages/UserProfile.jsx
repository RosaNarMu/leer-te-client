import { NavLink, Outlet, Link } from 'react-router-dom'


export default function UserProfile({ logout }) {
    return (
        <div>
            <h2>Perfil del usuario</h2>
            <NavLink
                className='link'
                to="informationupdate"
            >
                <button>Modifica info</button>
            </NavLink>
            <Link to='/'> Home</Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
