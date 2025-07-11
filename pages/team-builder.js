import React from 'react'

import Head from 'next/head'
import UIProvider from '@/components/UI/UIContext'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'
import TeamTable from '@/components/team_builder/TeamTable'
import ResetTableButton from '@/components/team_builder/ResetTableButton'



export default function TeamBuilder() {
    return (
        <>
            <Head>
                <title>Team Builder</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
            <TeamTable />
            <ResetTableButton />
        </>
    )
}