import { Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import './assets/styles/App.scss'
import TaskContainer from './components/TaskContainer'

function App() {
  const account = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined
  return account ? (
    <div className="app">
      <div className="app-container">
        <Header />
        <TaskContainer />
      </div>
    </div>
  ) : (
    <Navigate to={'/sign-in'} />
  )
}

export default App
