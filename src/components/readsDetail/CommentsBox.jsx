import { useEffect, useState } from "react"
import { COMMENT_DETAIL, COMMENT_DELETE } from "../../etc/config";

export default function CommentsBox({ idStory, }) {
    const [comment, setComment] = useState([]);

    const token = localStorage.getItem('UserToken');

    useEffect(() => {

        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            };

            const response = await fetch(COMMENT_DETAIL + idStory, {
                method: 'GET',
                headers: headers
            })
            const data = await response.json();
            setComment(data);
        }
        fetchData();
    }, [idStory, token]);

    function deleteComment(e, id) {

        async function fetchData() {
            const commentResponse = await fetch(COMMENT_DELETE + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await commentResponse.json();
        }
        fetchData();
        e.preventDefault();
    }


    return (
        <>
            {
                comment && comment.map(({ id, User, content, UserIdLogin, UserIdComment, score }) => (
                    < div key={id} className='commentsBox-main' >
                        {score >= 1 ? (
                            <>
                                <span className='commentsBox-main-username'>{`${User} dice:`}</span>
                                <span className='commentsBox-main-username'>{`Puntuación: ${score}`}</span>
                            </>) :
                            (<span className='commentsBox-main-username'>{`${User} dice:`}</span>)
                        }
                        <span className='commentsBox-main-comment'>"{content}"</span>

                        {UserIdLogin === UserIdComment && (

                            < button className='btn' onClick={(e) => deleteComment(e, id)}> Elimina tu comentario</button>
                        )}

                    </div >
                ))
            }
        </>
    )
}
