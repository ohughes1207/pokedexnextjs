import Image from 'next/image'
import React from 'react'

export default function Background() {
    return (
        <div>
            <Image
                className=''
                alt="pokeball animation"
                src='/poke.gif'
                fill
                style={{
                objectFit: 'cover'
                }}
            />
        </div>
    )
  }