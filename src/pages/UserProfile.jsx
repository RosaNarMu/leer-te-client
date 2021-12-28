import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'


export default function UserProfile({ logout }) {
    const navigate = useNavigate();
    function exit() {

        logout();
        navigate('/login');

    }

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
            <button onClick={exit}>Logout</button>
        </div>
    )
}
