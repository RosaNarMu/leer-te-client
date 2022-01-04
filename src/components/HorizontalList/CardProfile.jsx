import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

export default function CardProfile({ id, title, author, genre, user, listName }) {
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
                    {listName.includes('Tus Favoritos') && (

                        <NavLink
                            className=''
                            to="/display/detail"
                        >
                            <button className='btn'> Accede a la lectura</button>
                        </NavLink>


                    )}

                    {listName.includes('Lecturas desbloqueadas') && (



                        <NavLink
                            className=''
                            to="/display/detail"
                        >
                            <button className='btn'> Accede a la lectura</button>
                        </NavLink>


                    )}
                    {listName.includes('Publicaciones') && (

                        <NavLink
                            className=''
                            to="/create"
                        >
                            <button className='btn'> Accede al editor </button>
                        </NavLink>

                    )}

                    {listName.includes('Borradores') && (

                        <NavLink
                            className=''
                            to="/create"
                        >
                            <button className='btn'> Accede al editor </button>
                        </NavLink>

                    )}



                </div>
            </a>
        </div>

    )
}
