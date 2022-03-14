import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import HorizontalList from '../components/HorizontalList/HorizontalList'
import UseContextGeneral from '../UseContext';
import Carousel from 'react-elastic-carousel';
import Item from './../components/Carousel/Item';
import ScrollUp from "../components/Ui/ScrollUp";


export default function Home() {

    const breakPoints = [
        { width: 1800, itemsToShow: 1 }
    ];

    const listName = '¡Novedades!';

    const { user } = useContext(UseContextGeneral);

    return (
        <>
            <main className='home-div-main'>


                <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>

                        <Item >
                            <div className='home-div-title'>
                                <h2>¿Qué te apetece hoy?</h2>
                                <h2>¿Leer?</h2>
                                <h2>¿Escribir?</h2>
                            </div>
                        </Item>


                        <Item className='home-div-left'>
                            <NavLink

                                to="/display" className="background-icon"
                            >

                                <h2 > <i className="fab fa-readme "></i>Explora</h2>
                            </NavLink>

                        </Item>

                        <Item className='home-div-right'>


                            {user ? (

                                <NavLink
                                    className="background-icon"
                                    to="/create"
                                >
                                    <h2 > <i className="fab fa-readme "></i>Crea</h2>
                                </NavLink>

                            ) : (
                                <NavLink
                                    className="background-icon"
                                    to="/login"
                                >
                                    <h2 > <i className="fab fa-readme "></i>Crea</h2>
                                </NavLink>
                            )}

                        </Item>

                    </Carousel>
                </div >

            </main >

            <HorizontalList listName={listName} user={user}></HorizontalList>

            <ScrollUp></ScrollUp>

        </>
    )
}
