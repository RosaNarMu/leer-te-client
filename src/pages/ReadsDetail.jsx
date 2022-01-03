import React from 'react'
import CommentsBox from '../components/readsDetail/CommentsBox'

export default function ReadsDetail() {

    const title = 'Título de ejemplo'
    const author = 'User'
    const genre = 'género'
    const text = 'Lorem fistrum torpedo pecador al ataquerl me cago en tus muelas. Quietooor mamaar pecador por la gloria de mi madre a peich quietooor. Ese que llega pecador tiene musho peligro diodeno llevame al sircoo ese pedazo de mamaar pecador a peich hasta luego Lucas diodenoo. Jarl te va a hasé pupitaa tiene musho peligro ese hombree apetecan pupita al ataquerl se calle ustée quietooor de la pradera ese que llega. Está la cosa muy malar sexuarl benemeritaar por la gloria de mi madre torpedo qué dise usteer papaar papaar pupita pupita hasta luego Lucas hasta luego Lucas. Qué dise usteer a wan hasta luego Lucas ahorarr al ataquerl la caidita tiene musho peligro amatomaa. De la pradera hasta luego Lucas te va a hasé pupitaa ese pedazo de a gramenawer. Benemeritaar pecador me cago en tus muelas amatomaa por la gloria de mi madre ese que llega. Papaar papaar me cago en tus muelas no puedor jarl diodenoo no te digo trigo por no llamarte Rodrigor está la cosa muy malar sexuarl hasta luego Lucas te va a hasé pupitaa. Hasta luego Lucas diodenoo hasta luego Lucas pupita. Apetecan de la pradera ese pedazo de ese pedazo de al ataquerl.  '

    const user = 'usuario'
    const id = '1'
    const comment = 'Comentario de ejemplo'

    return (
        <main className='readsDisplay-div-wrapper'>
            <section className='readsDisplay-div-main'>

                <section className='readsDisplay-div-left'>
                    <ul>
                        <li>{` Título: ${title}`}</li>
                        <li>{` Autor: ${author}`}</li>
                        <li>{`Género: ${genre}`}</li>
                    </ul>

                    <button className='btn'>Añade a favoritos</button>

                    <button className='btn'>Descarga en pdf para leer más tarde</button>


                </section>

                <section className='readsDisplay-div-right'>

                    <span>{text}</span>

                </section>


            </section>

            <section className='readsDisplay-div-bottom'>

                <div className='readsDisplay-div-comment-input'>
                    <span >¡Opina!</span>
                    <textarea /* ref={ref} */ maxlength="50" type='text' className='input' />
                    <button className='btn' type="submit" >Enviar comentario</button>
                </div>

                <hr></hr>
                <CommentsBox id={id} user={user} comment={comment}></CommentsBox>
                <CommentsBox id={id} user={user} comment={comment}></CommentsBox>
            </section>


        </main>
    )
}
