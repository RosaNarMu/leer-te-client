import { NavLink, Outlet, Link } from 'react-router-dom'


export default function UserProfile() {
    return (
        <div>
            <h2>Perfil del usuario</h2>
            <NavLink
                className='link'
                to="informationupdate"
            >
                <button>Modifica info</button>
            </NavLink>
        </div>
    )
}
