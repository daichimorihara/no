'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import arrow from '../../assets/arrow-left.svg'
import Link from 'next/link'
import {redirect} from 'next/navigation'

const page = ({params}) => {

    let noteId = params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(note)
        }) 
    }

    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            }
        })
    }







    let handleChange = (value) => {
        setNote(note => ({...note, 'body': value}))
        console.log("Handle Change: ", note?.body)
    }

    let handleSubmit = () => {
        console.log('Note: ', note?.body)

        if (noteId !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteId !== "new") {
            updateNote()
        } else if (noteId === 'new' && note?.body !== null) {
            createNote()
        }


    }

    let goback = () => {
        console.log("taped")

    }





    return (
        <div className="flex flex-col w-full mb-16 pt-3 row-auto">
            <div className='flex flex-row justify-between px-11'>
                <Link href={`/`} >
                    <tag onClick={handleSubmit}>
                    <Image className="bg-red-700 text-emerald-400"  
                    priority 
                    src={arrow} 
                    height={100}
                    alt='<'
                    />

                    </tag>

       
                </Link>
                <Link href={'/'}>
                     {noteId !== "new"
                        ? <button onClick={deleteNote}>Delete</button>
                        : <button onClick={handleSubmit}>Done</button>
                     }

                </Link>
    
            
                </div>
            


            <textarea className='bg-black justify-center mx-11 px-5'
            onChange={(e) => { handleChange(e.target.value) }}
            value={note?.body}
            rows={10}
            cols={50}
            >
            </textarea>

            </div>


    )
}

export default page