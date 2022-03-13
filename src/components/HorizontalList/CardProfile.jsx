import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

const token = localStorage.getItem('UserToken');

function deleteStory(e, idStory) {

    async function fetchData() {
        const commentResponse = await fetch(`http://localhost/leer-te-server/public/index.php/story/delete/${idStory}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        const data = await commentResponse.json();
        console.log(data);
        /*console.log("lgooin"); */

        if (commentResponse.ok) {

            /* navigate('/userprofile', {

            }); */
        }
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
                        <a href="" className="card-link">
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
                            <button className='btn'> Accede a la lectura</button>
                        </div>
                    </div>
                </NavLink>


            )}

            {!listName.includes('Tus favoritos') && (
                <div className="card" key={id}>
                    {coverImage && (
                        <div className="card-img" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                    )}
                    {!coverImage && (
                        <div className="card-img" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                    )}
                    <a href="" className="card-link">
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
                            <>
                                <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación" >
                                    <i className="fas fa-trash-alt" ></i>
                                </button>

                                <NavLink
                                    className=''
                                    to={`/update/${id}`}
                                >
                                    <button className='btn'> Accede al editor </button>
                                </NavLink>


                            </>
                        )}

                        {listName.includes('Borradores') && (

                            <>
                                <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación">
                                    <i className="fas fa-trash-alt"></i>
                                </button>

                                <NavLink
                                    className=''
                                    to={`/update/${id}`}
                                >
                                    <button className='btn '> Accede al editor </button>
                                </NavLink>


                            </>

                        )}
                    </div>
                </div>
            )}

            {/*  <div className="card" key={id}>
                {coverImage && (
                    <div className="card-img" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                )}
                {!coverImage && (
                    <div className="card-img" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                )}
                <a href="" className="card-link">
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
                        <>
                            <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación" >
                                <i className="fas fa-trash-alt" ></i>
                            </button>

                            <NavLink
                                className=''
                                to={`/update/${id}`}
                            >
                                <button className='btn'> Accede al editor </button>
                            </NavLink>


                        </>
                    )}

                    {listName.includes('Borradores') && (

                        <>
                            <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación">
                                <i className="fas fa-trash-alt"></i>
                            </button>

                            <NavLink
                                className=''
                                to={`/update/${id}`}
                            >
                                <button className='btn '> Accede al editor </button>
                            </NavLink>


                        </>

                    )}
                </div>
            </div> */}

            {/*  <div className="card-grid-space"
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
                                to={`/display/detailFav/${id}`}
                            >
                                <button className='btn'> Accede a la lectura</button>
                            </NavLink>


                        )}


                        {listName.includes('Publicaciones') && (
                            <>
                                <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación" >
                                    <i className="fas fa-trash-alt" ></i>
                                </button>

                                <NavLink
                                    className=''
                                    to={`/update/${id}`}
                                >
                                    <button className='btn'> Accede al editor </button>
                                </NavLink>


                            </>
                        )}

                        {listName.includes('Borradores') && (

                            <>
                                <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación">
                                    <i className="fas fa-trash-alt"></i>
                                </button>

                                <NavLink
                                    className=''
                                    to={`/update/${id}`}
                                >
                                    <button className='btn '> Accede al editor </button>
                                </NavLink>


                            </>

                        )}



                    </div>
                </a>
            </div> */ }
        </>
    )
}
