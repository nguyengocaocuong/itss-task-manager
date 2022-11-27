import './assets/styles/App.css'
import Resetpass from './pages/Resetpass'
import VerifyPasswordEmail from './pages/VerifyPasswordEmail'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSearchParams } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="App">
          <h1>Welcome to 決勝</h1>
        </div>
      )
    },
    {
      path: '/forgot-password',
      element: <Resetpass />
    },
    {
      path: '/reset-password',
      element: <VerifyPasswordEmail />
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
