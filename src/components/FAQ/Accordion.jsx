
export default function Accordion({ title, content }) {
    return (
        <details className='size'>
            <summary>{title}</summary>
            <div className="content">

                <p>{content}</p>

            </div>
        </details>
    )
}
