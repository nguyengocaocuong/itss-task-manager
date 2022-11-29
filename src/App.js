import { Navigate } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  document.title = '決勝'
  const account = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined
  return account ? <Home /> : <Navigate to={'/sign-in'} />
}

export default App
