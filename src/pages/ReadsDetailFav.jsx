import { useParams } from 'react-router'
import { useEffect, useState, useContext } from "react"
import CommentsBox from '../components/readsDetail/CommentsBox'
import { useFetch } from '../hook/useFetch';
import { useUrl, useUrlFav } from '../hook/useUrlFav';
import UseContextGeneral from "../UseContext";


export default function ReadsDetailFav() {

    const { user, setUser, logout } = useContext(UseContextGeneral);


    const [readingSelectedDisplay, setReadingSelectedDisplay] = useState({});

    const [reading, setReading] = useState();

    const [newComment, setNewComment] = useState("");

    const [commentScore, setCommentScore] = useState("");

    const [checkFavorites, setCheckFavorites] = useState([]);

    const { detailId } = useParams();

    const numberDetailId = parseInt(detailId);

    const token = localStorage.getItem('UserToken');

    /*  const reading = useUrlFav(numberDetailId); */

    /* console.log(reading); */


    /* const comments = reading.comments; */
    /*  useFetch('http://localhost:3000/profile', setReadingSelectedDisplay) */


    useEffect(() => {
        /* fetch('./data.json', {
            method: 'GET',
            headers: {

                'Content-Type': 'application/json',

                'Accept': 'application/json'

            }
        }
        )
            .then(response => response.json())
            .then(data => console.log(data)) */
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(`http://localhost/leer-te-server/public/index.php/story/detail/${numberDetailId}`, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setReadingSelectedDisplay(data);

        }

        fetchData();
    }, []);

    /*     console.log("FISTRO PECADOORRR", readingSelectedDisplay); */

    /*  const getReadingById = (id = '') => {
         return readingSelectedDisplay.find(reading => reading.id === id);
     }
    */

    /* console.log(readingSelectedDisplay.favorites);

    const reading = readingSelectedDisplay.favorites.find(({ id }) => id == detailId) */



    useEffect(() => {
        setReading(/* (prev) => [...prev, */ readingSelectedDisplay/* .filter(read => read.id === numberDetailId) */)

    }, [numberDetailId])



    /* const reading = readingSelectedDisplay.filter(read => read.id === numberDetailId); */

    /* console.log(reading); */

    /* const array1 = [5, 12, 8, 130, 44];
     
    const found = array1.find(element => element > 10); */

    const title = 'Título de ejemplo'
    const author = 'User'
    const genre = 'género'
    const text = 'Lorem fistrum torpedo pecador al ataquerl me cago en tus muelas. Quietooor mamaar pecador por la gloria de mi madre a peich quietooor. Ese que llega pecador tiene musho peligro diodeno llevame al sircoo ese pedazo de mamaar pecador a peich hasta luego Lucas diodenoo. Jarl te va a hasé pupitaa tiene musho peligro ese hombree apetecan pupita al ataquerl se calle ustée quietooor de la pradera ese que llega. Está la cosa muy malar sexuarl benemeritaar por la gloria de mi madre torpedo qué dise usteer papaar papaar pupita pupita hasta luego Lucas hasta luego Lucas. Qué dise usteer a wan hasta luego Lucas ahorarr al ataquerl la caidita tiene musho peligro amatomaa. De la pradera hasta luego Lucas te va a hasé pupitaa ese pedazo de a gramenawer. Benemeritaar pecador me cago en tus muelas amatomaa por la gloria de mi madre ese que llega. Papaar papaar me cago en tus muelas no puedor jarl diodenoo no te digo trigo por no llamarte Rodrigor está la cosa muy malar sexuarl hasta luego Lucas te va a hasé pupitaa. Hasta luego Lucas diodenoo hasta luego Lucas pupita. Apetecan de la pradera ese pedazo de ese pedazo de al ataquerl.  '


    const idex = '1'
    const comment = 'Comentario de ejemplo'

    function submitComment(event) {

        async function fetchData() {
            const commentResponse = await fetch("http://localhost/leer-te-server/public/index.php/comment/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ content: newComment, score: commentScore, story: numberDetailId })
                /* '{"title":"' + title + '","content":"' + content + '","genre":"' + genre + '" ,"published":"' + published + '"}' */
            })
            const data = await commentResponse.json();
            /*  console.log(data);
             console.log("lgooin"); */

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

            const response = await fetch(`http://localhost/leer-te-server/public/index.php/favorites/data/check`, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setCheckFavorites(data);

        }

        fetchData();
    }, []);

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
            const commentResponse = await fetch("http://localhost/leer-te-server/public/index.php/favorites/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({ story: numberDetailId })
                /* '{"title":"' + title + '","content":"' + content + '","genre":"' + genre + '" ,"published":"' + published + '"}' */
            })
            const data = await commentResponse.json();
            console.log(data);
            /* console.log("lgooin"); */

            if (commentResponse.ok) {

                /* navigate('/userprofile', {

                }); */
            }
        }
        fetchData();
        event.preventDefault();
    }

    function deleteFavorite(e) {

        async function fetchData() {
            const commentResponse = await fetch(`http://localhost/leer-te-server/public/index.php/favorites/delete/${deletedFavorite}`, {
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

                    {!user && (
                        <span >Ingresa en tu cuenta para añadir este relato a tus favoritos</span>
                    )}



                </section>

                <section className='readsDisplay-div-right'>

                    <span>{readingSelectedDisplay.content}</span>

                </section>


            </section>

            <section className='readsDisplay-div-bottom'>
                {user && (
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
                )}

                {!user && (
                    <span >Ingresa en tu cuenta para valorar el relato</span>
                )}

                <hr></hr>
                {

                    <CommentsBox key={readingSelectedDisplay.id} idStory={readingSelectedDisplay.id} ></CommentsBox>
                   /*  comments && comments.map(({ commentId, userComenter, body }, index) => (

                        <CommentsBox key={commentId} id={commentId} user={userComenter} comment={body}></CommentsBox>


                    )) */}


            </section>


        </main>
    )
}

/* {


    list && list.map(({ id, title, author, genre }, index) => (

        <CardProfile id={id} title={title} author={author} genre={genre} user={user} listName={listName}></CardProfile>

    ))} */