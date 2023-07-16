import React from 'react'
import Head from 'next/head'

export default function Pokemon({pokemonData}) {
  return (
    <>
        <Head>
            <title>Pokemon</title>
            <meta name='description' content='Pokemon List'/>
        </Head>
        <div>
            {pokemonData.map( p => (
                <div className='p-2 border rounded'>
                    <h1 className='text-2xl font-semibold'>{p.base_name}</h1>
                    <h2 className='text-xl font-semibold'>{p.pokedex_num}</h2>
                </div>
            ) ) }
        </div>
    </>
  )
}


export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const pokemonData = await response.json()
    console.log("data", pokemonData)
    return {
        props: {
            pokemonData
        }
    }
}