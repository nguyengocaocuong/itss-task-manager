import { Navigate } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  document.title = '決勝'
  //   const account = localStorage.getItem('user') ? JSON.stringify(localStorage.getItem('user')) : undefined
  return <Home />
}

export default App
