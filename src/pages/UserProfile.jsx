import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from "react"
import HorizontalListProfile from '../components/HorizontalList/HorizontalListProfile.jsx';
import { useFetch } from '../hook/useFetch.jsx';
import ScrollUp from '../components/Ui/ScrollUp.jsx';
import UseContextGeneral from '../UseContext.js';
import { USER_DATA } from '../config/config.js';


export default function UserProfile({ logout }) {
    const navigate = useNavigate();
    /* function exit() {

        logout();
        navigate('/login', {
            replace: true
        });

    } */

    /*  const user = localStorage.Authenticated; */

    const favorites = 'Tus Favoritos';

    const publications = 'Publicaciones';
    const drafts = 'Borradores';

    /* const { user, setToken } = useContext(UseContextGeneral); */

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
    }, []);

    /* useFetch('http://localhost:3000/profile', setProfileInfoDisplay); */

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch("http://localhost/leer-te-server/public/index.php/favorites/data", {
                method: 'GET',
                headers: headers
            })

            /* const token = await loginResponse.json();
            setToken(token.token); */
            const data = await response.json();
            setFavoritesList(data);
            console.log(data);
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch("http://localhost/leer-te-server/public/index.php/story/publishedFromUser", {
                method: 'GET',
                headers: headers
            })

            /* const token = await loginResponse.json();
            setToken(token.token); */
            const data = await response.json();
            setPublishedList(data);
            console.log(data);
        }

        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };
            const response = await fetch("http://localhost/leer-te-server/public/index.php/story/draftsFromUser", {
                method: 'GET',
                headers: headers
            })

            /* const token = await loginResponse.json();
            setToken(token.token); */
            const data = await response.json();
            setDraftsList(data);
            console.log(data);
        }

        fetchData();
    }, []);



    const firstList = profileInfoDisplay.favorites;

    const secondList = profileInfoDisplay.publications;
    const thirdList = profileInfoDisplay.drafts;


    return (
        <section className='userProfile-div-wrapper'>

            {/*  bookList && bookList.map(({ id, title, User, genre }, index) => ( */}

            <section className='userProfile-div-head'>
                {
                    profileInfoDisplay && profileInfoDisplay.map(({ userLogin }, id) => (
                        <span key={id}>¡Bienvenido, {userLogin}!</span>
                    ))
                }

                {/* {profileInfoDisplay[0].userLogin && <span>¡Bienvenido, {profileInfoDisplay[0].userLogin && profileInfoDisplay[0].userLogin}!</span>} */}

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
