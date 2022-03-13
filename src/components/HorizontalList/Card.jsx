import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'

export default function Card({ id, title, User, genre, user, coverImage }) {
    return (

        <NavLink
            className='disable-text'
            to={`/display/detailFav/${id}`}
        >
            <div class="card" key={id}>
                {coverImage && (
                    <div class="card-img" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                )}
                {!coverImage && (
                    <div class="card-img" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                )}
                <a href="" class="card-link">
                    {coverImage && (
                        <div class="card-img-hovered" style={{ backgroundImage: `url(data:image/png;base64,${coverImage})` }}></div>
                    )}
                    {!coverImage && (
                        <div class="card-img-hovered" style={{ backgroundImage: `url(https://img.freepik.com/foto-gratis/libros-primer-plano-copa-sobre-manta_23-2147767462.jpg)` }}></div>
                    )}
                </a>
                <div class="card-info">
                    <div class="card-about">
                        <a class="card-tag tag-news">{genre}</a>

                    </div>
                    <h1 class="card-title">{title}</h1>
                    <div class="card-creator">{User}</div>
                </div>
            </div>
        </NavLink>

        /*  <NavLink
             className='disable-text'
             to={`/display/detailFav/${id}`}
         >
             <div
                 key={id}
             >
                 <a className="card" >
                     <div>
                         <h1>{title}</h1>
                         <h3>{User}</h3>
 
 
                         <div className="tags">
                             <div className="tag">Género: {genre}</div>
                         </div>
 
                     </div>
                 </a>
             </div>
         </NavLink> */

    )
}
