import { useEffect, useState } from "react"
import Card from "./Card";
import { STORY_DATA } from "../../etc/config";


export default function HorizontalList({ listName, user }) {

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };
            const response = await fetch(STORY_DATA, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();
            setBookList(data.slice(-8));
        }

        fetchData();
    }, [])


    console.log(bookList);
    return (
        <section className='horizontal-display-main'>

            <div className='horizontal-display-title'>{listName}</div>

            <div className='horizontal-display-cards'>
                {

                    bookList && bookList.map(({ id, title, User, genre, coverImage }) => (
                        <Card id={id} title={title} User={User} genre={genre} user={user} coverImage={coverImage}></Card>

                    ))}
            </div>
        </section>
    )
}


