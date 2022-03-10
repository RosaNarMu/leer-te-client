import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

export default function Card({ id, title, User, genre, user }) {
    return (
        <NavLink
            className='disable-text'
            to={`/display/detailFav/${id}`}
        >
            <div
                key={id}
            >
                <a className="card" >
                    <div>
                        <h1>{title}</h1>
                        <h3>{User}</h3>


                        <div className="tags">
                            <div className="tag">Género: {genre}</div>
                        </div>


                        {/*   <NavLink
                        className=''
                        to={`/display/detailFav/${id}`}
                    >
                        <button className='btn'> Accede a la lectura</button>
                    </NavLink> */}


                    </div>
                </a>
            </div>
        </NavLink>

    )
}
