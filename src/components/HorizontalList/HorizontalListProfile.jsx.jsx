import { useEffect, useState } from "react"
import Card from "./Card";
import CardProfile from "./CardProfile";


export default function HorizontalListProfile({ listName, user, list }) {





    return (
        <section className='horizontal-display-main'>



            <div className='horizontal-display-title'>{listName}</div>
            {


                list && list.map(({ id, title, author, genre }, index) => (

                    <CardProfile id={id} title={title} author={author} genre={genre} user={user} listName={listName}></CardProfile>

                ))}
        </section>
    )
}


