import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import HorizontalList from '../components/HorizontalList/HorizontalList'



export default function Home({ user }) {

    const listName = '¡Novedades!';
    return (
        <>
            <main className='home-div-main'>


                <div className='home-div-left'>



                    <NavLink

                        to="/display"
                    >
                        <button className='home-div-button btn'> ¡Explora!<i class="fab fa-readme"></i></button>
                    </NavLink>

                </div>
                <div className='home-div-title'>
                    <h2>¿Qué te apetece hoy?</h2>
                    <h2>¿Leer?</h2>
                    <h2>¿Escribir?</h2>
                </div>
                <div className='home-div-right'>

                    {user ? (

                        <NavLink
                            className=''
                            to="/create"
                        >
                            <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt"></i></button>
                        </NavLink>

                    ) : (
                        <NavLink
                            className=''
                            to="/login"
                        >
                            <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt"></i></button>
                        </NavLink>
                    )}

                    {/* 
                <NavLink

                    {user ? (to = "/create") : (to = '/login')}
                >
                    <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt"></i></button>
                </NavLink> */}


                </div>

            </main >
            <section>
                <HorizontalList listName={listName}></HorizontalList>
            </section>
        </>
    )
}
