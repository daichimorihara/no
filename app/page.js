'use client'

import React, {useState, useEffect} from "react";
import ListItem from '../components/ListItem'
import AddButton from "../components/AddButton";


export default function Home() {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/")
    let data = await response.json()
    setNotes(data)
  }


  return (
    <div className="flex justify-center w-full mb-16 pt-3">
      <div className="flex flex-col">
          {notes.map((note, index) => (
            <ListItem key={index} note={note} />
          ))}

        <AddButton />     
      </div>
      

    </div>
  );
}
