import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

export default function Card({ id, title, author, genre, user }) {
    return (

        <div className="card-grid-space"
            key={id}
        >
            <a className="card" >
                <div>
                    <h1>{title}</h1>
                    <h3>{author}</h3>


                    <div className="tags">
                        <div className="tag">Género: {genre}</div>
                    </div>
                    {user ? (

                        <NavLink
                            className=''
                            to="/socialpayment"
                        >
                            <button className='btn'> Accede con pago social</button>
                        </NavLink>

                    ) : (
                        <NavLink
                            className=''
                            to="/login"
                        >
                            <button className='btn'> Accede a tu cuenta </button>
                        </NavLink>
                    )}


                </div>
            </a>
        </div>

    )
}
