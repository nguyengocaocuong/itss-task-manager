import { BrowserRouter, Outlet } from 'react-router-dom'
import './assets/styles/App.css'
import Routers from './Routers'

function App() {
  return (
    <BrowserRouter>
      <Routers />
      <Outlet />
    </BrowserRouter>
  )
}

export default App
