'use client'

import React, {useState, useEffect} from 'react'

import Image from 'next/image'
import arrow from '../../assets/arrow-left.svg'


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

    return (
        <div>
            <Image className="bg-red-700 text-emerald-400"  priority src={arrow} height={100}alt='<'/>


            {note !== null 
            ? note.body
            : "no data"
            }
        </div>
    )
}

export default page