import Image from 'next/image'
import React from 'react'
import poke from '../../img/poke.gif'

export default function Background() {
    return (
        <div>
            <Image
                className='mt-[10px]'
                alt="pokeball animation"
                src={poke}
                quality={100}
                fill
                style={{
                objectFit: 'cover'
                }}
            />
        </div>
    )
  }