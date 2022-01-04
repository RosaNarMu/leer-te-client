import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import HorizontalListProfile from '../components/HorizontalList/HorizontalListProfile.jsx';


export default function UserProfile({ logout }) {
    const navigate = useNavigate();
    function exit() {

        logout();
        navigate('/login', {
            replace: true
        });

    }

    const user = true;
    const favorites = 'Tus Favoritos';
    const readingsUnlocked = 'Lecturas desbloqueadas';
    const publications = 'Publicaciones';
    const drafts = 'Borradores';

    const [profileInfoDisplay, setProfileInfoDisplay] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/profile')
            const data = await response.json();
            setProfileInfoDisplay(data);
            console.log(data);
        }

        fetchData();
    }, []);

    const firstList = profileInfoDisplay.favorites;
    const secondList = profileInfoDisplay.readingsUnlocked;
    const thirdList = profileInfoDisplay.publications;
    const fourthList = profileInfoDisplay.drafts;


    return (
        <section className='userProfile-div-wrapper'>

            <section className='userProfile-div-head'>
                <span>¡Bienvenido, {profileInfoDisplay.username}!</span>
                <NavLink
                    className='link'
                    to="informationupdate"
                >
                    <button className='btn'>Actualiza tu información</button>
                </NavLink>
            </section>

            <section className='userProfile-div-listWrap'>

                <HorizontalListProfile listName={favorites} user={user} list={firstList}></HorizontalListProfile>
                <HorizontalListProfile listName={readingsUnlocked} user={user} list={secondList}></HorizontalListProfile>
                <HorizontalListProfile listName={publications} user={user} list={thirdList}></HorizontalListProfile>
                <HorizontalListProfile listName={drafts} user={user} list={fourthList}></HorizontalListProfile>

            </section>


        </section>
    )
}
