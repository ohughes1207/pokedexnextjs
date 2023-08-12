import React from 'react'
import Head from 'next/head'
import SearchMenu from '@/components/pokedex/SearchMenu'
import PokemonList from '@/components/pokedex/PokemonItem'
import PokedexProvider from '@/components/pokedex/PokedexContext'
import UIProvider from '@/components/UI/UIContext'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'



export default function Pokemon({ pokemonData }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <UIProvider>
                <Navbar />
                <Sidebar />
            </UIProvider>
            <PokedexProvider >
                <SearchMenu />
                <PokemonList pokemonData={pokemonData}/>
            </PokedexProvider>
        </>
    )
}

export async function getServerSideProps() {

    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon?page=1`)

    const dataFetched = await pokemonResponse.json()
    const pokemonData = dataFetched.data
    //console.log("pokemonData type:", typeof pokemonData);
    //console.log(process.env.NEXT_API_URL)
    return {
        props: {
            pokemonData,
        }
    }
}