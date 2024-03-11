import React from 'react'
import Link from 'next/link'


let getTitle = (note) => {
    let title = note.body.split('\n')[0]
    if (title.length > 30) {
        return title.slice(0, 45)
    } 
    return title
}

const ListItem = ({ note }) => {
  return (
    <Link href={`/notes/${note.id}`}>
        <div className='notes-list-item'>
            <h3>{getTitle(note)}</h3>

        </div>
    
    
    </Link>
  )
}

export default ListItem