import React from 'react'

export default function Card({ id, title, author, genre }) {
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
                    <button className='btn'> Accede mediante pago social</button>
                </div>
            </a>
        </div>

    )
}
