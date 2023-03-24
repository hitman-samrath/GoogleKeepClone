import React from 'react'

const Note = (props) => {
    return (
        <>
            <div className='w-60 h-52 inline-flex align-middle m-8 rounded-xl justify-evenly shadow-lg shadow-slate-300'>
                <div className='p-5'>
                    <input readOnly value={props.value.heading} className='font-bold outline-none none'/>
                    <textarea readOnly value={props.value.content} className='pt-1 w-56 h-36 scrollbar-hidden resize-none outline-none'/>
                </div>
            </div>
        </>
    )
}

export default Note