import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import HorizontalList from '../components/HorizontalList/HorizontalList'
import UseContextGeneral from '../UseContext';
import Carousel from 'react-elastic-carousel';
import Item from './../components/carousel/Item';
import ScrollUp from "../components/Ui/ScrollUp";



export default function Home() {

    const breakPoints = [

        { width: 1800, itemsToShow: 1 }
    ];



    const listName = '¡Novedades!';

    const { user, setUser } = useContext(UseContextGeneral);

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

                                to="/display"
                            >
                                <button className='home-div-button btn'> ¡Explora!<i className="fab fa-readme button-icon"></i></button>

                            </NavLink>
                            <i className="fab fa-readme background-icon fa-10x"></i>


                        </Item>

                        <Item className='home-div-right'>


                            {user ? (

                                <NavLink
                                    className=''
                                    to="/create"
                                >
                                    <button className='home-div-button btn'> ¡Crea! <i className="fas fa-feather-alt button-icon"></i></button>
                                </NavLink>

                            ) : (
                                <NavLink
                                    className=''
                                    to="/login"
                                >
                                    <button className='home-div-button btn'> ¡Crea! <i className="fas fa-feather-alt button-icon"></i></button>
                                </NavLink>
                            )}



                            <i className="fas fa-feather-alt background-icon fa-10x"></i>

                        </Item>

                    </Carousel>
                </div>

            </main >

            <HorizontalList listName={listName} user={user}></HorizontalList>

            <ScrollUp></ScrollUp>

        </>
    )
}
