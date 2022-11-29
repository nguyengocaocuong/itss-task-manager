import React from 'react'
import { Outlet, Navigate } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  const account = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined
  return account ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to={'/sign-in'} />
  )
}

export default Home
