import React from 'react'
import PokemonItem from '@/components/pokemon/PokemonItem'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import AltBackground from '@/components/alt_bg'
import Search from '@/components/pokemon/Search'



export default function Pokemon({ pokemonData, variantData }) {
    return (
        <>
            <Head>
                <title>Pokedex</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <div className='mx-auto pt-40'>
                <Search />
            </div>
            <div className='p-40 mx-auto'>
                <PokemonItem pokemonData={pokemonData}/>
            </div>
        </>
    )
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

export async function getServerSideProps(context) {
    const pokemonResponse = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const variantResponse = await fetch(`${process.env.NEXT_API_URL}/variants`)
    const pokemonData = await pokemonResponse.json()
    const variantData = await variantResponse.json()

    pokemonData.forEach((pokemon) => {
        pokemon.variants = variantData.filter((variant) => variant.pokedex_num === pokemon.pokedex_num);
      });
    
    return {
        props: {
            pokemonData
        }
    }
}
