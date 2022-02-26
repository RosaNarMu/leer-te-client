import { useContext } from 'react';
import UseContextGeneral from '../UseContext';
import Card from '../components/HorizontalList/Card'

export default function SocialPayment() {
    const id = 'id';
    const title = 'Título ejemplo';
    const author = 'User';
    const genre = 'género';

    const { user, setUser } = useContext(UseContextGeneral);


    return (
        <main className='socialPayment-div-wrapper'>
            <section className='socialPayment-div-main'>

                <section className='socialPayment-div-left'>
                    <h2>Vas a acceder a: </h2>
                    <Card id={id} title={title} author={author} genre={genre} user={user}></Card>


                </section>
                <section className='socialPayment-div-right'>



                    <span>¿En qué consiste el pago social?</span>
                    <p>
                        Para acceder a esta lectura sólo tienes que postear en Twitter o Facebook,
                        así el autor podrá tener difusión a cambio de su publicación. Así mismo,
                        tu también la tendrás cuando publiques un relato y alguien lo desbloquee.
                    </p>
                    <p>
                        Por favor, ¡no borres la publicación una vez realizada la descarga!
                    </p>

                    <section className='socialPayment-div-right-buttons'>
                        <button className='btn'>Twitter <i className="fab fa-twitter"></i></button>
                        <button className='btn'>Facebook <i className="fab fa-facebook"></i></button>
                    </section>

                </section>

            </section>
            {/* <section className='socialPayment-div-bottom'> */}
            {/* <button className='btn'>Twitter <i className="fab fa-twitter"></i></button>
                <button className='btn'>Facebook <i className="fab fa-facebook"></i></button> */}
            {/* </section> */}
        </main>
    )
}
