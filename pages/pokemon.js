import React from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SearchMenu from '@/components/pokemon/SearchMenu'
import PokemonList from '@/components/pokemon/PokemonItem'
import PokedexProvider from '@/components/pokemon/PokedexContext'



export default function Pokemon({ pokemonData }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <PokedexProvider >
                <SearchMenu />
                <PokemonList pokemonData={pokemonData}/>
            </PokedexProvider>
        </>
    )
}

export async function getServerSideProps() {
    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const variantResponse = await fetch(`${process.env.NEXT_API_URL}/variants`)
    const pokemonData = await pokemonResponse.json()
    const variantData = await variantResponse.json()
    console.log("pokemonData:", pokemonData);
    pokemonData.forEach((pokemon) => {
        pokemon.variants = variantData.filter((variant) => variant.pokedex_num === pokemon.pokedex_num);
      });
    
    return {
        props: {
            pokemonData
        }
    }
}


/*
export default function Pokemon({ pokemonData, variantData }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <div className='mt-40 ml-40'>
                <PokemonItem pokemonData={pokemonData} variantData={variantData}/>
            </div>
        </>
    )
}





*/