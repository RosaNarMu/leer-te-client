import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import HorizontalList from '../components/HorizontalList/HorizontalList'



export default function Home() {

    const listName = '¡Novedades!';

    const user = localStorage.Authenticated;

    return (
        <>
            <main className='home-div-main'>


                <div className='home-div-left'>



                    <NavLink

                        to="/display"
                    >
                        <button className='home-div-button btn'> ¡Explora!<i class="fab fa-readme button-icon"></i></button>

                    </NavLink>
                    <i class="fab fa-readme background-icon fa-10x"></i>
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
                            <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt button-icon"></i></button>
                        </NavLink>

                    ) : (
                        <NavLink
                            className=''
                            to="/login"
                        >
                            <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt button-icon"></i></button>
                        </NavLink>
                    )}

                    {/* 
                <NavLink

                    {user ? (to = "/create") : (to = '/login')}
                >
                    <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt"></i></button>
                </NavLink> */}

                    <i class="fas fa-feather-alt background-icon fa-10x"></i>
                </div>

            </main >
            <section>
                <HorizontalList listName={listName} user={user}></HorizontalList>
            </section>
        </>
    )
}
