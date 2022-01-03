
export default function CommentsBox({ id, user, comment }) {

    return (
        <div key={id} className='commentsBox-main'>
            <span className='commentsBox-main-username'>{`${user} dice:`}</span>
            <span className='commentsBox-main-comment'>"{comment}"</span>
        </div>
    )
}
