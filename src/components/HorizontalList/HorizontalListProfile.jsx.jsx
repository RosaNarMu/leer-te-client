import CardProfile from "./CardProfile";

export default function HorizontalListProfile({ listName, list }) {

    return (
        <section className='horizontal-display-main'>

            <div className='horizontal-display-title'>{listName}</div>

            <div className='horizontal-display-cards'>
                {


                    list && list.map(({ id, StoryTitle, StoryAuthor, StoryGenre, coverImage }, index) => (

                        <CardProfile id={id} title={StoryTitle} author={StoryAuthor} genre={StoryGenre} coverImage={coverImage} listName={listName}></CardProfile>

                    ))}
            </div>
        </section>
    )
}


