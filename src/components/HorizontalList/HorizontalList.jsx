import { useEffect, useState } from "react"
import { useFetch } from "../../hook/useFetch";
import Card from "./Card";
import { STORY_URL } from "../../etc/config";


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
            setBookList(data.slice(-8));

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

            <div className='horizontal-display-cards'>
                {

                    bookList && bookList.map(({ id, title, User, genre, coverImage }, index) => (
                        <Card id={id} title={title} User={User} genre={genre} user={user} coverImage={coverImage}></Card>

                    ))}
            </div>
        </section>
    )
}


