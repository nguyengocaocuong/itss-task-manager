import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home
