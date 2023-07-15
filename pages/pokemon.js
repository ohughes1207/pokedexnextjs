import React from 'react'
import Head from 'next/head'
export default function Pokemon() {
  return (
    <>
        <Head>
            <title>Pokemon</title>
            <meta name='description' content='Pokemon List'/>
        </Head>
    </>
  )
}


export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.NEXT_API_URL}/pokemon`)
    const data = await response.json()
    console.log("data", data)
    return {
        props: {
            data
        }
    }
}