import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Background from '@/components/index/background'
import Footer from '@/components/index/Footer'
import Sidebar from '@/components/UI/Sidebar'
import Navbar from '@/components/UI/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex App Homepage</title>
        <meta name='description' content='Pokedex App Homepage' />
      </Head>
      <Background />
      <Navbar />
      <Sidebar />
      <Footer />
    </>  
  )
}