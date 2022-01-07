import { useParams } from 'react-router'
import { useEffect, useState } from "react"
import CommentsBox from '../components/readsDetail/CommentsBox'
import { useFetch } from '../hook/useFetch';
import { useUrl, useUrlFav } from '../hook/useUrlFav';


export default function ReadsDetailFav() {

    //ALGO NO DEJA DE FUNCIONAR EN EL FETCH CUANDO PONGO LA PARTE DEL FIND A FUNCIONAR


    /* const [readingSelectedDisplay, setReadingSelectedDisplay] = useState([]); */

    const { detailId } = useParams();

    const numberDetailId = parseInt(detailId)

    console.log(typeof (detailId));

    console.log(typeof (numberDetailId));

    const reading = useUrlFav(numberDetailId);

    console.log(reading);


    const comments = reading.comments;
    /*  useFetch('http://localhost:3000/profile', setReadingSelectedDisplay) */


    /* useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/profile')
            const data = await response.json();
            setReadingSelectedDisplay(data);
            console.log(data);
        }

        fetchData();
    }, []); */



    /*  const getReadingById = (id = '') => {
         return readingSelectedDisplay.find(reading => reading.id === id);
     }
  */

    /* console.log(readingSelectedDisplay.favorites);

    const reading = readingSelectedDisplay.favorites.find(({ id }) => id == detailId) */

    /*  const reading = readingSelectedDisplay.favorites.find(reading => reading.id == detailId);
 
     console.log(reading.title); */

    /* const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10); */

    const title = 'Título de ejemplo'
    const author = 'User'
    const genre = 'género'
    const text = 'Lorem fistrum torpedo pecador al ataquerl me cago en tus muelas. Quietooor mamaar pecador por la gloria de mi madre a peich quietooor. Ese que llega pecador tiene musho peligro diodeno llevame al sircoo ese pedazo de mamaar pecador a peich hasta luego Lucas diodenoo. Jarl te va a hasé pupitaa tiene musho peligro ese hombree apetecan pupita al ataquerl se calle ustée quietooor de la pradera ese que llega. Está la cosa muy malar sexuarl benemeritaar por la gloria de mi madre torpedo qué dise usteer papaar papaar pupita pupita hasta luego Lucas hasta luego Lucas. Qué dise usteer a wan hasta luego Lucas ahorarr al ataquerl la caidita tiene musho peligro amatomaa. De la pradera hasta luego Lucas te va a hasé pupitaa ese pedazo de a gramenawer. Benemeritaar pecador me cago en tus muelas amatomaa por la gloria de mi madre ese que llega. Papaar papaar me cago en tus muelas no puedor jarl diodenoo no te digo trigo por no llamarte Rodrigor está la cosa muy malar sexuarl hasta luego Lucas te va a hasé pupitaa. Hasta luego Lucas diodenoo hasta luego Lucas pupita. Apetecan de la pradera ese pedazo de ese pedazo de al ataquerl.  '

    const user = 'usuario'
    const idex = '1'
    const comment = 'Comentario de ejemplo'






    return (
        <main className='readsDisplay-div-wrapper'>
            <section className='readsDisplay-div-main'>

                <section className='readsDisplay-div-left'>
                    <ul>
                        <li>{` Título: ${reading.title}`}</li>
                        <li>{` Autor: ${reading.author}`}</li>
                        <li>{`Género: ${reading.genre}`}</li>
                    </ul>

                    <button className='btn'>Añade a favoritos</button>

                    <button className='btn'>Descarga en pdf para leer más tarde</button>


                </section>

                <section className='readsDisplay-div-right'>

                    <span>{reading.text}</span>

                </section>


            </section>

            <section className='readsDisplay-div-bottom'>

                <form /* onSubmit={ } */ className='readsDisplay-div-comment-input'>
                    <span >¡Opina!</span>
                    <textarea /* ref={ref} */ maxLength="50" type='text' className='input' />
                    <button className='btn' type="submit" >Enviar comentario</button>
                </form>

                <hr></hr>
                {


                    comments && comments.map(({ commentId, userComenter, body }, index) => (

                        <CommentsBox key={commentId} id={commentId} user={userComenter} comment={body}></CommentsBox>


                    ))}
                { }

            </section>


        </main>
    )
}

/* {


    list && list.map(({ id, title, author, genre }, index) => (

        <CardProfile id={id} title={title} author={author} genre={genre} user={user} listName={listName}></CardProfile>

    ))} */