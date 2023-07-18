import Image from 'next/image'
import React from 'react'
import poke from '../../img/poke.gif'

export default function Background() {
    return (
        <div>
            <Image
                className=''
                alt="pokeball animation"
                src={poke}
                fill
                style={{
                objectFit: 'cover'
                }}
            />
        </div>
    )
  }