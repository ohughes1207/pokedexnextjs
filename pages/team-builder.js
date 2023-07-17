import React from 'react'

import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'



export default function TeamBuilder() {
    return (
        <>
            <Head>
                <title>Team Builder</title>
                <meta name='description' content='Pokemon List' />
            </Head>
            <Navbar />
            <Sidebar />
        </>
    )
}