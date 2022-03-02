import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'


//delete y put van aquí

function deleteStory(e, idStory) {

    async function fetchData() {
        const commentResponse = await fetch(`http://localhost/leer-te-server/public/index.php/story/delete/${idStory}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
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

export default function CardProfile({ id, title, author, genre, listName }) {
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
                            to={`/display/detailFav/${id}`}
                        >
                            <button className='btn'> Accede a la lectura</button>
                        </NavLink>


                    )}


                    {listName.includes('Publicaciones') && (
                        <>
                            <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación" >
                                <i class="fas fa-trash-alt" ></i>
                            </button>

                            <NavLink
                                className=''
                                to="/create"
                            >
                                <button className='btn'> Accede al editor </button>
                            </NavLink>


                        </>
                    )}

                    {listName.includes('Borradores') && (

                        <>
                            <button onClick={(e) => deleteStory(e, id)} className='btn delete-btn' title="Elimina la publicación">
                                <i class="fas fa-trash-alt"></i>
                            </button>

                            <NavLink
                                className=''
                                to="/create"
                            >
                                <button className='btn '> Accede al editor </button>
                            </NavLink>


                        </>

                    )}



                </div>
            </a>
        </div>

    )
}
