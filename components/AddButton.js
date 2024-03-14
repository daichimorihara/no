import React from 'react'
import Image from 'next/image'
import plus from '../app/assets/plus.svg'
import Link from 'next/link'

const AddButton = () => {
  return (
    <div>
        <Link href={`/notes/new`} >

            <Image className="bg-red-700"  
            priority 
            src={plus} 
            height={100}
            alt='+'
            />

        </Link>
    </div>
  )
}

export default AddButton