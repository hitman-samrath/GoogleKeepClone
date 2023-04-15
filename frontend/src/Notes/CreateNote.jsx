import React, { useState } from 'react'
import Note from './Note';

const CreateNote = () => {

    const [visibility, setVisibility] = useState(false);

    const [note, setNote] = useState({
        heading: "",
        content: ""
    });

    const [allNotesData, setAllNotesData] = useState([]);

    const addNote = (props) => {
        const { name, value } = props.target;
        setNote((prevState) => {
            return { ...prevState, [name]: value }
        })
    }

    const setData = () => {
        setAllNotesData((prevData) => {
            return [...prevData, note]
        });
        console.log(allNotesData);
        setNote(() => {
            return {
                heading: "",
                content: ""
            };
        });
    }

    const checkData = (props) => {
        props.preventDefault();
        return note.heading.length === 0 || note.content.length === 0 ? alert('Please fill in all the fields') : setData();
    }

    const showNote = () => {
        setVisibility(true);
    }
    const hideNote = () => {
        setVisibility(false);
    }

    return (
        <>
            <div onDoubleClick={hideNote} className='m-auto pt-1 mt-5 w-64 xs:w-80 shadow-lg rounded-xl shadow-slate-400 font-cursive'>
                {/* <form>
                    {visibility ? <input type="text" name="heading" value={note.heading} placeholder="Add Title" onChange={addNote} className='w-full p-3 m-0 font-bold outline-none required' /> : <input placeholder="Add a note" onClick={showNote} className='w-full p-3 m-0 font-bold outline-none rounded-xl'></input>}
                    {visibility ? <textarea type="text" name="content" value={note.content} placeholder="Add a note..." rows="6" onChange={addNote} className='pl-3 w-3/4 xs:w-5/6 outline-none resize-none scrollbar-hidden required' /> : null}
                    {visibility ? <button className='ml-2 mr-1 mb-3 w-10 h-10 shadow-sm shadow-slate-700 rounded-full bg-white text-center text-4xl text-yellow-400 hover:text-white hover:bg-yellow-400 ' onClick={checkData}>+</button> : null}
                </form> */}
                <form>{visibility ?
                <>
                    <input type="text" name="heading" value={note.heading} placeholder="Add Title" onChange={addNote} className='w-full p-3 m-0 font-bold outline-none required' />
                    <textarea type="text" name="content" value={note.content} placeholder="Add a note..." rows="6" onChange={addNote} className='pl-3 w-3/4 xs:w-5/6 outline-none resize-none scrollbar-hidden required' />
                    <button className='ml-2 mr-1 mb-3 w-10 h-10 shadow-sm shadow-slate-700 rounded-full bg-white text-center text-4xl text-yellow-400 hover:text-white hover:bg-yellow-400 ' onClick={checkData}>+</button>
                </>
                :
                <input placeholder="Add a note" onClick={showNote} className='w-full p-3 m-0 font-bold outline-none rounded-xl'></input>
                }
                </form>
            </div>
            <div className='flex md:m-8 lg:m-12 mt-8 justify-center flex-wrap'>
                {allNotesData.map((value, index) => {
                    return (<Note id={index} key={index} value={value} />);
                })}</div>
        </>
    )
}

export default CreateNote