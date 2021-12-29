import ReadsDetail from "./ReadsDetail";

import { NavLink, Outlet, Link } from 'react-router-dom'

export default function ReadsDisplay() {
    return (
        <>
            <search>
                <form action="">
                    <input type="text" placeholder='Busca tu próxima lectura' />
                </form>
            </search>
            <main>
                <div><div>
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
