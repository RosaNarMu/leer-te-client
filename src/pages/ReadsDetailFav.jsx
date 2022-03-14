import { useParams } from 'react-router'
import { useEffect, useState, useContext } from "react"
import CommentsBox from '../components/readsDetail/CommentsBox'
import UseContextGeneral from "../UseContext";
import ScrollUp from "../components/Ui/ScrollUp";
import { NavLink } from 'react-router-dom';
import { STORY_DETAIL, COMMENT_ADD, FAVORITE_CHECK, FAVORITE_ADD, FAVORITE_DELETE } from '../etc/config';


export default function ReadsDetailFav() {

    const { user } = useContext(UseContextGeneral);

    const [readingSelectedDisplay, setReadingSelectedDisplay] = useState({});

    const [newComment, setNewComment] = useState("");

    const [commentScore, setCommentScore] = useState("");

    const [checkFavorites, setCheckFavorites] = useState([]);

    const { detailId } = useParams();

    const numberDetailId = parseInt(detailId);

    const token = localStorage.getItem('UserToken');


    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(STORY_DETAIL + numberDetailId, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setReadingSelectedDisplay(data);

        }

        fetchData();
    }, [numberDetailId, token]);


    function submitComment(event) {

        async function fetchData() {
            const commentResponse = await fetch(COMMENT_ADD, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ content: newComment, score: commentScore, story: numberDetailId })

            })
            const data = await commentResponse.json();

            if (commentResponse.ok) {

                setNewComment("");
                setCommentScore("");
            }
        }
        fetchData();
        event.preventDefault();
    }

    useEffect(() => {

        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };

            const response = await fetch(FAVORITE_CHECK, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setCheckFavorites(data);

        }

        fetchData();
    }, [token]);

    console.log(checkFavorites);

    let userCoincidence = 0;

    let deletedFavorite = 0;

    for (let i = 0; i < checkFavorites.length; i++) {

        if (checkFavorites[i].Story === numberDetailId) {

            userCoincidence++
            deletedFavorite = checkFavorites[i].id;
        }

    }


    function submitFavorite(event) {

        async function fetchData() {
            const commentResponse = await fetch(FAVORITE_ADD, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ story: numberDetailId })
            })
            const data = await commentResponse.json();

        }
        fetchData();
        event.preventDefault();
    }

    function deleteFavorite(e) {

        async function fetchData() {
            const commentResponse = await fetch(FAVORITE_DELETE + deletedFavorite, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await commentResponse.json();

        }
        fetchData();
        e.preventDefault();
    }


    return (
        <main className='readsDisplay-div-wrapper'>
            <section className='readsDisplay-div-main'>

                <section className='readsDisplay-div-left'>
                    <ul>
                        <li>{` Título: ${readingSelectedDisplay.title}`}</li>
                        <li>{` Autor: ${readingSelectedDisplay.User}`}</li>
                        <li>{`Género: ${readingSelectedDisplay.genre}`}</li>
                    </ul>

                    {
                        userCoincidence === 0 && user && (
                            <button className='btn' onClick={(e) => submitFavorite(e)}>Añade a favoritos</button>
                        )}

                    {
                        userCoincidence > 0 && user && (
                            <button className='btn' onClick={(e) => deleteFavorite(e)}>Elimina de favoritos</button>
                        )}
                </section>

                <section className='readsDisplay-div-right'>

                    <span>{readingSelectedDisplay.content}</span>

                    {readingSelectedDisplay.coverImage && (<img
                        src={'data:image/png;base64,' + readingSelectedDisplay.coverImage}
                        alt={'Imagen de portada'}
                        className='slider-img'
                    />)}

                </section>

            </section>

            <section className='readsDisplay-div-bottom'>

                {user && (
                    <>
                        <form onSubmit={submitComment} className='readsDisplay-div-comment-input'>
                            <span >¡Opina!</span>
                            <textarea required maxLength="50" type='text' className='input' value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                            <select required className="readsCreate-div-form-selector" onChange={(e) => setCommentScore(e.target.value)}>
                                <option value="">Valora el relato</option>
                                <option value={0}>Sin valoración</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <button className='btn' type="submit" >Enviar comentario</button>
                        </form>

                        <hr></hr>

                        <CommentsBox key={readingSelectedDisplay.id} idStory={readingSelectedDisplay.id} ></CommentsBox>
                    </>
                )}

                {!user && (
                    <>
                        <span className='readsCreate-div-noUser'>Ingresa en tu cuenta para poder ver los comentarios y añadir el relato a favoritos</span>
                        <NavLink
                            className=''
                            to="/login"
                        >
                            <button className='btn'>Accede a tu cuenta</button>
                        </NavLink>
                    </>
                )}

            </section>

            <ScrollUp></ScrollUp>
        </main>
    )
}