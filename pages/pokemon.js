import React from 'react'
import PokemonItem from '@/components/pokemon/PokemonItem'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import AltBackground from '@/components/alt_bg'



export default function Pokemon({ pokemonData, variantData }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <PokemonItem pokemonData={pokemonData} variantData={variantData}/>
        </>
    )
}


export async function getServerSideProps(context) {
    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const variantResponse = await fetch(`${process.env.NEXT_API_URL}/variants`)
    const pokemonData = await pokemonResponse.json()
    const variantData = await variantResponse.json()
    return {
        props: {
            pokemonData,
            variantData
        }
    }
}
