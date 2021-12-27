import ReadsDetail from "./ReadsDetail";

import { NavLink, Outlet, Link } from 'react-router-dom'

export default function ReadsDisplay() {
    return (
        <div>
            <h2>Display</h2>
            <NavLink
                className='link'
                to="detail"
            >
                <button>Detalle</button>
            </NavLink>
        </div>
    )
}
