import ReadsDetail from "./ReadsDetail";
import Card from "../components/HorizontalList/Card";
import { useEffect, useState } from "react"
import { NavLink, Outlet, Link, useSearchParams } from 'react-router-dom'

export default function ReadsDisplay({ user }) {

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

    const [searchParams, setSearchParams] = useSearchParams();

    function emptyFunction(params) {
        console.log('cambio de radio');
    }

    function handleFilter(e) {
        setSearchParams({ filter: e.target.value })
    }

    const filter = searchParams.get('filter') || '';

    return (
        <>
            <section className='reads-display-searchForm-block'>
                <form className='reads-display-searchForm' action="">
                    <input className='reads-display-searchInput input' type="text" value={filter} onChange={handleFilter} placeholder='Busca tu próxima lectura' key='searchInput' />
                </form>
            </section>
            <main className='reads-display-center-main'>
                <div className='reads-display-radio-main'>
                    <span className='reads-display-radio-title'>¡Elige tu género favorito!</span>
                    <form onSubmit={emptyFunction}>

                        <label className="container" key="fantasy">Fantasía
                            <input type="radio" name="genre" /* checked="checked" */ value="fantasy" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="horror">Terror
                            <input type="radio" name="genre" /* checked="checked" */ value="horror" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="romance">Romance
                            <input type="radio" name="genre" /* checked="checked" */ value="romance" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="sciFy">Ciencia Ficción
                            <input type="radio" name="genre" /* checked="checked" */ value="sciFy" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="mistery">Misterio
                            <input type="radio" name="genre" /* checked="checked" */ value="mistery" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="noFiction">No ficción
                            <input type="radio" name="genre" /* checked="checked" */ value="noFiction" /* onChange={ } */ />
                            <span className="checkmark"></span>
                        </label>

                    </form>

                </div>

                <div className='reads-display-cards'>
                    {readsDisplay.filter((reading) => {
                        if (!filter) {
                            return true;
                        }

                        const title = reading.title.toLowerCase();

                        return title.includes(filter.toLowerCase());
                    })

                        /* readsDisplay && readsDisplay */.map(({ id, title, author, genre }, index) => (
                        <Card id={id} title={title} author={author} genre={genre} user={user}></Card>

                    ))}
                </div>

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
