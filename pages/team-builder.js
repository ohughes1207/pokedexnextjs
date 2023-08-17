import React from 'react'

import Head from 'next/head'
import UIProvider from '@/components/UI/UIContext'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'
import TeamTable from '@/components/team_builder/TeamTable'



export default function TeamBuilder() {
    return (
        <>
            <Head>
                <title>Team Builder</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <UIProvider>
                <Navbar />
                <Sidebar />
            </UIProvider>
            <TeamTable />
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