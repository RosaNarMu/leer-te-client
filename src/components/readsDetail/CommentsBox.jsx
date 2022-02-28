import { useEffect, useState } from "react"

export default function CommentsBox({ idStory, }) {
    const [comment, setComment] = useState([])

    const token = localStorage.getItem('UserToken');

    useEffect(() => {

        async function fetchData() {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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
            {
                comment && comment.map(({ id, User, content, UserIdLogin, UserIdComment }, index) => (
                    < div key={id} className='commentsBox-main' >
                        <span className='commentsBox-main-username'>{`${User} dice:`}</span>
                        <span className='commentsBox-main-comment'>"{content}"</span>

                        {console.log(UserIdLogin)}
                        {console.log(UserIdComment)}

                        {UserIdLogin == UserIdComment && (

                            < button > Elimina tu comentario</button>
                        )}

                    </div >
                ))
            }
        </>
    )
}
