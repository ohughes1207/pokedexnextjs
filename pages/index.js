import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Counter from '@/components/Counter'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Background from '@/components/index/background'
import Footer from '@/components/index/Footer'
import Sidebar from '@/components/Sidebar'

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