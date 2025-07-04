import React from 'react'
import Head from 'next/head'
import SearchMenu from '@/components/pokedex/SearchMenu'
import PokemonList from '@/components/pokedex/PokemonItem'
import UIProvider from '@/components/UI/UIContext'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'
import ScrollToTopButton from '@/components/pokedex/ScrollTopButton'
import ResetFiltersButton from '@/components/pokedex/ResetFiltersButton'



export default function Pokemon({ pokemonData, maxPages }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <SearchMenu />
            <PokemonList pokemonData={pokemonData} maxPages={maxPages} />
            <ResetFiltersButton />
            <ScrollToTopButton />
        </>
    )
}

export async function getServerSideProps() {

    
    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/api/PokemonBase/filtered?page=1`).then(res => res.json())
    .then(console.log)
    .catch(console.error);;

    const dataFetched = await pokemonResponse.json()
    
    const pokemonData = dataFetched.data
    const maxPages = dataFetched.totalPages
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