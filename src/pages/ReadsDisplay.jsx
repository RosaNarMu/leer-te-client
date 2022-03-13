import ReadsDetail from "./ReadsDetailFav";
import Card from "../components/HorizontalList/Card";
import { useEffect, useState, useContext } from "react"
import { NavLink, Outlet, Link, useSearchParams } from 'react-router-dom'
import { useFetch } from "../hook/useFetch";
import ScrollUp from "../components/Ui/ScrollUp";
import { STORY_URL } from "../config/config";
import UseContextGeneral from "../UseContext";
import { Pagination } from "../components/readsDisplay/Pagination";


export default function ReadsDisplay() {

    const [readsDisplay, setReadsDisplay] = useState([])

    const [currentPage, setCurrentPage] = useState(1); //current page
    const [postPerPage, setPostPerPage] = useState(12);//post per page

    const { user, setUser } = useContext(UseContextGeneral);


    /*  useEffect(() => {
         async function fetchData() {
             const response = await fetch('http://localhost:3000/readings-published')
             const data = await response.json();
             setReadsDisplay(data);
             console.log(data);
         }
 
         fetchData();
     }, []) */

    useFetch(STORY_URL + 'data', setReadsDisplay);



    const [searchParams, setSearchParams] = useSearchParams();

    function emptyFunction(params) {

    };

    function handleFilter(e) {
        setSearchParams({ filter: e.target.value })
    };

    function handleRadioFantasy(e) {
        setSearchParams({ filter: 'fantasia' })
    };

    function handleRadioHorror(e) {
        setSearchParams({ filter: 'horror' })
    };

    function handleRadioRomance(e) {
        setSearchParams({ filter: 'romance' })
    };

    function handleRadioSciFy(e) {
        setSearchParams({ filter: 'ciencia ficcion' })
    };

    function handleRadioMistery(e) {
        setSearchParams({ filter: 'misterio' })
    };

    function handleRadioNoFic(e) {
        setSearchParams({ filter: 'no ficcion' })
    };

    const filter = searchParams.get('filter') || '';


    let result = readsDisplay.filter((reading) => {
        if (!filter) {
            return true;
        }

        const genre = reading.genre.toLowerCase();

        const title = reading.title.toLowerCase();




        const filteredTitle = title.includes(filter.toLocaleLowerCase());

        const filteredGenre = genre.includes(filter.toLowerCase());

        if (filteredTitle) {
            return filteredTitle
        } else if (filteredGenre) {
            return filteredGenre
        }

    })
    console.log(result.length);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost); //select the post that go in the current page

    let totalPosts = result.length;



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



                        <label className="container" key="fantasia">Fantasía
                            <input type="radio" name="genre" /* checked="checked" */ value="fantasia" onChange={handleRadioFantasy} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="horror">Terror
                            <input type="radio" name="genre" /* checked="checked" */ value="horror" onChange={handleRadioHorror} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="romance">Romance
                            <input type="radio" name="genre" /* checked="checked" */ value="romance" onChange={handleRadioRomance} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="ciencia ficcion">Ciencia Ficción
                            <input type="radio" name="genre" /* checked="checked" */ value="ciencia ficcion" onChange={handleRadioSciFy} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="misterio">Misterio
                            <input type="radio" name="genre" /* checked="checked" */ value="misterio" onChange={handleRadioMistery} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="no ficcion">No ficción
                            <input type="radio" name="genre" /* checked="checked" */ value="no ficcion" onChange={handleRadioNoFic} />
                            <span className="checkmark"></span>
                        </label>

                    </form>

                </div>


                <div className='reads-display-cards'>
                    {


                        currentPosts.map(({ id, title, User, genre, coverImage }, index) => {


                            return <Card id={id} title={title} User={User} genre={genre} user={user} coverImage={coverImage}></Card>


                        })}
                </div>


                <ScrollUp></ScrollUp>

            </main>
            <Pagination postsPerPage={postPerPage} totalPosts={totalPosts} setCurrentPage={setCurrentPage}></Pagination>


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
