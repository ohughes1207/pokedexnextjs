import React from 'react'
import Head from 'next/head'
import SearchMenu from '@/components/pokedex/SearchMenu'
import PokemonList from '@/components/pokedex/PokemonItem'
import PokedexProvider from '@/components/pokedex/PokedexContext'
import UIProvider from '@/components/UI/UIContext'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'
import ScrollToTopButton from '@/components/pokedex/ScrollTopButton'



export default function Pokemon({ pokemonData, maxPages }) {
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
            <PokedexProvider>
                <SearchMenu />
                <PokemonList pokemonData={pokemonData} maxPages={maxPages} />
            </PokedexProvider>
            <ScrollToTopButton />
        </>
    )
}

export async function getServerSideProps() {

    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon?page=1`)

    const dataFetched = await pokemonResponse.json()
    
    const pokemonData = dataFetched.data
    const maxPages = dataFetched.total_pages
    const currentPage = dataFetched.page


    //console.log("pokemonData type:", typeof pokemonData);
    //console.log(process.env.NEXT_API_URL)
    return {
        props: {
            pokemonData,
            maxPages,
        }
    }
}