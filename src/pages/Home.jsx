import React from 'react'

export default function Home() {
    return (
        <main className='home-div-main'>
            <div className='home-div-title'>
                <h2>¿Qué te apetece hoy?</h2>
                <h2>¿Leer?</h2>
                <h2>¿Escribir?</h2>
            </div>

            <div className='home-div-left'>

                <button className='home-div-button btn'> ¡Explora!<i class="fab fa-readme"></i></button>


            </div>
            <div className='home-div-right'>
                <button className='home-div-button btn'> ¡Crea! <i class="fas fa-feather-alt"></i></button>

            </div>
        </main>
    )
}
