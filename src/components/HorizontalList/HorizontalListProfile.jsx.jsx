import { useEffect, useState } from "react"
import Card from "./Card";
import CardProfile from "./CardProfile";


export default function HorizontalListProfile({ listName, list }) {





    return (
        <section className='horizontal-display-main'>



            <div className='horizontal-display-title'>{listName}</div>
            {


                list && list.map(({ id, StoryTitle, StoryAuthor, StoryGenre }, index) => (

                    <CardProfile id={id} title={StoryTitle} author={StoryAuthor} genre={StoryGenre} listName={listName}></CardProfile>

                ))}
        </section>
    )
}


