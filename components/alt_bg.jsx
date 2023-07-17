import Image from 'next/image'
import React from 'react'
import bg from '../img/2ndbg.jpg'

export default function AltBackground() {
    return (
        <div>
            <Image
                className='mt-[35px]'
                alt="pokeball animation"
                src={bg}
                quality={100}
                fill
                style={{
                objectFit: 'cover'
                }}
            />
        </div>
    )
  }