import { useEffect, useState } from "react"


export default function HorizontalList() {

    const [bookList, setBookList] = useState([])


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/readings-published')
            const data = await response.json();
            setBookList(data);
            console.log(data);
        }

        fetchData();
    }, [])




    return (
        <section>



            <div>¡Novedades!</div>
            {

                bookList && bookList.map(({ id, title, author, genre }, index) => (
                    <div className="card-grid-space"
                        key={id}
                    >
                        <a className="card" >
                            <div>
                                <h1>{title}</h1>
                                <h3>{author}</h3>
                                <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>

                                <div className="tags">
                                    <div className="tag">Género: {genre}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
        </section>
    )
}


