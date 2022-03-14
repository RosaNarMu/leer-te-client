import Card from "../components/HorizontalList/Card";
import { useEffect, useState, useContext } from "react"
import { useSearchParams } from 'react-router-dom'
import ScrollUp from "../components/Ui/ScrollUp";
import { STORY_DATA } from "../etc/config";
import UseContextGeneral from "../UseContext";
import { Pagination } from "../components/readsDisplay/Pagination";


export default function ReadsDisplay() {

    const [readsDisplay, setReadsDisplay] = useState([])

    const [currentPage, setCurrentPage] = useState(1); //current page
    const [postPerPage, setPostPerPage] = useState(9);//post per page

    const { user } = useContext(UseContextGeneral);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(STORY_DATA)
            const data = await response.json();
            setReadsDisplay(data);
        }

        fetchData();
    }, [])

    const [searchParams, setSearchParams] = useSearchParams();

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

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = result.slice(indexOfFirstPost, indexOfLastPost);

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
                    <form >

                        <label className="container" key="fantasia">Fantasía
                            <input type="radio" name="genre" value="fantasia" onChange={handleRadioFantasy} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="horror">Terror
                            <input type="radio" name="genre" value="horror" onChange={handleRadioHorror} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="romance">Romance
                            <input type="radio" name="genre" value="romance" onChange={handleRadioRomance} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="ciencia ficcion">Ciencia Ficción
                            <input type="radio" name="genre" value="ciencia ficcion" onChange={handleRadioSciFy} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="misterio">Misterio
                            <input type="radio" name="genre" value="misterio" onChange={handleRadioMistery} />
                            <span className="checkmark"></span>
                        </label>

                        <label className="container" key="no ficcion">No ficción
                            <input type="radio" name="genre" value="no ficcion" onChange={handleRadioNoFic} />
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

        </>
    )
}
