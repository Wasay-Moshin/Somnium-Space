import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  return (
    <>
    
    <Head><title>Somnium Space</title></Head>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout