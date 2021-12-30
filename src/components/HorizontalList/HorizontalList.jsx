import { useEffect, useState } from "react"
import Card from "./Card";


export default function HorizontalList({ listName, user }) {

    const [bookList, setBookList] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/readings-published')
            const data = await response.json();
            setBookList(data.slice(-4));
            console.log(data);
        }

        fetchData();
    }, [])




    return (
        <section className='horizontal-display-main'>



            <div className='horizontal-display-title'>{listName}</div>
            {

                bookList && bookList.map(({ id, title, author, genre }, index) => (
                    <Card id={id} title={title} author={author} genre={genre} user={user}></Card>
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


