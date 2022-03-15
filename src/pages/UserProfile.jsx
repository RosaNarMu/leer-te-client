import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import HorizontalListProfile from '../components/HorizontalList/HorizontalListProfile.jsx';
import ScrollUp from '../components/Ui/ScrollUp.jsx';
import { FAVORITE_DATA, STORY_DRAFTS, STORY_PUBLISHED, USER_DATA } from '../etc/config.js';


export default function UserProfile() {

    const favorites = 'Tus favoritos';

    const publications = 'Publicaciones';
    const drafts = 'Borradores';

    const [profileInfoDisplay, setProfileInfoDisplay] = useState([]);

    const [favoritesList, setFavoritesList] = useState([]);

    const [publishedList, setPublishedList] = useState([]);

    const [draftsList, setDraftsList] = useState([]);

    const token = localStorage.getItem('UserToken');


    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(USER_DATA, {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setProfileInfoDisplay(data);
        }

        fetchData();
    }, [token]);


    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(FAVORITE_DATA, {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setFavoritesList(data);
            console.log(data);
        }

        fetchData();
    }, [token]);

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch(STORY_PUBLISHED, {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setPublishedList(data);

        }

        fetchData();
    }, [token]);

    useEffect(() => {
        async function fetchData() {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };

            const response = await fetch(STORY_DRAFTS, {
                method: 'GET',
                headers: headers
            })

            const data = await response.json();
            setDraftsList(data);
        }

        fetchData();
    }, [token]);


    return (
        <section className='userProfile-div-wrapper'>

            <section className='userProfile-div-head'>
                {
                    profileInfoDisplay && profileInfoDisplay.map(({ userLogin }, id) => (
                        <span key={id}>¡Bienvenido, {userLogin}!</span>
                    ))
                }

                <NavLink
                    className='link'
                    to="informationupdate"
                >
                    <button className='btn'>Actualiza tu información</button>
                </NavLink>
            </section>

            <section className='userProfile-div-listWrap'>

                <HorizontalListProfile listName={favorites} list={favoritesList}></HorizontalListProfile>

                <HorizontalListProfile listName={publications} list={publishedList}></HorizontalListProfile>

                <HorizontalListProfile listName={drafts} list={draftsList}></HorizontalListProfile>

            </section>

            <ScrollUp></ScrollUp>

        </section >
    )
}
