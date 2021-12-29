import ReadsDetail from "./ReadsDetail";
import Card from "../components/HorizontalList/Card";
import { useEffect, useState } from "react"
import { NavLink, Outlet, Link } from 'react-router-dom'

export default function ReadsDisplay() {

    const [readsDisplay, setReadsDisplay] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/readings-published')
            const data = await response.json();
            setReadsDisplay(data);
            console.log(data);
        }

        fetchData();
    }, [])

    return (
        <>
            <search>
                <form className='reads-display-searchForm' action="">
                    <input className='reads-display-searchInput input' type="text" placeholder='Busca tu próxima lectura' />
                </form>
            </search>
            <main className='reads-display-center-main'>
                <div className='reads-display-radio-main'>
                    <div>
                        <input type="radio" id="fantasy" name="genre" value="fantasy"
                            checked />
                        <label for="fantasy">Fantasía</label>
                    </div>

                    <div>
                        <input type="radio" id="horror" name="genre" value="horror" />
                        <label for="horror">Terror</label>
                    </div>

                    <div>
                        <input type="radio" id="romance" name="genre" value="romance" />
                        <label for="romance">Romance</label>
                    </div>
                    <div>
                        <input type="radio" id="scifi" name="genre" value="scifi" />
                        <label for="scifi">Ciencia Ficción</label>
                    </div>
                    <div>
                        <input type="radio" id="mistery" name="genre" value="mistery" />
                        <label for="mistery">Misterio</label>
                    </div>
                    <div>
                        <input type="radio" id="noFiction" name="genre" value="noFiction" />
                        <label for="noFiction">No ficción</label>
                    </div>
                </div>

                {/*   <div className='reads-display-cards'> */}
                {

                    readsDisplay && readsDisplay.map(({ id, title, author, genre }, index) => (
                        <Card id={id} title={title} author={author} gente={genre}></Card>

                    ))}
                {/*  </div> */}

            </main>


            {/* <h2>Display</h2>
            <NavLink
                className='link'
                to="detail"
            >
                <button>Detalle</button>
            </NavLink> */}
        </>
    )
}
