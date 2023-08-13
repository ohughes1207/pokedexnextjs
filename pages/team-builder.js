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
    const variantResponse = await fetch(`${process.env.NEXT_API_URL}/variants`)
    const variantData = await variantResponse.json()
    const typeResponse = await fetch(`${process.env.NEXT_API_URL}/types`)
    const typeData = await typeResponse.json()

    variantData.forEach((variant) => {
        variant.type_1_rel = typeData.filter((variant) => typeData.type_name === variant.type_1);
      });
    variantData.forEach((variant) => {
        variant.type_2_rel = typeData.filter((variant) => typeData.type_name === variant.type_2);
      });    
    return {
        props: {
            variantData
        }
    }
}