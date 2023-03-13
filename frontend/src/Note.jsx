import React from 'react'

const Note = (props) => {
    return (
        <>
            <div className='w-80'>
                <h1>{props.value.heading}</h1>
                <h1>{props.value.content}</h1>
            </div>
        </>
    )
}

export default Note