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

    let updateNote = async () => {
        fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(note)
        })
    }





    let handleChange = (value) => {
        setNote(note => ({...note, 'body': value}))
        console.log("Handle Change: ", note.body)
    }

    let handleSubmit = () => {
        console.log('Note: ', note.body)
        updateNote()


    }

    let goback = () => {
        console.log("taped")

    }





    return (
        <div className="flex flex-col w-full mb-16 pt-3 row-auto">
            <div className='flex flex-row justify-between px-11'>
                <Link href={`/`} >

                    <Image className="bg-red-700 text-emerald-400"  
                    priority 
                    src={arrow} 
                    height={100}
                    alt='<'
                    />
       
                </Link>
                {noteId !== "new"
                     ? <button onClick={handleSubmit}>Delete</button>
                     : <button onClick={handleSubmit}>Done</button>
                     }

            
                </div>
            


            <textarea className='bg-black justify-center mx-11'
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