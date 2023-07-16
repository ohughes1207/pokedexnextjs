import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Counter from '@/components/Counter'

const inter = Inter({ subsets: ['latin'] })

import React from 'react'
import Background from '@/components/index/background'
import Footer from '@/components/index/Footer'

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Footer />
    </>
  )
}

/*
export default function Home() {
  return (
    <>
      <Navbar />
      <div className='homepage'></div>
      <Footer />
    </>
  )
}
*/