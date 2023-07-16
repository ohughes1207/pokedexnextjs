import React from 'react'
import PokemonItem from '@/components/pokemon/PokemonItem'
import Head from 'next/head'



export default function Pokemon({ pokemonData, variantData }) {
    return (
        <>
            <Head>
                <title>Pokemon</title>
                <meta name='description' content='Pokemon List' />
            </Head>

            <PokemonItem pokemonData={pokemonData} variantData={variantData}/>
        </>
    )
}


export async function getServerSideProps(context) {
    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const variantResponse = await fetch(`${process.env.NEXT_API_URL}/variants`)
    const pokemonData = await pokemonResponse.json()
    const variantData = await variantResponse.json()
    console.log("data", variantData)
    return {
        props: {
            pokemonData,
            variantData
        }
    }
}
