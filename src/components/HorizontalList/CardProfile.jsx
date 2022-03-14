import { NavLink } from 'react-router-dom'
import { STORY_DELETE } from '../../etc/config';

const token = localStorage.getItem('UserToken');

function deleteStory(e, idStory) {

    async function fetchData() {
        const commentResponse = await fetch(STORY_DELETE + idStory, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data = await commentResponse.json();
    }
    fetchData();
    e.preventDefault();
}

export default function CardProfile({ id, title, genre, listName, coverImage }) {
    return (
        <>
            {listName.includes('Tus favoritos') && (

                <NavLink
                    className='disable-text favorite-card'
                    to={`/display/detailFav/${id}`}
                >

                    <div className="card " key={id}>
                        {coverImage && (
                            <div className="card-img" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                        )}
                        {!coverImage && (
                            <div className="card-img" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                        )}
                        <a className="card-link">
                            {coverImage && (
                                <div className="card-img-hovered" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                            )}
                            {!coverImage && (
                                <div className="card-img-hovered" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                            )}
                        </a>
                        <div className="card-info">
                            <div className="card-about">
                                <a className="card-tag tag-news">{genre}</a>

                            </div>
                            <h1 className="card-title">{title}</h1>
                        </div>
                    </div>
                </NavLink>

            )}

            {!listName.includes('Tus favoritos') && (
                <div className="card" key={id}>
                    <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación" >
                        <i class="fa-solid fa-x"></i>
                    </button>
                    {coverImage && (
                        <div className="card-img" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                    )}
                    {!coverImage && (
                        <div className="card-img" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                    )}
                    <a className="card-link">
                        {coverImage && (
                            <div className="card-img-hovered" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                        )}
                        {!coverImage && (
                            <div className="card-img-hovered" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                        )}
                    </a>

                    <div className="card-info">
                        <div className="card-about">
                            <a className="card-tag tag-news">{genre}</a>
                        </div>
                        <h1 className="card-title">{title}</h1>

                        {listName.includes('Publicaciones') && (

                            <NavLink
                                className=''
                                to={`/update/${id}`}
                            >
                                <button className='btn'> Accede al editor </button>
                            </NavLink>

                        )}

                        {listName.includes('Borradores') && (

                            <NavLink
                                className=''
                                to={`/update/${id}`}
                            >
                                <button className='btn '> Accede al editor </button>
                            </NavLink>

                        )}
                    </div>
                </div>
            )}
        </>
    )
}
