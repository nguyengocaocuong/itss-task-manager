import React from 'react'
import { createBrowserRouter } from 'react-router-dom/dist'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/sign-up',
    element: <Signup />
  }
])

export default Routers
