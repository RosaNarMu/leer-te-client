import { useEffect, useState } from "react"
import { useFetch } from "../../hook/useFetch";
import Card from "./Card";
import { STORY_URL } from "../../config/config";


export default function HorizontalList({ listName, user }) {

    const [bookList, setBookList] = useState([])




    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };
            const response = await fetch(STORY_URL + 'data', {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();
            setBookList(data.slice(-4));

        }

        fetchData();
    }, [])

    /* useFetch('http://localhost:3000/readings-published', setBookList); */

    /* setBookList((element) => element.slice(-4)) */

    /* setBookList(bookList.slice(-4))
 */

    console.log(bookList);
    return (
        <section className='horizontal-display-main'>



            <div className='horizontal-display-title'>{listName}</div>
            {

                bookList && bookList.map(({ id, title, User, genre }, index) => (
                    <Card id={id} title={title} User={User} genre={genre} user={user}></Card>
                    /* <div className="card-grid-space"
                        key={id}
                    >
                        <a className="card" >
                            <div>
                                <h1>{title}</h1>
                                <h3>{author}</h3>


                                <div className="tags">
                                    <div className="tag">Género: {genre}</div>
                                </div>
                                <button className='btn'> Accede mediante pago social</button>
                            </div>
                        </a>
                    </div> */
                ))}
        </section>
    )
}


