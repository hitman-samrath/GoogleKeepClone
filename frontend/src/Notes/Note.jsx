import React from 'react'

const Note = (props) => {
    return (
        <>
            <div className='w-60 xs:w-72 h-52 inline-flex align-middle m-4 md:m-6 mt-2 rounded-xl justify-evenly shadow-lg shadow-slate-300'>
                <div className='p-5 font-cursive'>
                    <input readOnly value={props.value.heading} className='capitalize font-bold outline-none none'/>
                    <textarea readOnly value={props.value.content} className='pt-1 w-56 h-36 scrollbar-hidden resize-none outline-none'/>
                </div>
            </div>
        </>
    )
}

export default Note