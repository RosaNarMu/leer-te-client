import { useEffect, useState } from "react"
import Card from "./Card";
import CardProfile from "./CardProfile";


export default function HorizontalListProfile({ listName, list }) {





    return (
        <section className='horizontal-display-main'>

            <div className='horizontal-display-title'>{listName}</div>

            <div className='horizontal-display-cards'>
                {


                    list && list.map(({ id, StoryTitle, StoryAuthor, StoryGenre, StoryCoverImage }, index) => (

                        <CardProfile id={id} title={StoryTitle} author={StoryAuthor} genre={StoryGenre} coverImage={StoryCoverImage} listName={listName}></CardProfile>

                    ))}
            </div>
        </section>
    )
}


