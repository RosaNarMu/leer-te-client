import { useEffect, useState } from "react"

export default function CommentsBox({ idStory, }) {
    const [comment, setComment] = useState([])

    useEffect(() => {

        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json'
            };

            const response = await fetch(`http://localhost/leer-te-server/public/index.php/comment/detail/${idStory}`, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();

            setComment(data);

        }

        fetchData();
    }, []);

    console.log(comment);

    return (
        <>
            {/*  {comments && comments.map(({ commentId, userComenter, body }, index) => (

                <CommentsBox key={commentId} id={commentId} user={userComenter} comment={body}></CommentsBox> */}

            {
                comment && comment.map(({ id, User, content }, index) => (
                    < div key={id} className='commentsBox-main' >
                        <span className='commentsBox-main-username'>{`${User} dice:`}</span>
                        <span className='commentsBox-main-comment'>"{content}"</span>
                    </div >
                ))}
        </>
    )
}
