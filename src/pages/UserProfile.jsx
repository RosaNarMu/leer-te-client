import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from "react"
import HorizontalListProfile from '../components/HorizontalList/HorizontalListProfile.jsx';
import { useFetch } from '../hook/useFetch.jsx';
import ScrollUp from '../components/Ui/ScrollUp.jsx';
import UseContextGeneral from '../UseContext.js';
import { USER_DATA } from '../config/config.js';


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

    /* const { token, setToken } = useContext(UseContextGeneral); */

    const [profileInfoDisplay, setProfileInfoDisplay] = useState({});

    const token = localStorage.getItem('UserToken');
    console.log(token);

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

            /* const token = await loginResponse.json();
            setToken(token.token); */
            const data = await response.json();
            console.log(data);
            setProfileInfoDisplay(data);
        }

        fetchData();
    }, []);

    /* useFetch('http://localhost:3000/profile', setProfileInfoDisplay); */



    const firstList = profileInfoDisplay.favorites;
    const secondList = profileInfoDisplay.readingsUnlocked;
    const thirdList = profileInfoDisplay.publications;
    const fourthList = profileInfoDisplay.drafts;


    return (
        <section className='userProfile-div-wrapper'>

            {/*  bookList && bookList.map(({ id, title, User, genre }, index) => ( */}

            <section className='userProfile-div-head'>
                {
                    profileInfoDisplay.map(({ userLogin }, id) => (

                        <span key={id}>¡Bienvenido, {userLogin}!</span>
                    ))
                }
                {/* <span>¡Bienvenido, {profileInfoDisplay.userLogin}!</span> */}

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


            <ScrollUp></ScrollUp>
        </section>
    )
}
