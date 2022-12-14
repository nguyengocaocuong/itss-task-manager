import React from 'react'
import { createBrowserRouter } from 'react-router-dom/dist'
import App from './App'
import Profile from './pages/Profile'
import Resetpass from './pages/Resetpass'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import VerifyPasswordEmail from './pages/VerifyPasswordEmail'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    index: true
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/reset-pass',
    element: <Resetpass />
  },
  {
    path: '/verify-pass',
    element: <VerifyPasswordEmail />
  }
])

export default Routers
