import React from 'react'

export default function Accordion({ title }, { content }) {
    return (
        <details className='size'>
            <summary>{title}</summary>
            <div className="content">
                {/*  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi unde, ex rem voluptates autem aliquid veniam quis temporibus repudiandae illo, nostrum, pariatur quae! At animi modi dignissimos corrupti placeat voluptatum!
                </p>

                <p>
                    Facilis ducimus iure officia quos possimus quaerat iusto, quas, laboriosam sapiente autem ab assumenda eligendi voluptatum nisi eius cumque, tempore reprehenderit optio placeat praesentium non sint repellendus consequuntur?Nihil, soluta.
                </p> */}

                {content}
            </div>
        </details>
    )
}
