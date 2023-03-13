import React from 'react'
import { useState } from 'react'
import Note from './Note';

const CreateNote = () => {
    const [note, setNote]=useState({
        heading:"",
        content:""
    });
    const [allNotesData, setAllNotesData]=useState([]);

    const addNote=(props)=>{
        const {name,value}=props.target;
        setNote((prevState)=>{
            return {...prevState, [name]:value}
        })
    }

    const setData=()=>{
        setAllNotesData((prevData)=>{
            return [...prevData, note]
        });
        console.log(allNotesData);
        setNote(()=>{
            return {
                heading:"",
                content:""
            };
        });
    }

    const checkData=()=>{
        return note.heading.length===0 || note.content.length===0?alert('Please enter both the title and note correctly'):setData();
    }

    return (
        <>
            <div className='m-auto pt-1 mt-5 w-80 shadow-2xl rounded-xl shadow-slate-300 font-cursive'>
                <input type="text" name="heading" value={note.heading} placeholder="Add Title" onChange={addNote} className='w-full p-3 m-0 font-bold outline-none required'/>
                <textarea type="text" name="content" value={note.content} placeholder="Add a note..." rows="6" onChange={addNote} className='pl-3 w-5/6 outline-none resize-none required'/>
                <button className='ml-2 mr-1 mb-3 w-10 h-10 shadow-sm shadow-slate-700 rounded-full bg-white text-center text-4xl text-yellow-400' onClick={checkData}>+</button>
            </div>
            <div>{allNotesData.map((value, index)=>{
                return(<Note id={index} key={index} value={value}/>);
            })}</div>
        </>
    )
}

export default CreateNote